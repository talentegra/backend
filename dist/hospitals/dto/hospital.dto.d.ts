export interface hospitals {
    hospitalsName: string;
    countryId: number;
    stateId: number;
    cityId: number;
    address: string;
    areaCode: string;
    email: string;
    phoneNumber: string;
    logo: string;
    favicon: string;
    hospitalCode: string;
    govtRegNumber: string;
    alertType: number;
    smtpHost: string;
    smtpUserName: string;
    smtpPassword: string;
    smtpPort: number;
    smsGatewayUserName: string;
    smsGatewayApiKey: string;
    smsGatewaySenderId: string;
    smsGatewayUrl: string;
    hostingType: string;
    macAddress: string;
    dbHostName: string;
    dbName: string;
    dbUserName: string;
    dbPassword: string;
    tablePrefix: string;
    licenseHistoryId: string;
    status: number;
    dbCreated: number;
    fileDetails: FileDetails;
    hospitalType: string;
}
export declare class FileDetails {
    fileContent: string;
    name: string;
}
export declare class UploadFilesDto extends FileDetails {
}
export interface hospitalsRO {
    hospitals: hospitals[];
}
export declare class CreateHospitalsDto {
    readonly hospitalsName: string;
    readonly countryId: number;
    readonly stateId: number;
    readonly cityId: number;
    readonly address: string;
    readonly areaCode: string;
    readonly email: string;
    readonly phoneNumber: string;
    readonly logo: string;
    readonly favicon: string;
    readonly hospitalCode: string;
    readonly govtRegNumber: string;
    readonly alertType: number;
    readonly smtpHost: string;
    readonly smtpUserName: string;
    readonly smtpPassword: string;
    readonly smtpPort: number;
    readonly smsGatewayUserName: string;
    readonly smsGatewayApiKey: string;
    readonly smsGatewaySenderId: string;
    readonly smsGatewayUrl: string;
    readonly hostingType: string;
    readonly macAddress: string;
    readonly dbHostName: string;
    readonly dbName: string;
    readonly dbUserName: string;
    readonly dbPassword: string;
    readonly tablePrefix: string;
    readonly licenseHistoryId: string;
    readonly status: number;
    readonly dbCreated: number;
    readonly hospitalType: string;
}
export declare class UpdateHospitalsDto {
    hospitalsId: string;
    hospitalsName: string;
    countryId: number;
    stateId: number;
    cityId: number;
    address: string;
    areaCode: string;
    email: string;
    phoneNumber: string;
    logo: string;
    favicon: string;
    hospitalCode: string;
    govRegNumber: string;
    alertType: number;
    smtpHost: string;
    smtpUserName: string;
    smtpPassword: string;
    smtpPort: number;
    smsGatewayUserName: string;
    smsGatewayApiKey: string;
    smsGatewaySenderId: string;
    smsGatewayUrl: string;
    hostingType: string;
    macAddress: string;
    dbHostName: string;
    dbName: string;
    dbUserName: string;
    dbPassword: string;
    tablePrefix: string;
    licenseHistoryId: string;
    status: number;
    readonly hospitalType: string;
}
