import { Test, TestingModule } from '@nestjs/testing';
import { MenusRolesService } from './menus-roles.service';

describe('MenusRolesService', () => {
  let service: MenusRolesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenusRolesService],
    }).compile();

    service = module.get<MenusRolesService>(MenusRolesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
