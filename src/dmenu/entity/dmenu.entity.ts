import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, VersionColumn,  ManyToOne, JoinColumn} from "typeorm";
import { Modules } from "src/modules/entity/modules.entity";

@Entity({name:"dmenu"})
export class Dmenu {

    @PrimaryGeneratedColumn("uuid",{
        name:"dmenu_id"        
    })
    dmenuId:string;

    @Column({
        name:"dmenu_name",
        nullable:false,
        unique:true
    })
    dmenuName:string;
    
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

    @ManyToOne(type=>Modules)
    @JoinColumn({name:"modules_id"})
    modules:Modules;

    @Column({
        name : "modules_id"
    })
    modulesId:string;

}