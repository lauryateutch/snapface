import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
   mySnap! : FaceSnap; 
   myOtherSnap!: FaceSnap;
   myLastSnap!:FaceSnap;
   faceSnaps!: FaceSnap[];


  ngOnInit() {
    
   /* this.mySnap= new FaceSnap('Laura',
    'Ma meilleure amie depuis tout petit !',
    'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
    new Date(),
    0);

    this.mySnap1= new FaceSnap('Michèle',
    'Mon premier voyage',
    'image/voyage.jpg',
    new Date(),
    0);*/

  /*  this.faceSnaps=[ {
      title: 'Archibald',
      description: 'Mon meilleur ami depuis tout petit !',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps: 200,
      location:'paris' 
    },

   {
      title: 'Three Rock Mountain',
      description: 'Un endroit magnifique pour les randonnées.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
      createdDate: new Date(),
      snaps: 0,
      location:'alpes' 
    },

 {
      title: 'Un bon repas',
      description: 'Mmmh que c\'est bon !',
      imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      createdDate: new Date(),
      snaps: 0
    },

  ] */
    
  }




}
