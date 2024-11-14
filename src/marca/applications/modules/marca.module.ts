import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MarcaEntity } from 'marca/domain/entities/marca.entity';
import { MarcaController } from 'marca/infrastructure/controllers/marca.controller';
import { MarcaService } from 'marca/applications/services/marca.service';

@Module({
    imports: [TypeOrmModule.forFeature([MarcaEntity])],
    controllers: [MarcaController],
    providers: [MarcaService],
    exports: [MarcaService],
})
export class MarcaModule {}
