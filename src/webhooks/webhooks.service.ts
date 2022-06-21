import { Injectable } from '@nestjs/common';
import { GithubService } from 'github/github.service';
import { GoogleChatService } from 'google-chat/google-chat.service';
import { IPayloadGithub } from 'interfaces/payload-github';

@Injectable()
export class WebhooksService {
  constructor(private readonly githubService: GithubService, private readonly googleChatService: GoogleChatService) {}
  notiGithubWebhook = async (payload: IPayloadGithub) => {
    return this.googleChatService.sendMessage(this.githubService.buildGitHubWebhookMessage(payload));
  };
}
