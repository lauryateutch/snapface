import { Component,Input,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit  {

@Input() faceSnap !: FaceSnap;  

valeurBouton!: string;

constructor (private faceSnapsService: FaceSnapsService,private router: Router){

}
  
ngOnInit(){
  
    this.valeurBouton="oh snaps";
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


    onViewFaceSnap() {
      this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
  
}

