import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsString } from 'class-validator';
import { type } from 'os';
import { Student } from 'src/Enitity/entity.student';
import { Dept } from 'src/Enumarator/enumator';

export class UpdateStudent{


  @ApiPropertyOptional({
    title:'Name',
    description:'Name of the student',
    type:'string'
})
@IsString()
  name?: string;
  @ApiPropertyOptional({
    title:'Department',
    description:'Department of the student',
    enum:Dept,
    enumName:'Department'
})
@IsString()
  Department?:Dept;
  @ApiPropertyOptional({
    title:'Semester',
    description:'Semester of the student',
    type:'number'
})
@IsNumber()
  semester?:number;
  @ApiPropertyOptional({
    title:'Division',
    description:'Division of the student',
    type:'string'
})
@IsString()
  division?:string;
  @ApiPropertyOptional({
    title:'Age',
    description:'Age of the student',
    type:'number'
})
  age?: number;

}

                    