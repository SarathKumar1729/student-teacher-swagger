import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { ApiConflictResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiPayloadTooLargeResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
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
    @ApiQuery({
      name:'limit',
      required:false,
      type:'number',
       })
      
        findAll(@Query('limit')limit:number){
          console.log(limit);
          
            return this.studentService.findAll(limit);
  
            
    }
    @ApiConflictResponse({description:'Student Already Exsist'})
    @ApiCreatedResponse({description:'Student created'})
    @Post()
        create(@Body(ValidationPipe)std:student){
            return this.studentService.Create(std);
        }
        @ApiNotFoundResponse({description:'Student not found'})
    @ApiOkResponse({description:'success'})
    @Get(':id')
        findOne(@Param('id',ParseIntPipe)id:number){
           
            return this.studentService.findOne(id);
    }
    @ApiNotFoundResponse({description:'Student not found'})
    @ApiOkResponse({description:'success'})
    @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) updateStudent: UpdateStudent,
  ) {
    return this.studentService.edit(id, updateStudent);
  }
  @ApiNotFoundResponse({description:'Student not found'})
  @ApiOkResponse({description:'success'})
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.studentService.delete(id);
  }
    
}
