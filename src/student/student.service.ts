import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EMPTY } from 'rxjs';
import { student } from 'src/Dto/student.dto';
import { UpdateStudent } from 'src/Dto/update.dto';
import { Student } from 'src/Enitity/entity.student';
import { Dept } from 'src/Enumarator/enumator';
import { Repository } from 'typeorm';

@Injectable()

export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

    // student=[]
    // findAll(){
    //     if(typeof this.student !== 'undefined' && this.student.length === 0) {
    //         return "No News Available";
    //       }
    //       return this.student;
    //     }

    async findAll() {
     
      const result = await this.studentRepository.find();
    
      return result;
    }
  
    
    // Create(std){
    //     this.student.push(std)
    //     return this.student;
    // }
    async Create(createStudentDto:student) {
      const exists =(await this.studentRepository.count({ where: { id: createStudentDto.id }, })) != 0 ? true : false;
  
      if (exists) {
        throw new HttpException('Student ID already exists', 403);
      }
      this.studentRepository.save(createStudentDto);
      return {
        message: 'Successfully created',
      };
    }

    // findOne(id){
    //     let getid=this.student.filter(studentid=>studentid.id===id)
    
    //     if(getid==undefined){
    //       throw new HttpException("No record found",404);
    //     }
    //     return getid;
    // }

    async findOne(id: number) {
      const result = await this.studentRepository.findOneBy({ id: id });
      if (!result) {
        throw new HttpException('Student not found', 403);
      }
      return result;
    }

    // edit(id:number,name:string,department:string,semester:number,division:string,age:number){
    //     const [student,index]=this.findid(id);
    //     const updatedstudent={...student};
    //     if(name){
    //       updatedstudent.name=name;
    //     }
    //     if(semester){
    //         updatedstudent.semester=semester;
    //       }
    //       if(division){
    //         updatedstudent.division=division;
    //       }
    //       if(age){
    //         updatedstudent.age=age;
    //       }
    //     this.student[index]=updatedstudent;
      
    // }
    //     private findid(id: number):[student,number]{
    //         const stdindex=this.student.findIndex(stdid=>stdid.id===id);
    //         const findstudent=this.student[stdindex];
    //         if(!findstudent){
    //             throw new NotFoundException('could not find student');
    //         } 
    //         return [findstudent,stdindex];

        
    // }

    async edit(id: number, update: UpdateStudent) {
      const result = await this.studentRepository.update(id, update);
      if (result.affected == 0) {
        throw new HttpException('Student not found', 403);
      }
      return {
        message: 'Updated successfully',
      };
    }

    
      async delete(id: number) {
        const result = await this.studentRepository.delete({ id: id });
        if (result.affected == 0) {
          throw new HttpException('Student not found', 403);
        }
        return {
          message: 'Deleted successfully',
        };
      }
        
    }

