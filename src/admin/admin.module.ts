import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { AuthModule } from '../auth/auth.module';
import { JwtStrategy } from '../auth/jwt.strategy';



@Module({
  imports: [AuthModule],
  controllers: [AdminController],
  providers: [AdminService, JwtStrategy],
})

export class AdminModule {}
