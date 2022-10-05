import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

 @Input() faceSnap!: FaceSnap;
  faceSnaps!: Observable<FaceSnap>;
  
  
  //faceSnap!: FaceSnap;

valeurBouton!: string;

constructor (private faceSnapsService: FaceSnapsService,private route: ActivatedRoute){

}
  
ngOnInit(){
  
    this.valeurBouton="oh snaps";
    const snapId= +this.route.snapshot.params['id'];
    this.faceSnaps=this.faceSnapsService.getFaceSnapById(snapId);
  }

  onSnap(){
   // this.snaps++;
    if ( this.valeurBouton=="oh snaps"){
     // this.faceSnapsService.snapFaceSnapById(this.faceSnap.id);
     this.faceSnap.snaps++;
      this.valeurBouton="Oops, un Snap";
    } else{
      this.faceSnap.snaps=this.faceSnap.snaps-1;
      this.valeurBouton="oh snaps";
      
    } 
    }

    
  

}
