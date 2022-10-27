import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FaceSnapComponent } from './face-snaps/face-snap/face-snap.component';
import { FaceSnapListComponent } from './face-snaps/face-snap-list/face-snap-list.component';
import { AppRoutingModule } from './app-routing.module';
import { SingleFaceSnapComponent } from './face-snaps/single-face-snap/single-face-snap.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewFaceSnapComponent } from './face-snaps/new-face-snap/new-face-snap.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { FaceSnapsModule } from './face-snaps/face-snaps.module';
import { LandingPageModule } from './landing-page/landing-page.module';

@NgModule({
  declarations: [
    AppComponent,
   
    
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
    LandingPageModule
  

  ],
  providers: [

    {
      provide: LOCALE_ID, useValue: 'fr-FR'
    },
    

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
