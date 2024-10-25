import { Module } from '@nestjs/common';
import { HistorialFacturasService } from './services/historial-facturas.service';

@Module({
  providers: [HistorialFacturasService]
})
export class ModulesModule {}
