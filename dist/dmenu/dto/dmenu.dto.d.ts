export interface pages {
    dmenuName: string;
    dmenuId: string;
    status: number;
}
export interface pagesRO {
    demnu: pages[];
}
export declare class CreateDmenuDto {
    readonly dmenuName: string;
    readonly modulesId: string;
    readonly status: number;
}
export declare class UpdateDmenuDto {
    readonly dmenuId: string;
    readonly modulesId: string;
    readonly dmenuName: string;
    readonly status: number;
}
