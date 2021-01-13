import { Test, TestingModule } from '@nestjs/testing';
import { LicenseHistroyService } from './license-histroy.service';

describe('LicenseHistroyService', () => {
  let service: LicenseHistroyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LicenseHistroyService],
    }).compile();

    service = module.get<LicenseHistroyService>(LicenseHistroyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
