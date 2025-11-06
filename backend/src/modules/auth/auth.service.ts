import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService
  ) {}

  async register(payload: RegisterDto) {
    const user = await this.usersService.create({
      ...payload,
      role: 'customer'
    });

    return this.buildAuthResponse(user);
  }

  async login(credentials: LoginDto) {
    const userDoc = await this.usersService.findByEmail(credentials.email);
    if (!userDoc) {
      throw new UnauthorizedException('Invalid credentials');
    }

    if (!userDoc.isActive) {
      throw new UnauthorizedException('Account disabled');
    }

    const passwordMatches = await bcrypt.compare(credentials.password, userDoc.password);
    if (!passwordMatches) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const { password, __v, _id, ...rest } = userDoc.toObject();
    const user = { id: _id.toString(), ...rest };

    return this.buildAuthResponse(user);
  }

  async refreshToken({ refreshToken }: RefreshTokenDto) {
    try {
      const payload = await this.jwtService.verifyAsync(refreshToken, {
        secret: this.configService.get<string>('jwt.refreshSecret')
      });

      const userDoc = await this.usersService.findByEmail(payload.email);
      if (!userDoc) {
        throw new UnauthorizedException('User no longer exists');
      }

      if (!userDoc.isActive) {
        throw new UnauthorizedException('Account disabled');
      }

      const { password, __v, _id, ...rest } = userDoc.toObject();
      const user = { id: _id.toString(), ...rest };

      return this.buildAuthResponse(user);
    } catch (error) {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }

  private async generateTokens(user: { id: string; email: string; role: string }) {
    const accessToken = await this.jwtService.signAsync(
      { sub: user.id, email: user.email, role: user.role },
      { secret: this.configService.get<string>('jwt.secret'), expiresIn: this.configService.get<string>('jwt.expiresIn') }
    );

    const refreshToken = await this.jwtService.signAsync(
      { sub: user.id, email: user.email, role: user.role },
      {
        secret: this.configService.get<string>('jwt.refreshSecret'),
        expiresIn: this.configService.get<string>('jwt.refreshExpiresIn')
      }
    );

    return { accessToken, refreshToken };
  }

  private async buildAuthResponse(user: { id: string; email: string; role: string } & Record<string, any>) {
    const tokens = await this.generateTokens(user);
    return {
      user,
      ...tokens
    };
  }
}
