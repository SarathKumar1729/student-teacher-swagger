import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { ApiConflictResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { teacher } from 'src/Dto/teacher.dto';
import { UpdateStudent } from 'src/Dto/update.dto';
import { UpdateTeacher } from 'src/Dto/update.teacherdto';
import { Teacher } from 'src/Enitity/entity.teacher';
import { LimitOnUpdateNotSupportedError } from 'typeorm';
import { TeacherService } from './teacher.service';

@Controller('teacher')
@ApiTags('teacher')
export class TeacherController {
    constructor(private readonly teacherService: TeacherService) {}


  
    @Get()
    @ApiQuery({
        name:'limit',
        required:false,
        type:'number'
         })
        findAll(@Query('limit')limit:number){
            return this.teacherService.findAll(limit);
  
    }
    @ApiConflictResponse({description:'Student Already Exsist'})
    @ApiCreatedResponse({description:'Student created'})
    @Post()
        create(@Body(ValidationPipe)teach:teacher){
            
            
            return this.teacherService.Create(teach);
        }
        @ApiNotFoundResponse({description:'Student not found'})
        @ApiOkResponse({description:'success'})
    @Get(':id')
        findOne(@Param('id',ParseIntPipe)id:number){
           
            return this.teacherService.findOne(id);
    }
    @ApiNotFoundResponse({description:'Student not found'})
        @ApiOkResponse({description:'success'})
    @Patch(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body(ValidationPipe) update: UpdateTeacher,
      ) {
        return this.teacherService.edit(id, update);
      }
      @ApiNotFoundResponse({description:'Student not found'})
        @ApiOkResponse({description:'success'})
    @Delete(':id')
        delete(@Param('id',ParseIntPipe)id:number){
         return this.teacherService.delete(id);
    }
    
}

