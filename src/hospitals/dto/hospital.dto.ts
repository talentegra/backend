import { ApiProperty } from "@nestjs/swagger";

export interface hospitals{
    hospitalsName:  string;     
    countryId :number;
    stateId : number;
    cityId : number;
    address : string;
    areaCode : string;
    email : string;
    phoneNumber : string;
    logo : string; 
    favicon :  string;
    hospitalCode : string;
    govtRegNumber : string;
    alertType : number;
    smtpHost : string;
    smtpUserName : string;
    smtpPassword : string;
    smtpPort : number;
    smsGatewayUserName : string;
    smsGatewayApiKey : string;
    smsGatewaySenderId : string;
    smsGatewayUrl : string;
    hostingType :string;
    macAddress : string ;
    dbHostName : string ;
    dbName : string;
    dbUserName : string ;
    dbPassword  : string ;
    tablePrefix : string;
    licenseHistoryId : string ;
    status: number; 
    dbCreated: number;
    fileDetails:FileDetails;
    hospitalType: string;
}


export class FileDetails{
    fileContent:string;
    name:string;
}


export class UploadFilesDto extends FileDetails {  
}
 

export interface hospitalsRO{
     hospitals : hospitals[];    
}

export class CreateHospitalsDto{
    @ApiProperty()
    readonly hospitalsName:  string;
    @ApiProperty()
    readonly countryId: number;
    @ApiProperty()  
    readonly stateId : number;
    @ApiProperty()
    readonly cityId : number;
    @ApiProperty()
    readonly address : string;
    @ApiProperty()
    readonly areaCode : string;
    @ApiProperty()
    readonly email : string;
    @ApiProperty()
    readonly phoneNumber : string;
    @ApiProperty()
    readonly logo : string;
    @ApiProperty() 
    readonly favicon :  string;
    @ApiProperty()
    readonly hospitalCode : string;
    @ApiProperty()
    readonly govtRegNumber : string;
    @ApiProperty()
    readonly alertType : number;
    @ApiProperty()
    readonly smtpHost : string;
    @ApiProperty()
    readonly smtpUserName : string;
    @ApiProperty()
    readonly smtpPassword : string;
    @ApiProperty()
    readonly smtpPort : number;
    @ApiProperty()
    readonly smsGatewayUserName : string;
    @ApiProperty()
    readonly smsGatewayApiKey : string;
    @ApiProperty()
    readonly smsGatewaySenderId : string;
    @ApiProperty()
    readonly smsGatewayUrl : string;
    @ApiProperty()
    readonly hostingType :string;
    @ApiProperty()
    readonly macAddress : string ;
    @ApiProperty()
    readonly dbHostName : string ;
    @ApiProperty()
    readonly dbName : string;
    @ApiProperty()
    readonly dbUserName : string ;
    @ApiProperty()
    readonly dbPassword  : string ;     
    @ApiProperty()
    readonly tablePrefix : string;
    @ApiProperty()
    readonly licenseHistoryId : string ;
    @ApiProperty()
    readonly status: number;   
    @ApiProperty()
    readonly dbCreated: number;   
    @ApiProperty()
    readonly hospitalType:string;
}

export class UpdateHospitalsDto{

    @ApiProperty()
    hospitalsId:string;  
    @ApiProperty()
    hospitalsName:  string;
    @ApiProperty()
    countryId: number;
    @ApiProperty()  
    stateId : number;
    @ApiProperty()
    cityId : number;
    @ApiProperty()
    address : string;
    @ApiProperty()
    areaCode : string;
    @ApiProperty()
    email : string;
    @ApiProperty()
    phoneNumber : string;
    @ApiProperty()
    logo : string;
    @ApiProperty() 
    favicon :  string;
    @ApiProperty()
    hospitalCode : string;
    @ApiProperty()
    govRegNumber : string;
    @ApiProperty()
    alertType : number;
    @ApiProperty()
    smtpHost : string;
    @ApiProperty()
    smtpUserName : string;
    @ApiProperty()
    smtpPassword : string;
    @ApiProperty()
    smtpPort : number;
    @ApiProperty()
    smsGatewayUserName : string;
    @ApiProperty()
    smsGatewayApiKey : string;
    @ApiProperty()
    smsGatewaySenderId : string;
    @ApiProperty()
    smsGatewayUrl : string;
    @ApiProperty()
    hostingType :string;
    @ApiProperty()
    macAddress : string ;
    @ApiProperty()
    dbHostName : string ;
    @ApiProperty()
    dbName : string;
    @ApiProperty()
    dbUserName : string ;
    @ApiProperty()
    dbPassword  : string ;    
    @ApiProperty()
    tablePrefix : string;
    @ApiProperty()
    licenseHistoryId : string ;
    @ApiProperty()
    status: number;
    @ApiProperty()
    readonly hospitalType:string;


}

