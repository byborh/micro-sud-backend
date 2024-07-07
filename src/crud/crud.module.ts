import { Module } from '@nestjs/common';
import { CrudService } from './crud.service';
import { CrudController } from './crud.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [CrudController],
  providers: [CrudService],
})
export class CrudModule {}
