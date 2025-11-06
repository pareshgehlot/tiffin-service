import {
  Body,
  Controller,
  Delete,
  ForbiddenException,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Req,
  UseGuards
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { Roles } from '../../common/guards/roles.decorator';
import { RolesGuard } from '../../common/guards/roles.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdateUserRoleDto } from './dto/update-user-role.dto';
import { UsersService } from './users.service';
import { Request } from 'express';

@ApiTags('users')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly configService: ConfigService
  ) {}

  @Roles('admin', 'super-admin')
  @Post()
  create(@Body() payload: CreateUserDto, @Req() request: Request) {
    const actor = request.user as { role?: string } | undefined;
    if (payload.role === 'super-admin' && actor?.role !== 'super-admin') {
      throw new ForbiddenException('Only super-admins can create other super-admins');
    }
    return this.usersService.create(payload);
  }

  @Roles('admin', 'super-admin')
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Roles('admin', 'super-admin')
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Roles('admin', 'super-admin')
  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateUserDto) {
    return this.usersService.update(id, payload);
  }

  @Roles('super-admin')
  @Patch('role/:id')
  updateRole(@Param('id') id: string, @Body() payload: UpdateUserRoleDto) {
    const defaultAdminEmail = this.configService.get<string>('admin.email');
    return this.usersService.updateRole(id, payload, defaultAdminEmail ?? undefined);
  }

  @Roles('super-admin')
  @Delete(':id')
  remove(@Param('id') id: string) {
    const defaultAdminEmail = this.configService.get<string>('admin.email');
    return this.usersService.remove(id, defaultAdminEmail ?? undefined);
  }
}
