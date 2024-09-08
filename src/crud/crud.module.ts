import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { CrudService } from './crud.service';
import { CrudController } from './crud.controller';
//import { Page } from '../entities/page.entity';
// import { Element } from '../entities/element.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    //TypeOrmModule.forFeature([Page, Element]),
  AuthModule
  ],
  controllers: [CrudController],
  providers: [CrudService],
})
export class CrudModule {}
