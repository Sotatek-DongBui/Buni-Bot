// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configs } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(configs.port, () => {
    console.log('listening on port ' + configs.port);
  });
}
bootstrap();
