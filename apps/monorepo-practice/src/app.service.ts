import { Injectable } from '@nestjs/common';
import {
  ClientProxyFactory,
  Transport,
  ClientProxy,
} from '@nestjs/microservices';
import { IUser, User } from 'apps/user/src/user/user.entity';
import { CreateUserRequest } from './dtos/CreateUserRequest';

@Injectable()
export class AppService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
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
  }

  getHello(): Promise<string> {
    return this.client.send<string, string>('getHello', 'Minchan').toPromise();
  }

  getAllUsers(): Promise<IUser[]> {
    return this.client.send('getUsers', '').toPromise();
  }

  createUser(createUserRequest: CreateUserRequest): Promise<User> {
    return this.client.send('createUser', createUserRequest).toPromise();
  }
}
