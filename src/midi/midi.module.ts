import { Module } from '@nestjs/common';
import { MidiService } from './midi.service';
import { MidiController } from './midi.controller';

@Module({
  controllers: [MidiController],
  providers: [MidiService]
})
export class MidiModule {}
