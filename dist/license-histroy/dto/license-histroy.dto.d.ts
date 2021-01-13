export interface licensehistroy {
    hospitalId: string;
    hospitalLimit: number;
    departmentEquipmentLimit: Array<{
        department_id: number;
        machine_limit: number;
    }>[];
    licenseValidity: number;
    moduleIds: string[];
    licenseTypeId: number;
    status: number;
}
export interface licensehistroyRO {
    licensehistroy: licensehistroy[];
}
export declare class CreateLicenseHistroyDto {
    readonly hospitalId: string;
    readonly hospitalLimit: number;
    readonly departmentEquipmentLimit: Array<{
        department_id: number;
        machine_limit: number;
    }>[];
    readonly licenseValidity: number;
    readonly moduleIds: string[];
    readonly licenseTypeId: number;
    readonly status: number;
}
export declare class UpdateLicenseHistroyDto {
    readonly hospitalId: string;
    readonly hospitalLimit: number;
    readonly departmentEquipmentLimit: Array<{
        department_id: number;
        machine_limit: number;
    }>[];
    readonly licenseValidity: number;
    readonly moduleIds: string[];
    readonly licenseTypeId: number;
    readonly status: number;
    readonly licenseHistroyId: string;
}
