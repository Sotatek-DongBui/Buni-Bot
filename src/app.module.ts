import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebhooksModule } from './webhooks/webhooks.module';
import { GoogleChatModule } from './google-chat/google-chat.module';
import { GithubModule } from './github/github.module';
@Module({
  imports: [WebhooksModule, GoogleChatModule, GithubModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
