export class FaceSnap{
    /*constructor(public title: string,
        public description: string,
        public imageUrl: string,
        public createdDate: Date,
        public snaps: number,
        public location?:string) {


}*/
id!: number;
title!: string;
description!: string;
imageUrl!: string;
createdDate!: Date;
snaps!: number;
location?: string;
    static snaps: number;


}