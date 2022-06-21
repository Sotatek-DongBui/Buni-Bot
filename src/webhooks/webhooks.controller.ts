import { Body, Controller, Post } from '@nestjs/common';
import { IPayloadGithub } from 'interfaces/payload-github';
import { WebhooksService } from './webhooks.service';

@Controller('webhooks')
export class WebhooksController {
  constructor(private readonly webhooksService: WebhooksService) {}
  @Post('github')
  async notiGithubWebhook(@Body() payload: IPayloadGithub) {
    await this.webhooksService.notiGithubWebhook(payload);
    return 'ok';
  }
}
