import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RenderModule } from 'nest-next';
import Next from 'next';
import * as path from 'path';
import 'reflect-metadata';

async function bootstrap() {
  const dev = process.env.NODE_ENV !== 'production';

  console.log('------dev:--', dev);

  const client = Next({
    dir: path.join(__dirname, '../client'),
    dev,
  });

  await client.prepare();

  const app = await NestFactory.create(AppModule);

  const renderer = app.get(RenderModule);
  renderer.register(app, client, { viewsDir: null, dev });

  await app.listen(3003);
}
bootstrap();
