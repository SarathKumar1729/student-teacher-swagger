import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";
import { Dept } from "src/Enumarator/enumator";
import { IsNull } from "typeorm";

export class teacher{
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
    title:'YOE',
    description:'Year Of Experience',
    type:'number',
})
@IsNumber()
  YOE:number;

  @ApiPropertyOptional({
    title:'Age',
    description:'Age of the student',
    type:'number',
})
  age?:number;

}