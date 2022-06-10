import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { type } from 'os';
import { Student } from 'src/Enitity/entity.student';
import { Dept } from 'src/Enumarator/enumator';

export class UpdateStudent extends PartialType(Student) {
  @ApiPropertyOptional({
    title:'Id',
    description:'Id of the student',
    type:'number'
})
  id?: number;

  @ApiPropertyOptional({
    title:'Name',
    description:'Name of the student',
    type:'string'
})
  name?: string;
  @ApiPropertyOptional({
    title:'Department',
    description:'Department of the student',
    enum:Dept,
    enumName:'Department'
})
  Department?:Dept;
  @ApiPropertyOptional({
    title:'Semester',
    description:'Semester of the student',
    type:'number'
})
  semester?:number;
  @ApiPropertyOptional({
    title:'Division',
    description:'Division of the student',
    type:'string'
})
  division?:string;
  @ApiPropertyOptional({
    title:'Age',
    description:'Age of the student',
    type:'number'
})
  age?: number;

}

                    