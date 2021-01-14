export interface ApiResponse<T> {
    status: ApiResponseStatus;
    data?: T | T[];
    error?: ErrorMessage | ErrorMessage[];
}
export declare enum ApiResponseStatus {
    SUCCESS = "Ok",
    ERROR = "Error"
}
export declare enum ErrorMessageType {
    INFO = "info",
    WARN = "warning",
    ERROR = "error"
}
export interface ErrorMessage {
    type: ErrorMessageType;
    message: string;
}
