import { Injectable } from '@nestjs/common';
import { CreateMenuItemDto } from './dto/create-menu-item.dto';
import { UpdateMenuItemDto } from './dto/update-menu-item.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';

@Injectable()
export class MenuService {
  private menuItems: any[] = [];

  create(payload: CreateMenuItemDto) {
    const item = { id: `menu-${Date.now()}`, ...payload };
    this.menuItems.push(item);
    return item;
  }

  findAll(query: PaginationDto) {
    const { page = 1, limit = 10 } = query;
    const start = (page - 1) * limit;
    const data = this.menuItems.slice(start, start + limit);
    return { data, total: this.menuItems.length, page, limit };
  }

  findOne(id: string) {
    return this.menuItems.find((item) => item.id === id);
  }

  update(id: string, payload: UpdateMenuItemDto) {
    const item = this.findOne(id);
    if (!item) return undefined;
    Object.assign(item, payload);
    return item;
  }

  remove(id: string) {
    this.menuItems = this.menuItems.filter((item) => item.id !== id);
    return { deleted: true };
  }
}
