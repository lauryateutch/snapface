import { HttpClient } from "@angular/common/http";
import { CoreEnvironment } from "@angular/compiler/src/compiler_facade_interface";
import { Injectable } from "@angular/core";
import { map, Observable, switchMap } from "rxjs";
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

    snapFaceSnapById(faceSnapId: number, snapType: 'snap'|'unsnap' ):Observable<FaceSnap>{
                 return this.getFaceSnapById(faceSnapId).pipe(
                    map(faceSnap =>({

                        ...faceSnap,
                        snaps:faceSnap.snaps+ (snapType=== 'snap'? 1 : -1)
                    })),

                    switchMap(updatedFaceSnap => this.http.put<FaceSnap>(
                        `http://localhost:3000/facesnaps/${faceSnapId}`,
                        updatedFaceSnap)
                    ) 


                ); 


        /* const faceSnap= this.faceSnaps.find(faceSnap=> faceSnap.id=== this.id);

        if (faceSnap){
            faceSnap.snaps++;
        } else {
            throw new Error ('FaceSnap not found!');
        } */
    }

    unsnapFaceSnapById(faceSnapId: number):void{
        const faceSnap= this.faceSnaps.find(faceSnap=> faceSnap.id=== this.id);

        if (faceSnap){
            faceSnap.snaps--;
        } else {
            throw new Error ('FaceSnap not found!');
        }
    }

    getFaceSnapById(snapId: number):Observable<FaceSnap>{
       /*  
        const faceSnap= this.faceSnaps.find(faceSnap=> faceSnap.id=== faceSnapId);
        if (!faceSnap) {
            throw new Error('FaceSnap not found!');
        } else {
            return faceSnap;
        } */

        return this.http.get<FaceSnap>('http://localhost:3000/facesnaps/'+ snapId);
 

    }


    addFacesnap(formvalue:{title:string,description: string,imageUrl:string,location?: string}):Observable<FaceSnap>{
        console.log(formvalue);
            return this.getAllFaceSnaps().pipe(
                map(faceSnaps=>[...faceSnaps].sort((a,b)=>a.id- b.id)),
                map(sortedFacesnaps=> 
                    sortedFacesnaps[sortedFacesnaps.length-1]),

                map(previousFacesnap=>({
                    ...formvalue,
                    snaps:0,
                    createdDate: new Date(),
                    id:previousFacesnap.id+1,
                    
                    
                    
                } )),

                switchMap(newFacesnap => this.http.post<FaceSnap>(
                    'http://localhost:3000/facesnaps',
                    newFacesnap)
                )



                    

            )


    }

  



}