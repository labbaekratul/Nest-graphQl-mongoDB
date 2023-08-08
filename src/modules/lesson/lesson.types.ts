import { Field, ObjectType, ID } from '@nestjs/graphql';
import { StudentType } from '../student/student.types';

@ObjectType('Lesson')
export class LeasonType {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  startDate: string;

  @Field()
  endDate: string;

  @Field((type) => [StudentType])
  students: string[];
}
