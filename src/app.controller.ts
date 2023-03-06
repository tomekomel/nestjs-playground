import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users/users.service';

@Controller()
export class AppController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getHello(): string {
    return 'Hello '+this.usersService.getAppName();
  }
}
