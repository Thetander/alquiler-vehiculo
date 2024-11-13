import { Test, TestingModule } from '@nestjs/testing';
import { RolService } from './roles.service';

describe('RolesService', () => {
  let service: RolService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RolService],
    }).compile();

    service = module.get<RolService>(RolService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
