import { DatabaseService } from './database.service';
export declare class DatabaseController {
    private databaseService;
    constructor(databaseService: DatabaseService);
    insertAdminData(): Promise<any>;
}
