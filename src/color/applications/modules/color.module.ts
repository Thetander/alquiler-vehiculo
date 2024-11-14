import { Module } from '@nestjs/common';
import { ColorService } from 'src/color/applications/services/color.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColorEntity } from 'src/color/domain/entities/colores.entity';
import { ColorController } from 'src/color/infrastructure/controllers/color.controller';

@Module({
    imports: [TypeOrmModule.forFeature([ColorEntity])],
    controllers:[ColorController],
    exports:[ColorService],
    providers:[ColorService],
})
export class ColorModule {}
