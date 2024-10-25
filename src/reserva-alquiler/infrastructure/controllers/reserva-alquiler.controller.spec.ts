import { Test, TestingModule } from '@nestjs/testing';
import { ReservaAlquilerController } from './reserva-alquiler.controller';

describe('ReservaAlquilerController', () => {
  let controller: ReservaAlquilerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReservaAlquilerController],
    }).compile();

    controller = module.get<ReservaAlquilerController>(ReservaAlquilerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
