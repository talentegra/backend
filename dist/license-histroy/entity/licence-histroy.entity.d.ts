import { Hospitals } from "src/hospitals/entity/hospitals.entity";
export declare class LicenseHistroy {
    licenseHistroyId: string;
    hospitalLimit: number;
    moduleIds: string[];
    departmentEquipmentLimit: Array<{
        department_id: number;
        machine_limit: number;
    }>[];
    licenseValidity: number;
    licenseFrom: Date;
    licenseTo: Date;
    licenseTypeId: number;
    status: number;
    created_on: Date;
    updated_on: Date;
    entityVersion: number;
    hospitals: Hospitals;
    hospitalId: string;
}
