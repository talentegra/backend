export interface departments {
    departmentName: string;
    status: number;
    lab: string;
    noEquipment: number;
}
export interface departmentsRO {
    departments: departments[];
}
export declare class CreateDepartmentsDto {
    readonly departmentName: string;
    readonly status: number;
    readonly lab: string;
    readonly noEquipment: number;
}
export declare class UpdateDepartmentsDto {
    readonly departmentName: string;
    readonly status: number;
    readonly lab: string;
    readonly noEquipment: number;
    readonly departmentId: string;
}
