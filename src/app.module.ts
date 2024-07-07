import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { CrudModule } from './crud/crud.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Page } from './entities/page.entity';
import { Element } from './entities/element.entity';
import { Admin } from './entities/admin.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'my_user',
      password: 'my_password',
      database: 'my_database',
      entities: [Page, Element, Admin],
      synchronize: true, // Ne pas utiliser en production, à supprimer après le developement
    }),
    TypeOrmModule.forFeature([Page, Element, Admin]),
    AdminModule,
    CrudModule
  ],
})
export class AppModule {}

