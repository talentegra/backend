import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, VersionColumn, OneToOne, JoinColumn} from "typeorm";
import { UserSettings } from "./usersettings.entity";

@Entity({name:"users"})
export class User {

    @PrimaryGeneratedColumn("uuid",{
        name:"user_id"        
    })
    userId:string; 
    
    @Column({
        name:"first_name",
        nullable:false
    })
    firstName: string;

    @Column({
        name:"middle_name",
        nullable:true
    })
    middleName: string;

    @Column({
        name:"last_name",
        nullable:false
    })
    lastName: string;

    @Column({
        name:"login_username",
        nullable:false,
        unique:true
    })
    userName:string;

    @Column({
        name:"login_password",
        nullable:false
    })
    password:string;

    @Column({
        name:"email_id",
        nullable:false,
        unique:true
    })
    email: string;

    @Column({
        name:"phone",
        nullable:false
    })
    phone: string;

    @Column()
    status:number;
    
    @CreateDateColumn()
    created_on:Date;

    @UpdateDateColumn()
    updated_on:Date;

    @VersionColumn()
    entityVersion;

    @Column({
        name:"activation_key",
        nullable:true
    })    
    activationKey: string;

    @Column({
        name:"forgot_password_key",
        nullable:true
    })
    forgotPasswordKey:string;

    @Column({
        name:"forgot_password_creation_time",
        nullable:true
    })
    forgotPasswordCreationTime:Date;

    @Column({
        name:"profile_img_name",
        nullable:true
    })
    imageName:string;

    @OneToOne(type => UserSettings)
    @JoinColumn()
    settings:Promise<UserSettings>;
}

 