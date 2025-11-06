import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UsersService } from './users.service';

@Injectable()
export class AdminSeeder implements OnModuleInit {
  private readonly logger = new Logger(AdminSeeder.name);

  constructor(
    private readonly usersService: UsersService,
    private readonly configService: ConfigService
  ) {}

  async onModuleInit() {
    const email = this.configService.get<string>('admin.email');
    const password = this.configService.get<string>('admin.password');

    if (!email || !password) {
      this.logger.warn('Admin credentials not configured. Skipping default admin seeding.');
      return;
    }

    try {
      await this.usersService.ensureDefaultAdmin(email, password);
      this.logger.log('Default admin verified');
    } catch (error) {
      const err = error as Error;
      this.logger.error('Failed to ensure default admin user', err?.stack);
    }
  }
}
