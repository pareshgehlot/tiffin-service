import { Injectable } from '@nestjs/common';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';

@Injectable()
export class PlansService {
  private plans: any[] = [];

  create(payload: CreatePlanDto) {
    const plan = { id: `plan-${Date.now()}`, ...payload };
    this.plans.push(plan);
    return plan;
  }

  findAll() {
    return this.plans;
  }

  findOne(id: string) {
    return this.plans.find((plan) => plan.id === id);
  }

  update(id: string, payload: UpdatePlanDto) {
    const plan = this.findOne(id);
    if (!plan) return undefined;
    Object.assign(plan, payload);
    return plan;
  }

  remove(id: string) {
    this.plans = this.plans.filter((plan) => plan.id !== id);
    return { deleted: true };
  }
}
