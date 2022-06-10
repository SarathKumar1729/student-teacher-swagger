import { Optional } from "@nestjs/common";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Teacher {
  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  name: string;
  @Column()
  Department:string;
  @Column()
  YOE:number
  @Column()
  age:number


}