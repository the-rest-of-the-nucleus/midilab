import { Test, TestingModule } from '@nestjs/testing';
import { MidiController } from './midi.controller';
import { MidiService } from './midi.service';

describe('MidiController', () => {
  let controller: MidiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MidiController],
      providers: [MidiService],
    }).compile();

    controller = module.get<MidiController>(MidiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
