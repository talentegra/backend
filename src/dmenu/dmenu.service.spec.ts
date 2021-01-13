import { Test, TestingModule } from '@nestjs/testing';
import { DmenuService } from './dmenu.service';

describe('DmenuService', () => {
  let service: DmenuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DmenuService],
    }).compile();

    service = module.get<DmenuService>(DmenuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
