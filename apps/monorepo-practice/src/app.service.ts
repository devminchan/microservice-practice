import { Injectable } from '@nestjs/common';
import {
  ClientProxyFactory,
  Transport,
  ClientProxy,
} from '@nestjs/microservices';

@Injectable()
export class AppService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.REDIS,
      options: {
        url: `redis://${process.env.REDIS_HOST || 'localhost'}:6379`,
      },
    });
  }

  getHello(): Promise<string> {
    return this.client.send<string, string>('getHello', 'Minchan').toPromise();
  }
}
