import { Injectable } from '@nestjs/common';
import { ConfigService } from '../config/config.service';

@Injectable()
export class UsersService {
  constructor(private readonly configService: ConfigService) {}

  public getAppName() {
    return this.configService.get('APP_NAME');
  }
}
