import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, ValidationPipe } from '@nestjs/common';
import { ApiPayloadTooLargeResponse, ApiTags } from '@nestjs/swagger';
import { create } from 'domain';
import { student } from 'src/Dto/student.dto';
import { UpdateStudent } from 'src/Dto/update.dto';

import { Dept } from 'src/Enumarator/enumator';
import { StudentService } from './student.service';

@Controller('student')
@ApiTags('student')

export class StudentController {
    constructor(private readonly studentService: StudentService) {}


      
    @Get()
        findAll(){
            return this.studentService.findAll();
  
    }
    @Post()
        create(@Body(ValidationPipe)std:student){
            return this.studentService.Create(std);
        }
    @Get(':id')
        findOne(@Param('id',ParseIntPipe)id:number){
           
            return this.studentService.findOne(id);
    }
    @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateStudent: UpdateStudent,
  ) {
    return this.studentService.edit(id, updateStudent);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.studentService.delete(id);
  }
    
}
