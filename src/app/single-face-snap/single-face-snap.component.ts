import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  
  
  faceSnap!: FaceSnap;
  faceSnap$!: Observable<FaceSnap>;

valeurBouton!: string;

constructor (private faceSnapsService: FaceSnapsService,private route: ActivatedRoute){

}  
ngOnInit(){
  
    this.valeurBouton="oh snaps";
    
    const snapId= +this.route.snapshot.params['id'];
    console.log(snapId);
    //this.faceSnaps=this.faceSnapsService.getFaceSnapById(snapId);
    //console.log(this.faceSnapsService.getFaceSnapById(snapId));
  this.faceSnapsService.getFaceSnapById(snapId).subscribe((value)=>{
    this.faceSnap= value;
  })

  }

  onSnap(faceSnapId: number){
   // this.snaps++;
    if ( this.valeurBouton=="oh snaps"){
     this.faceSnapsService.snapFaceSnapById(faceSnapId, 'snap').pipe(tap(()=>
     {
        this.faceSnap$= this.faceSnapsService.getFaceSnapById(faceSnapId);

     }));
     this.faceSnap.snaps++;
      this.valeurBouton="Oops, un Snap";
    } else{
     /*  this.faceSnap.snaps=this.faceSnap.snaps-1;
      this.valeurBouton="oh snaps";
       */
      this.faceSnapsService.snapFaceSnapById(faceSnapId, 'unsnap').pipe(tap(()=>
      {this.faceSnap$= this.faceSnapsService.getFaceSnapById(faceSnapId)




      }));
      this.valeurBouton="oh snap";


    } 
    }

    
  

}
