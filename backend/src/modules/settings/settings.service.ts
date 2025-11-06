import { Injectable } from '@nestjs/common';
import { UpdateSettingDto } from './dto/update-setting.dto';

@Injectable()
export class SettingsService {
  private settings = new Map<string, any>();

  list() {
    return Array.from(this.settings.entries()).map(([key, value]) => ({ key, ...value }));
  }

  get(key: string) {
    return this.settings.get(key);
  }

  update(key: string, payload: UpdateSettingDto) {
    const existing = this.settings.get(key) || { key };
    const updated = { ...existing, ...payload };
    this.settings.set(key, updated);
    return updated;
  }
}
