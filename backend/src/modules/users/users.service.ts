import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users: any[] = [];

  create(payload: CreateUserDto) {
    const user = { id: `user-${Date.now()}`, ...payload };
    this.users.push(user);
    return user;
  }

  findAll() {
    return this.users;
  }

  findOne(id: string) {
    return this.users.find((user) => user.id === id);
  }

  update(id: string, payload: UpdateUserDto) {
    const user = this.findOne(id);
    if (!user) return undefined;
    Object.assign(user, payload);
    return user;
  }

  remove(id: string) {
    this.users = this.users.filter((user) => user.id !== id);
    return { deleted: true };
  }
}
