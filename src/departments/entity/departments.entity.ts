import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, VersionColumn, Generated } from "typeorm";

@Entity({name:"departments"})
export class Departments {

    @PrimaryGeneratedColumn("uuid",{
        name:"department_id"
    })
    departmentId:string;

    @Column({
        name:"department_name",
        nullable:false,
        unique:true
    })
    departmentName:string;

    @Column({
        name:"no_equipment",
        nullable:false
    })
    noEquipment:number;

    @Column({
        name:"lab",
        nullable:false
    })
    lab:string;
    
    @Column()
    status:number;
    
    @CreateDateColumn()
    created_on:Date;

    @UpdateDateColumn()
    updated_on:Date;

    @VersionColumn({
        name:"entity_version"
    })
    entityVersion:number;

}