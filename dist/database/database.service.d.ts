import "reflect-metadata";
export declare class DatabaseService {
    constructor();
    readSqlFile: (filepath: string) => string[];
    checkFileExistsSync(filepath: any): boolean;
    insertAdminData(): Promise<any>;
}
