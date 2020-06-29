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
      transport: Transport.TCP,
      options: {
        host: process.env.USER_SERVICE || '127.0.0.1',
        port: 4000,
      },
    });
  }

  getHello(): Promise<string> {
    return this.client.send<string, string>('getHello', 'Minchan').toPromise();
  }
}
