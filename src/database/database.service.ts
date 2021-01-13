import "reflect-metadata";
import { Injectable } from '@nestjs/common';
import { ApiResponse, ApiResponseStatus, ErrorMessageType, ErrorMessage } from "../shared/common";
import { createConnection, getConnection } from "typeorm";
import * as fs from "fs";
import * as uuid from "uuid";
import { CONFIG } from "src/config/config";

@Injectable()
export class DatabaseService {

    constructor(
        
    ){}

    readSqlFile = (filepath: string): string[] => {
        return fs
            .readFileSync(filepath)
            .toString()
            .replace(/\r?\n|\r/g, '')
            .split(';')
            .filter((query) => query?.length);
    };

    checkFileExistsSync(filepath){
        let flag = true;
        try{
            fs.accessSync(filepath, fs.constants.F_OK);
        }
        catch(e){
            flag = false;
        }
        return flag;
    }

    async insertAdminData(){
        
        let insertdataResponse;
        
        let admin_data_path = "database/admin_datas.sql";

        var fs = require('fs');
        
        let f_e = this.checkFileExistsSync(admin_data_path)
        if ( f_e === false ) {
            insertdataResponse = {
                status:ApiResponseStatus.ERROR,
                error:{
                    type:ErrorMessageType.ERROR,
                    message:"Admin default data file not avilable!"
                }
            }
            return insertdataResponse;
        }
        
        let connection = getConnection("default");
        try {
            const data_queries = this.readSqlFile('database/admin_datas.sql');
            connection.manager.queryRunner;
            for (let i = 0; i < data_queries.length; i++)
            {
                await connection.manager.query(data_queries[i]);
                // console.log(data_queries[i]);
            }
            connection.manager.connection.close();
            insertdataResponse = {
                status:ApiResponseStatus.SUCCESS
            }
            return insertdataResponse;
        } catch (error) {
            insertdataResponse = {
                status:ApiResponseStatus.ERROR,
                error:{
                    type:ErrorMessageType.ERROR,
                    message:"Error in inserting data!"
                }
            }
            return insertdataResponse;
        }
       

        // let result = await createConnection({
        //     "name" : "secondary",
        //     "type": "postgres",
        //     "host": "localhost",
        //     "port": 5432,
        //     "username": "postgres",
        //     "password": "Pass@143",
        //     "database": "bluejay" ,
        //     "entities": ["dist/**/entity/*.entity.js","node_modules/@switchit/**/*.entity.js"],
        //     "synchronize":true,
        //     "schema":"eradcare",
        //     "entityPrefix":"erc_"
        // }).then(async connection => {
        //     const data_queries = this.readSqlFile('database/admin_datas.sql');
        //     connection.manager.queryRunner;
        //     for (let i = 0; i < data_queries.length; i++)
        //     {
        //         await connection.manager.query(data_queries[i]);
        //        // console.log(data_queries[i]);
        //     }
        //     connection.manager.connection.close();
        //     insertdataResponse = {
        //         status:ApiResponseStatus.SUCCESS
        //     }
        //     return insertdataResponse;
        // }).catch(err => {
        //     console.log(err.detail);
        //     insertdataResponse = {
        //         status:ApiResponseStatus.ERROR,
        //         error:{
        //             type:ErrorMessageType.ERROR,
        //             message:"Error in inserting data!"
        //         }
        //     }
        //     return insertdataResponse;
        // });
        // return insertdataResponse;
    }
        
}