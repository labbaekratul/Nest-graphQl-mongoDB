import { Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType('Lesson')
export class LeasonType {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  startDate: string;

  @Field()
  endDate: string;
}
