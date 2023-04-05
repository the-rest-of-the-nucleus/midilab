import { Logger, Module, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { MidiService } from './midi.service';
import { MidiController } from './midi.controller';
import { WebMidi } from 'webmidi';
import { Constants } from './constants';


@Module({
  controllers: [MidiController],
  providers: [MidiService]
})
export class MidiModule implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(MidiModule.name);

  onModuleInit() {
    WebMidi.enable()
    .then(() => this.logger.log(Constants.WebMidi.Enabled.Success))
    .catch(() => this.logger.error(Constants.WebMidi.Enabled.Error));
  }
  
  onModuleDestroy() {
    WebMidi.disable()
    .then(() => this.logger.log(Constants.WebMidi.Disabled.Success))
    .catch(() => this.logger.error(Constants.WebMidi.Disabled.Error));  
  }
}
