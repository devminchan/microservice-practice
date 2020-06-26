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
        port: 4000,
      },
    });
  }

  getHello(): Promise<string> {
    return this.client.send<string, string>('getHello', 'Minchan').toPromise();
  }
}
