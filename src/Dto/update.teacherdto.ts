import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";
import { Dept } from "src/Enumarator/enumator";
import { IsNull } from "typeorm";

export class UpdateTeacher{
@ApiPropertyOptional({
    title:'Id',
    description:'Id of the student',
    type:'number'
})

  id?:number;

  @ApiPropertyOptional({
      title:'Name',
      description:'Name of the student',
      type:'string',
  })

  name?: string;
  @ApiPropertyOptional({
    title:'Department',
    description:'Name of the Department',
    enum:Dept,
    enumName:'Department'
})

  Department?:Dept;
  @ApiPropertyOptional({
    title:'YOE',
    description:'Year Of Experience',
    type:'number',
})

  YOE?:number;

  @ApiPropertyOptional({
    title:'Age',
    description:'Age of the student',
    type:'number',
})
  age?:number;

}