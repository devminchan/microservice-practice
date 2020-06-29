import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, RmqOptions } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

const logger = new Logger('Main');

async function bootstrap() {
  const app = await NestFactory.createMicroservice<RmqOptions>(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [
        `amqp://rabbitmq:rabbitmq@${process.env.RABBITMQ_HOST ||
          'localhost'}:5672`,
      ],
      queue: 'users_queue',
      queueOptions: {
        durable: false,
      },
    },
  });

  await app.listen(() => {
    logger.log('App started with RabbitMQ message broker');
  });
}

bootstrap();
