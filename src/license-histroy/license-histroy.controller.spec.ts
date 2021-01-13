import { Test, TestingModule } from '@nestjs/testing';
import { LicenseHistroyController } from './license-histroy.controller';

describe('LicenseHistroy Controller', () => {
  let controller: LicenseHistroyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LicenseHistroyController],
    }).compile();

    controller = module.get<LicenseHistroyController>(LicenseHistroyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
