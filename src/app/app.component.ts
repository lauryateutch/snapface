import { Component, Input, OnInit } from '@angular/core';
import { filter, interval, map, mergeMap, Observable, of, take, tap } from 'rxjs';
import { FaceSnap } from './core/models/face-snap.model';

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
   interval$!: Observable<string>;


  ngOnInit() {
    
   
/* this.interval$=interval(3000).pipe(
      filter(value=> value  % 2 === 0),
      map(value=> value % 3=== 0 ?
        `Je suis ${value} et je suis divisible par 3` :
        `Je suis ${value} et je ne suis pas divisible par 3`
        ),
        tap(text=> this.logger(text))

    ); */

/* 
    this.getTrainObservable$.pipe(map(
      value=> value ==='rouge' ?
      `Je suis un train ${value} ` :
      `Je suis un train ${value}  ` 
    )); */








}
  logger(text: string): void {
    //throw ('Method not implemented.');
    console.log(`Log: ${text}`);
  }

}
function logger(Text: { new(data?: string | undefined): Text; prototype: Text; }, string: any) {
  throw new Error('Function not implemented.');
}



