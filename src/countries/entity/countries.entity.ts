import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, VersionColumn } from "typeorm";

@Entity({name:"countries"})
export class Countries {

    @PrimaryGeneratedColumn({
    type: 'bigint',
    unsigned: true,     
    name:"country_id"           
    })
    countryId:number;
  

    @Column({
        name:"country_name",
        nullable:false,
        unique:true
    })
    countryName:string;

    @Column({
        name:"iso2",
        nullable:false
    })
    iso2:string;

    @Column({
        name:"iso3",
        nullable:true
    })
    iso3:string;

    @Column({
        name:"country_code",
        nullable:true
    })
    countryCode:string;

    @Column({
        name:"phone_code",
        nullable:true
    })
    phoneCode:string;

    @Column({
        name:"currency",
        nullable:true
    })
    currency:string;

    @Column({
        name:"capital",
        nullable:true
    })
    capital:string;

    @Column({
        name:"native",
        nullable:true
    })
    native:string;
   
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