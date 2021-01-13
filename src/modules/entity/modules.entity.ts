import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, VersionColumn, Generated} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity({name:"modules"})
export class Modules {
   
    @PrimaryGeneratedColumn("uuid",{
        name:"modules_id"        
    })
    modulesId:string;       
     
    @Column({
        name:"modules_name",
        nullable:false,
        unique:true
        
    })
    modulesName:string;

    @Column()
    status:number;
    
    @CreateDateColumn()
    created_on:Date;

    @UpdateDateColumn()
    updated_on:Date;

    @VersionColumn({
        name : "entity_version"
    })
    entityVersion:number;


}
