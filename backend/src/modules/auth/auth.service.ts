import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService
  ) {}

  async register(payload: RegisterDto) {
    // Placeholder implementation for demo purposes
    const user = { ...payload, id: 'temp-id' };
    return this.generateTokens(user);
  }

  async login(credentials: LoginDto) {
    // Placeholder authentication logic
    const user = { id: 'temp-id', email: credentials.email, role: 'customer' };
    return this.generateTokens(user);
  }

  async refreshToken({ refreshToken }: RefreshTokenDto) {
    const payload = this.jwtService.verify(refreshToken, {
      secret: this.configService.get<string>('jwt.refreshSecret')
    });
    return this.generateTokens(payload);
  }

  private generateTokens(user: any) {
    const accessToken = this.jwtService.sign(
      { sub: user.id, email: user.email, role: user.role },
      {
        secret: this.configService.get<string>('jwt.secret'),
        expiresIn: this.configService.get<string>('jwt.expiresIn')
      }
    );
    const refreshToken = this.jwtService.sign(
      { sub: user.id, email: user.email, role: user.role },
      {
        secret: this.configService.get<string>('jwt.refreshSecret'),
        expiresIn: this.configService.get<string>('jwt.refreshExpiresIn')
      }
    );
    return { accessToken, refreshToken };
  }
}
