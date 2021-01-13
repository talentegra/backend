import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, VersionColumn,  ManyToOne, JoinColumn} from "typeorm";
import { Modules } from "src/modules/entity/modules.entity";

@Entity({name:"pages"})
export class Pages {

    @PrimaryGeneratedColumn("uuid",{
        name:"pages_id"        
    })
    pagesId:string;

    @Column({
        name:"pages_name",
        nullable:false,
        unique:true
    })
    pagesName:string;
    
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
        name : "modeles_id"
    })
    modulesId:string;

}