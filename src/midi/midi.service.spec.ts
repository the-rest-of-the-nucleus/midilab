import { Test, TestingModule } from '@nestjs/testing';
import { MidiService } from './midi.service';

describe('MidiService', () => {
  let service: MidiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MidiService],
    }).compile();

    service = module.get<MidiService>(MidiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
