import { Test, TestingModule } from '@nestjs/testing';
import { ReservaAlquilerService } from './reserva-alquiler.service';

describe('ReservaAlquilerService', () => {
  let service: ReservaAlquilerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReservaAlquilerService],
    }).compile();

    service = module.get<ReservaAlquilerService>(ReservaAlquilerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
