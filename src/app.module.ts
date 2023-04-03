import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MidiModule } from './midi/midi.module';

@Module({
  imports: [MidiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
