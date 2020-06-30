import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UserService } from './user.service';
import { User } from './user.entity';
import { CreateUserRequest } from 'apps/monorepo-practice/src/dtos/CreateUserRequest';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern('getUsers')
  async getUsers(): Promise<User[]> {
    return await this.userService.getAllUsers();
  }

  @MessagePattern('createUser')
  async createUser(data: CreateUserRequest): Promise<User> {
    return await this.userService.createUser(data);
  }
}
