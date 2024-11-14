import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModeloEntity } from 'modelo/domain/entities/modelo.entity';
import { ModeloController } from 'modelo/infrastructure/controllers/modelo.controller';
import { ModeloService } from 'modelo/applications/service/modelo.service';

@Module({
    imports: [TypeOrmModule.forFeature([ModeloEntity])],
    controllers: [ModeloController],
    providers: [ModeloService],
    exports: [ModeloService],
})
export class ModeloModule {}
