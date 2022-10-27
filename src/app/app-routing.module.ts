import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FaceSnapListComponent } from "./face-snaps/face-snap-list/face-snap-list.component";
import { LandingPageComponentComponent } from "./landing-page/Components/landing-page/landing-page-component.component";
import { NewFaceSnapComponent } from "./face-snaps/new-face-snap/new-face-snap.component";
import { SingleFaceSnapComponent } from "./face-snaps/single-face-snap/single-face-snap.component";



const routes: Routes = [

    { path: 'facesnaps', loadChildren: () => import('./face-snaps/face-snaps.module').then(m => m.FaceSnapsModule) },
    {
        path:'', component: LandingPageComponentComponent
    }
  
];
@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
})

export class AppRoutingModule{}