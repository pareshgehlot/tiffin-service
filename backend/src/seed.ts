/* eslint-disable no-console */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MenuService } from './modules/menu/menu.service';
import { PlansService } from './modules/plans/plans.service';
import { UsersService } from './modules/users/users.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule, {
    logger: ['error', 'warn']
  });

  const menuService = app.get(MenuService);
  const plansService = app.get(PlansService);
  const usersService = app.get(UsersService);

  menuService.create({
    title: 'Classic Veg Thali',
    description: 'Dal, roti, rice, sabzi, salad',
    day: 'monday',
    category: 'veg',
    price: 12,
    tags: ['popular', 'comfort']
  });

  plansService.create({
    name: 'Weekly Plan',
    duration: '7 days',
    price: 70,
    discount: 5
  });

  usersService.create({
    firstName: 'Demo',
    lastName: 'Customer',
    email: 'demo@tiffin.com',
    password: 'DemoPassword1!',
    role: 'customer'
  });

  console.log('Seed data loaded');
  await app.close();
}

bootstrap().catch((error) => {
  console.error(error);
  process.exit(1);
});
