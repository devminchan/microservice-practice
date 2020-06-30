import { IsNotEmpty, IsNumber, Min, Max } from 'class-validator';

export class CreateUserRequest {
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @Min(0)
  @Max(99)
  age: number;
}
