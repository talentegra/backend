export interface pages {
    pagesName: string;
    modulesId: string;
    status: number;
}
export interface pagesRO {
    pages: pages[];
}
export declare class CreatePagesDto {
    readonly pagesName: string;
    readonly modulesId: string;
    readonly status: number;
}
export declare class UpdatePagesDto {
    readonly pagesId: string;
    readonly modulesId: string;
    readonly pagesName: string;
    readonly status: number;
}
