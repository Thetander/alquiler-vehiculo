import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColorEntity } from 'color/domain/entities/colores.entity';
import { ColorController } from 'color/infrastructure/controllers/color.controller';
import { ColorService } from '../services/color.service';

@Module({
    imports: [TypeOrmModule.forFeature([ColorEntity])],
    controllers:[ColorController],
    exports:[ColorService],
    providers:[ColorService]
})
export class ColorModule {}
