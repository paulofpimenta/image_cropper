import { Timestamp } from "rxjs"

export interface ImageUploadResponse{
    title:string,
    base64:string
}


export interface Infodetails{
    httpStatus:number,
    message:string,
    transactionTime:string,
    result:ImageUploadResponse
}