import { Module } from '@nestjs/common';
import { GoogleChatService } from './google-chat.service';

@Module({
  controllers: [],
  providers: [GoogleChatService],
  exports: [GoogleChatService],
})
export class GoogleChatModule {}
