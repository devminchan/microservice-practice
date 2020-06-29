import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, RedisOptions } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

const logger = new Logger('Main');

async function bootstrap() {
  const app = await NestFactory.createMicroservice<RedisOptions>(AppModule, {
    transport: Transport.REDIS,
    options: {
      url: `redis://${process.env.REDIS_HOST || 'localhost'}:6379`,
    },
  });

  await app.listen(() => {
    logger.log('App started with Redis message broker');
  });
}

bootstrap();
