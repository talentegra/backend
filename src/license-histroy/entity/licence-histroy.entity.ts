import { Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, VersionColumn } from "typeorm";
import { Hospitals } from "src/hospitals/entity/hospitals.entity";
import { Modules } from "src/modules/entity/modules.entity";
import { Departments } from "src/departments/entity/departments.entity";

@Entity({name:"license-histroy"})
export class LicenseHistroy {

    @PrimaryGeneratedColumn("uuid",{
        name:"license_history_id"
    })
    licenseHistroyId:string;

    @Column({
        name:"hospital_limit",
        nullable:false
    })
    hospitalLimit:number;

    @Column({
        type:"simple-array",
        name:"module_ids",
        nullable:false
    })
    moduleIds:string[];
      
    @Column({
        type:'jsonb',
        name:"department_equipment_limit",
        array:false,
        default:() => "'[]'",
        nullable:false,
    })
    public departmentEquipmentLimit: Array<{ department_id: number,machine_limit:number }>[];

    @Column({
        name:"license_validity",
        nullable:false
    })
    licenseValidity:number;

    @Column({
        name:"license_from",
        nullable:false
    })
    licenseFrom:Date;

    @Column({
        name:"license_to",
        nullable:false
    })
    licenseTo:Date;

    @Column({
        name:"license_type_id",
        nullable:false
    })
    licenseTypeId:number;

    @Column()
    status:number;
    
    @CreateDateColumn()
    created_on:Date;

    @UpdateDateColumn()
    updated_on:Date;

    @VersionColumn({
        name:"entity_version"
    })
    entityVersion: number;

    @ManyToOne(type=>Hospitals)
    @JoinColumn({name:"hospital_id"})
    hospitals:Hospitals;    
    @Column({
        name:"hospital_id",
    })
    hospitalId:string;

}