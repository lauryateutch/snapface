import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { NewFaceSnapComponent } from './new-face-snap/new-face-snap.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FaceSnapsRoutingModule } from './face-snaps-routing.module';



@NgModule({
  declarations: [
    FaceSnapListComponent,
    FaceSnapComponent,
    NewFaceSnapComponent,
    SingleFaceSnapComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FaceSnapsRoutingModule
  ],
  exports:[
    FaceSnapListComponent,
    FaceSnapComponent,
    NewFaceSnapComponent,
    SingleFaceSnapComponent
  ]
})
export class FaceSnapsModule { }
