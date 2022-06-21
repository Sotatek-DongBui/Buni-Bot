import { Module } from '@nestjs/common';
import { GithubModule } from 'github/github.module';
import { GoogleChatModule } from 'google-chat/google-chat.module';
import { WebhooksController } from './webhooks.controller';
import { WebhooksService } from './webhooks.service';

@Module({
  imports: [GithubModule, GoogleChatModule],
  controllers: [WebhooksController],
  providers: [WebhooksService],
})
export class WebhooksModule {}
