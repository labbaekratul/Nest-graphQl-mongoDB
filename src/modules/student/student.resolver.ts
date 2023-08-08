/* eslint-disable @typescript-eslint/no-unused-vars */
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { StudentType } from './student.types';
import { StudentService } from './student.service';
import { CreateStudentInput } from './student.validator';
import { Student } from './student.entity';

@Resolver((_of) => StudentType)
export class StudentResolver {
  constructor(private readonly studentService: StudentService) {}

  @Query((_returns) => [StudentType])
  async students() {
    return await this.studentService.students();
  }

  @Query((_returns) => StudentType)
  async student(@Args('id') id: string) {
    return await this.studentService.student(id);
  }

  @Mutation((_returns) => StudentType)
  async createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ) {
    return await this.studentService.createStudent(createStudentInput);
  }
}
