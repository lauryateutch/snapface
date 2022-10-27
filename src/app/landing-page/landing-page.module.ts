import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponentComponent } from './Components/landing-page/landing-page-component.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LandingPageComponentComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    LandingPageComponentComponent

  ]
})
export class LandingPageModule { }
