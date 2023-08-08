import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LeasonType } from './lesson.type';
import { LessonService } from './lesson.service';
import { Lesson } from './lesson.entity';

@Resolver((of) => LeasonType)
export class LessonResolver {
  constructor(private readonly lessonService: LessonService) {}

  @Query((returns) => LeasonType)
  lesson(@Args('id') id: string): Promise<Lesson> {
    return this.lessonService.getLesson(id);
  }

  @Mutation((returns) => LeasonType)
  createLesson(
    @Args('name') name: string,
    @Args('startDate') startDate: string,
    @Args('endDate') endDate: string,
  ) {
    return this.lessonService.createLesson(name, startDate, endDate);
  }
}
