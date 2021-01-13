import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, VersionColumn, Generated} from "typeorm";
import { ThemeStyle,NavStyle,Layout } from "../dto/settings.enum";

@Entity({name:"usersettings"})
export class UserSettings {

    @PrimaryGeneratedColumn("uuid",{
        name:"setting_id"        
    })
    settingId:string; 
    
    @Column({
        type: "enum",
        enum: ThemeStyle,
        default: ThemeStyle.THEME_TYPE_SEMI_DARK
    })
    themeStyle:ThemeStyle;

    @Column({
        type: "enum",
        enum: NavStyle,
        default: NavStyle.NAV_STYLE_FIXED
    })
    navStyle:NavStyle;

    @Column({
        type: "enum",
        enum: Layout,
        default: Layout.LAYOUT_TYPE_FULL
    })
    layout:Layout;
}

 