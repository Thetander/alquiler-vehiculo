import { Test, TestingModule } from '@nestjs/testing';
import { RolesPermisosService } from './roles-permisos.service';

describe('RolesPermisosService', () => {
  let service: RolesPermisosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RolesPermisosService],
    }).compile();

    service = module.get<RolesPermisosService>(RolesPermisosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
