import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdateUserRoleDto } from './dto/update-user-role.dto';
import { USER_ROLES, User, UserDocument } from '../../schemas/user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>
  ) {}

  private sanitize(user: UserDocument | (User & { _id: any })) {
    if (!user) {
      return null;
    }

    const { password, __v, _id, ...rest } = user.toObject ? user.toObject() : user;
    const id = typeof _id === 'object' && _id !== null && 'toString' in _id ? _id.toString() : _id;
    return { id: id ?? rest.id, ...rest };
  }

  async create(payload: CreateUserDto) {
    const existing = await this.userModel.findOne({ email: payload.email }).exec();
    if (existing) {
      throw new ConflictException('User with this email already exists');
    }

    if (payload.role && !USER_ROLES.includes(payload.role)) {
      throw new BadRequestException('Invalid role');
    }

    const hashedPassword = await bcrypt.hash(payload.password, 10);

    const createdUser = await this.userModel.create({
      ...payload,
      password: hashedPassword,
      isActive: payload.isActive ?? true
    });

    return this.sanitize(createdUser);
  }

  async findAll() {
    const users = await this.userModel.find().lean();
    return users.map((user) => this.sanitize(user)).filter(Boolean);
  }

  async findOne(id: string) {
    const user = await this.userModel.findById(id).exec();
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return this.sanitize(user);
  }

  async findByEmail(email: string) {
    return this.userModel.findOne({ email }).exec();
  }

  async update(id: string, payload: UpdateUserDto) {
    const user = await this.userModel.findById(id).exec();
    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (payload.email && payload.email !== user.email) {
      const existing = await this.userModel
        .findOne({ email: payload.email, _id: { $ne: id } })
        .exec();
      if (existing) {
        throw new ConflictException('Email already in use');
      }
      user.email = payload.email;
    }

    if (payload.role && payload.role !== user.role) {
      throw new BadRequestException('Use the dedicated role endpoint to change user roles');
    }

    if (payload.password) {
      user.password = await bcrypt.hash(payload.password, 10);
    }

    if (payload.preferences !== undefined) {
      user.preferences = payload.preferences;
    }

    if (payload.phoneNumber !== undefined) {
      user.phoneNumber = payload.phoneNumber;
    }

    if (payload.firstName) {
      user.firstName = payload.firstName;
    }

    if (payload.lastName) {
      user.lastName = payload.lastName;
    }

    if (payload.isActive !== undefined) {
      user.isActive = payload.isActive;
    }

    await user.save();
    return this.sanitize(user);
  }

  async remove(id: string, defaultAdminEmail?: string) {
    const user = await this.userModel.findById(id).exec();
    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (defaultAdminEmail && user.email === defaultAdminEmail) {
      throw new BadRequestException('Default admin account cannot be deleted');
    }

    await this.userModel.deleteOne({ _id: id }).exec();
    return { deleted: true };
  }

  async updateRole(id: string, payload: UpdateUserRoleDto, defaultAdminEmail?: string) {
    const user = await this.userModel.findById(id).exec();
    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (!USER_ROLES.includes(payload.role)) {
      throw new BadRequestException('Invalid role');
    }

    if (defaultAdminEmail && user.email === defaultAdminEmail && payload.role !== 'super-admin') {
      throw new BadRequestException('Default admin must remain a super-admin');
    }

    user.role = payload.role;
    await user.save();
    return this.sanitize(user);
  }

  async ensureDefaultAdmin(email: string, password: string) {
    if (!email || !password) {
      return;
    }

    const existing = await this.userModel.findOne({ email }).exec();
    if (existing) {
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await this.userModel.create({
      firstName: 'Default',
      lastName: 'Admin',
      email,
      password: hashedPassword,
      role: 'super-admin',
      isActive: true
    });
  }
}
