import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Student } from './Enitity/entity.student';
import { Teacher } from './Enitity/entity.teacher';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';

@Module({
  imports: [StudentModule, TeacherModule,
    TypeOrmModule.forFeature([Student,Teacher]),
    TypeOrmModule.forRoot({
    
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'swagger',
      autoLoadEntities:true,
      synchronize: true,
      
    }),
   
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
