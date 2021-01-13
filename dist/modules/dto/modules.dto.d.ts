export interface modules {
    modulesName: string;
    status: number;
}
export interface modulesRO {
    modules: modules[];
}
export declare class CreateModulesDto {
    readonly modulesName: string;
    readonly status: number;
}
export declare class UpdateModulesDto {
    readonly modelesId: string;
    readonly modulesName: string;
    readonly status: number;
}
