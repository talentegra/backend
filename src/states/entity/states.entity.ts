import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, VersionColumn, Generated, ManyToOne, JoinColumn} from "typeorm";
import { Countries } from "src/countries/entity/countries.entity";

@Entity({name:"states"})
export class States {

    @PrimaryGeneratedColumn({
        name:"state_id"
    })
    stateId:number;

    @Column({
        name:"state_name",
        nullable:true,
        unique:true
    })
    stateName:string;

    @Column({
        name:"iso2",
        nullable:false
    })
    iso2:string;
    
    @Column({
        name:"fips_code",
        nullable:false
    })
    fipsCode:string;

    @Column()
    status:number;
    
    @CreateDateColumn()
    created_on:Date;

    @UpdateDateColumn()
    updated_on:Date;

    @VersionColumn({
        name:"entity_version"
    })
    entityVersion :number
    
    @ManyToOne(type=>Countries)
    @JoinColumn({name:"country_id"})
    countries:Countries;
    @Column({
        name:"country_id"
    })
    countryId:number;
  
}