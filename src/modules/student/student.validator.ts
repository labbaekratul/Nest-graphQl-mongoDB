import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

@InputType()
export class CreateStudentInput {
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(30)
  @Field()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(30)
  @Field()
  lastName: string;
}
