import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CroppedImageMeta, ImageDocument, ImagePosition } from '../model/CroppedImage';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { InfoDetails } from '../model/InfoDetails';


const baseUrl = 'http://localhost:8080/api/v1/image';


@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  getAllImages(): Observable<InfoDetails> {
    return this.http.get<InfoDetails>(`${baseUrl}/all`);
  }

  getImage(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  saveImage(imageDocument:ImageDocument): Observable<any> {
    return this.http.put(`${baseUrl}/save`, imageDocument);
  }

  deleteImage(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAllImages(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  
  toBase64(file:File){
    let blob = new Blob([file], {type: "image/png"});
    let url = URL.createObjectURL(blob);
    return btoa(url);
  }

  toCroppedImageMeta(event:ImageCroppedEvent):Observable<CroppedImageMeta>{
    let croppedImageMeta = new CroppedImageMeta();
    
    this.getBase64ImageFromUrl(event.objectUrl).then(base64=>{
      let base64WithoutFileReader = base64.split(',')[1]
      croppedImageMeta.base64 = base64WithoutFileReader
    })
    croppedImageMeta.position = event.cropperPosition;
    croppedImageMeta.height = event.height;
    croppedImageMeta.width = event.width;

    if (event.blob) {
      let size = parseInt((event.blob.size / 1024).toFixed(1))
      croppedImageMeta.size  = this.toBytes(size);
    }
    return of(croppedImageMeta)
  }

  async getBase64ImageFromUrl(imageUrl:any ) {
    let res = await fetch(imageUrl);
    let blob = await res.blob();
    return new Promise<any>((resolve, _) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);  
      reader.readAsDataURL(blob);
    });
  }

  toBytes(a: number,b=2) {
    if(!+a) return "0 Bytes";
    const c = 0 > b ? 0:b,
    d = Math.floor(Math.log(a) / Math.log(1024));
    return `${parseFloat((a / Math.pow(1024,d)).toFixed(c))} 
    ${["Bytes","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"][d]}`
  }
  
  uploadImage(image: File,title:string,bbox:string): Observable<InfoDetails> {
    const formData = new FormData();
    formData.append('image', image);
    formData.append('title', title);
    formData.append('bbox', bbox);

    return this.http.post<InfoDetails>(baseUrl + '/upload', formData)
  }
  
  
  
  
  
  }



  
