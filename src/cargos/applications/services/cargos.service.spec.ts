import { Test, TestingModule } from '@nestjs/testing';
import { CargoService } from './cargos.service';

describe('CargosService', () => {
  let service: CargoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CargoService],
    }).compile();

    service = module.get<CargoService>(CargoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
