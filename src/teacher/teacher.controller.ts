import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, ValidationPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { teacher } from 'src/Dto/teacher.dto';
import { UpdateStudent } from 'src/Dto/update.dto';
import { UpdateTeacher } from 'src/Dto/update.teacherdto';
import { Teacher } from 'src/Enitity/entity.teacher';
import { TeacherService } from './teacher.service';

@Controller('teacher')
@ApiTags('teacher')
export class TeacherController {
    constructor(private readonly teacherService: TeacherService) {}


      
    @Get()
        findAll(){
            return this.teacherService.findAll();
  
    }
    @Post()
        create(@Body(ValidationPipe)teach:teacher){
            
            
            return this.teacherService.Create(teach);
        }
    @Get(':id')
        findOne(@Param('id',ParseIntPipe)id:number){
           
            return this.teacherService.findOne(id);
    }
    @Patch(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() update: UpdateTeacher,
      ) {
        return this.teacherService.edit(id, update);
      }
    @Delete(':id')
        delete(@Param('id',ParseIntPipe)id:number){
         return this.teacherService.delete(id);
    }
    
}

