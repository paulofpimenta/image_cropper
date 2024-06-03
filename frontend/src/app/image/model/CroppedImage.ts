export class ImagePosition{
    x1:number;
    x2:number;
    y1:number;
    y2:number;
}

export class CroppedImageMeta {
    position  : ImagePosition;
    height:number;
    width: number;
    size: string;
    base64: string;
}