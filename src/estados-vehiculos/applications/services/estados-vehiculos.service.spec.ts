import { Test, TestingModule } from '@nestjs/testing';
import { EstadosVehiculosService } from './estados-vehiculos.service';

describe('EstadosVehiculosService', () => {
  let service: EstadosVehiculosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstadosVehiculosService],
    }).compile();

    service = module.get<EstadosVehiculosService>(EstadosVehiculosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
