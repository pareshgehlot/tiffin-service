import { Injectable } from '@nestjs/common';
import { CreatePromotionDto } from './dto/create-promotion.dto';
import { UpdatePromotionDto } from './dto/update-promotion.dto';

@Injectable()
export class PromotionsService {
  private promotions: any[] = [];

  create(payload: CreatePromotionDto) {
    const promotion = { id: `promotion-${Date.now()}`, ...payload };
    this.promotions.push(promotion);
    return promotion;
  }

  findAll() {
    return this.promotions;
  }

  findOne(id: string) {
    return this.promotions.find((promotion) => promotion.id === id);
  }

  update(id: string, payload: UpdatePromotionDto) {
    const promotion = this.findOne(id);
    if (!promotion) return undefined;
    Object.assign(promotion, payload);
    return promotion;
  }

  remove(id: string) {
    this.promotions = this.promotions.filter((promotion) => promotion.id !== id);
    return { deleted: true };
  }
}
