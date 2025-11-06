import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';

@Injectable()
export class ReviewsService {
  private reviews: any[] = [];

  create(payload: CreateReviewDto) {
    const review = { id: `review-${Date.now()}`, ...payload };
    this.reviews.push(review);
    return review;
  }

  findAll() {
    return this.reviews;
  }

  findOne(id: string) {
    return this.reviews.find((review) => review.id === id);
  }

  update(id: string, payload: UpdateReviewDto) {
    const review = this.findOne(id);
    if (!review) return undefined;
    Object.assign(review, payload);
    return review;
  }

  remove(id: string) {
    this.reviews = this.reviews.filter((review) => review.id !== id);
    return { deleted: true };
  }
}
