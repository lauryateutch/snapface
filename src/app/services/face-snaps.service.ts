import { HttpClient } from "@angular/common/http";
import { CoreEnvironment } from "@angular/compiler/src/compiler_facade_interface";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FaceSnap } from "../models/face-snap.model";
@Injectable({
    providedIn:'root'

})
export class FaceSnapsService{

    id:number | undefined;
   

    constructor(private http: HttpClient){ }

    faceSnaps: FaceSnap[]=[]
  
    

    getAllFaceSnaps(): Observable<FaceSnap[]> {
        return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
    }

    snapFaceSnapById(faceSnapId: number):void{

        const faceSnap= this.faceSnaps.find(faceSnap=> faceSnap.id=== this.id);

        if (faceSnap){
            faceSnap.snaps++;
        } else {
            throw new Error ('FaceSnap not found!');
        }
    }

    unsnapFaceSnapById(faceSnapId: number):void{
        const faceSnap= this.faceSnaps.find(faceSnap=> faceSnap.id=== this.id);

        if (faceSnap){
            faceSnap.snaps--;
        } else {
            throw new Error ('FaceSnap not found!');
        }
    }

    getFaceSnapById(faceSnapId: number):Observable<FaceSnap>{
       /*  
        const faceSnap= this.faceSnaps.find(faceSnap=> faceSnap.id=== faceSnapId);
        if (!faceSnap) {
            throw new Error('FaceSnap not found!');
        } else {
            return faceSnap;
        } */

        return this.http.get<FaceSnap>('http://localhost:3000/facesnaps/${faceSnapId}');
 

    }


    addFacesnap(formvalue:{title:string,description: string,imageUrl:string,location?: string}):void{

        const faceSnap: FaceSnap={
            ...formvalue,
            createdDate: new Date(),
            snaps: 0,
            id: this.faceSnaps[this.faceSnaps.length-1].id +1




        };

        this.faceSnaps.push(faceSnap);

    }



}