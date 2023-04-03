import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { WebMidi } from 'webmidi';
import { onDisabled, onEnabled, onError } from './utils';

function transform(target) {
  return {
    connection: target.connection,
    eventCount: target.eventCount,
    id: target.id,
    manufacturer: target.manufacturer,
    name: target.name,
    octaveOffset: target.octaveOffset,
    state: target.state,
    type: target.type,
   };
}

@Injectable()
export class MidiService implements OnModuleInit {
  private readonly logger = new Logger(MidiService.name);

  onModuleInit() {
    WebMidi.enable().then(() => onEnabled(this.logger)).catch((e) => onError(this.logger, e));
  }

  onModuleDestroy() {
    WebMidi.disable().then(() => onDisabled(this.logger)).catch((e) => onError(this.logger, e));
  }

  private get inputs() {
    return WebMidi.inputs.map(transform);
  }

  private get outputs() {
    return WebMidi.outputs.map(transform);
  }

  inspect() {
    return { inputs: this.inputs, outputs: this.outputs };
  }
}
