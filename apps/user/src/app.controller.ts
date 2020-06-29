import { Controller, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  private logger = new Logger('AppController');

  constructor(private readonly appService: AppService) {}

  @MessagePattern('getHello')
  getHello(name: string): string {
    require('dns').lookup(require('os').hostname(), (err, add, fam) => {
      this.logger.log(`received addr: ${add}`);
    });

    return this.appService.getHello(name);
  }
}
