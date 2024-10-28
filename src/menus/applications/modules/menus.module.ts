import { Module } from '@nestjs/common';
import { MenusController } from '../../infrastructure/controllers/menus.controller';
import { MenuEntity } from 'src/menus/domain/entities/menus.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MenuEntity])],
  controllers: [MenusController]
})
export class MenusModule {}
