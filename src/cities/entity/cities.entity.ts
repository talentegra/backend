import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, VersionColumn, ManyToOne, JoinColumn } from "typeorm";
import { States } from "src/states/entity/states.entity";

@Entity({name:"cities"})
export class Cities {

    @PrimaryGeneratedColumn({
        name:"city_id"
    })
    cityId:number;

    @Column({
        name:"city_name",
        nullable:false
    })
    cityName:string;

    @Column({
        name:"latitude",
        nullable:false
    })
    latitude:string;

    @Column({
        name:"longitude",
        nullable:false
    })
    longitude:string;
     
    @Column()
    status:number;
    
    @CreateDateColumn()
    created_on:Date;

    @UpdateDateColumn()
    updated_on:Date;

    @VersionColumn({
        name:"entity_version"
    })
    entityVersion:number

    @ManyToOne(type=>States)
    @JoinColumn({name:"state_id"})
    states:States;
    @Column({
        name:"state_id"
    })
    stateId:number;

}