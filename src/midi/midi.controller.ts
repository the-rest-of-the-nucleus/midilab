import { Controller, Get } from '@nestjs/common';
import { MidiService } from './midi.service';

@Controller('midi')
export class MidiController {
  constructor(private readonly midiService: MidiService) {}

  @Get('inspect')
  inspect() {
    return this.midiService.inspect();
  }
}
