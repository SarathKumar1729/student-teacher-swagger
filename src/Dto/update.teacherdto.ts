import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";
import { Dept } from "src/Enumarator/enumator";
import { IsNull } from "typeorm";

export class UpdateTeacher{


  @ApiPropertyOptional({
      title:'Name',
      description:'Name of the student',
      type:'string',
  })
@IsString()
  name?: string;
  @ApiPropertyOptional({
    title:'Department',
    description:'Name of the Department',
    enum:Dept,
    enumName:'Department'
})
@IsString()
  Department?:Dept;
  @ApiPropertyOptional({
    title:'YOE',
    description:'Year Of Experience',
    type:'number',
})
@IsNumber()
  YOE?:number;

  @ApiPropertyOptional({
    title:'Age',
    description:'Age of the student',
    type:'number',
})
@IsNumber()
  age?:number;

}