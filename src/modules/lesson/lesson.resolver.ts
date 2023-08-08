/* eslint-disable @typescript-eslint/no-unused-vars */
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LeasonType } from './lesson.types';
import { LessonService } from './lesson.service';
import { Lesson } from './lesson.entity';
import { CreateLessonInput } from './lesson.input';

@Resolver((_of) => LeasonType)
export class LessonResolver {
  constructor(private readonly lessonService: LessonService) {}

  @Query((_returns) => LeasonType)
  lesson(@Args('id') id: string): Promise<Lesson> {
    return this.lessonService.getLesson(id);
  }

  @Query(() => [LeasonType])
  lessons(): Promise<Lesson[]> {
    return this.lessonService.getLessons();
  }

  @Mutation(() => LeasonType)
  createLesson(
    @Args('createLessonInput') createLessonInput: CreateLessonInput,
  ): Promise<Lesson> {
    return this.lessonService.createLesson(createLessonInput);
  }
}
