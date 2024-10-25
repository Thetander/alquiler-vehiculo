import { Test, TestingModule } from '@nestjs/testing';
import { RolesPermisosController } from './roles-permisos.controller';

describe('RolesPermisosController', () => {
  let controller: RolesPermisosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RolesPermisosController],
    }).compile();

    controller = module.get<RolesPermisosController>(RolesPermisosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
