import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { ConfigModule } from '../config/config.module';

@Module({
  imports: [ConfigModule.register({ folder: 'config/defaults' })],
  providers: [UsersService],
  exports: [ConfigModule],
})
export class UsersModule {}
