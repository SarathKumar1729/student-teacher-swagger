import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { isEnum, IsEnum, IsNumber, isNumber, IsString, isString } from "class-validator";
import { Dept } from "src/Enumarator/enumator";

export class student{

@ApiProperty({
    title:'Id',
    description:'Id of the student',
    type:'number'
})
@IsNumber()
    id:number;

@ApiProperty({
    title:'Name',
    description:'Name of the student',
    type:'string',
})
@IsString()
   name: string;
@ApiProperty({
    title:'Department',
    description:'Name of the Department',
    enum:Dept,
    enumName:'Department'
})
@IsString()
  Department:Dept;
@ApiProperty({
    title:'Semester',
    description:'Semester Number',
    type:'number',
})
@IsNumber()
    semester:number;
@ApiProperty({
    title:' Division',
    description:'Division Name',
    type:'string',
})
@IsString()
    division:string;
@ApiPropertyOptional({
    title:'Age',
    description:'Age of the student',
    type:'number',
})

   age:number;
}                      