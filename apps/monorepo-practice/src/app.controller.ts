import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { IUser, User } from 'apps/user/src/user/user.entity';
import { CreateUserRequest } from './dtos/CreateUserRequest';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello() {
    return await this.appService.getHello();
  }

  @Get('/users')
  async getAllUsers(): Promise<IUser[]> {
    return await this.appService.getAllUsers();
  }

  @Post('/users')
  async createUser(@Body() createUserRequest: CreateUserRequest): Promise<User> {
    return await this.appService.createUser(createUserRequest);
  }
}
