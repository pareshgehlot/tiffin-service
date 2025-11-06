import { Injectable } from '@nestjs/common';

@Injectable()
export class AnalyticsService {
  getSummary() {
    return {
      dailySales: 0,
      weeklySales: 0,
      monthlySales: 0,
      topItems: [],
      retentionRate: 0,
      deliveryPerformance: []
    };
  }
}
