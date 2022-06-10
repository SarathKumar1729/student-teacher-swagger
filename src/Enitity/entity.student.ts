import { Optional } from "@nestjs/common";
import { Exclude } from "class-transformer";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Student {
  @Exclude()
  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  name: string;
  @Column()
  Department:string;
  @Column()
  semester:number
  @Column()
  division:string
  @Column()
  age:number


}