import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EMPTY } from 'rxjs';
import { teacher } from 'src/Dto/teacher.dto';
import { UpdateTeacher } from 'src/Dto/update.teacherdto';
import { Teacher } from 'src/Enitity/entity.teacher';
import { Repository } from 'typeorm';

@Injectable()
export class TeacherService {
    constructor(
        @InjectRepository(Teacher)
        private teacherRepository: Repository<Teacher>,
      ) {}
    // Teachers=[]
    // findAll(){
    //     if(typeof this.Teachers !== 'undefined' && this.Teachers.length === 0) {
    //         return "No Teacher Available";
    //       }
    //       return this.Teachers;
    //     }
    async findAll() {
       
        const result = await this.teacherRepository.find();
        return result;
      }
    
    
    // Create(teacher){
    //     this.Teachers.push(teacher)
    //     return this.Teachers;
    // }
   
    async Create(teacherdto:teacher) {
        const exists =(await this.teacherRepository.count({ where: { id: teacherdto.id }, })) != 0 ? true : false;
    
        if (exists) {
          throw new HttpException('Teacher ID already exists', 403);
        }
        this.teacherRepository.save(teacherdto);
        return {
          message: 'Successfully created',
        };
      }    

    // findOne(id){
    //     let getid=this.Teachers.filter(studentid=>studentid.id===id)
    
    //     if(getid==undefined){
    //       throw new HttpException("No record found",404);
    //     }
    //     return getid;
    // }
    async findOne(id: number) {
        const result = await this.teacherRepository.findOneBy({ id: id });
        if (!result) {
          throw new HttpException('Teacheer not found', 403);
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

    async edit(id: number, update: UpdateTeacher) {
        const result = await this.teacherRepository.update(id, update);
        if (result.affected == 0) {
          throw new HttpException('Teacher not found', 403);
        }
        return {
          message: 'Updated successfully',
        };
      }

    
      async delete(id: number) {
        const result = await this.teacherRepository.delete({ id: id });
        if (result.affected == 0) {
          throw new HttpException('Teacher not found', 403);
        }
        return {
          message: 'Deleted successfully',
        };
      }
        
}

