import { Test, TestingModule } from '@nestjs/testing';
import { MenusRolesController } from './menus-roles.controller';

describe('MenusRolesController', () => {
  let controller: MenusRolesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MenusRolesController],
    }).compile();

    controller = module.get<MenusRolesController>(MenusRolesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
