import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { RpcException } from '@nestjs/microservices';
import { CreateUserRequest } from 'apps/monorepo-practice/src/dtos/CreateUserRequest';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async getAllUsers(): Promise<User[]> {
    return await this.userRepository.find({});
  }

  async getUserById(id: number): Promise<User> {
    const user = await this.userRepository.findOne(id);

    if (!user) {
      throw new RpcException('user not found');
    }

    return user;
  }

  async createUser(data: CreateUserRequest): Promise<User> {
    const newUser = this.userRepository.create({
      ...data,
    });

    return await this.userRepository.save(newUser);
  }
}
