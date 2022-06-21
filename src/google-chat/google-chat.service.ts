import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { configs } from 'config';

@Injectable()
export class GoogleChatService {
  sendMessage = async (payload) => {
    const googleChatBot = configs.googleChatBotUrl;
    await axios.post(googleChatBot, payload);
    return 'OK';
  };
}
