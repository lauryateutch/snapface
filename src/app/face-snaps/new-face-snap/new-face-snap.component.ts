import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { FaceSnap } from '../../core/models/face-snap.model';
import { FaceSnapsService } from '../../core/services/face-snaps.service';

@Component({
  selector: 'app-new-face-snap',
  templateUrl: './new-face-snap.component.html',
  styleUrls: ['./new-face-snap.component.scss']
})
export class NewFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  snapForm!: FormGroup;
  faceSnapPreview$!: Observable <FaceSnap>;
  urlRegex!: RegExp;
  constructor(private formbuilder: FormBuilder, private faceSnapService : FaceSnapsService, private router : Router) { }

  ngOnInit(): void {

    this.snapForm=this.formbuilder.group({
      title:[null, [Validators.required]],
      description:[null,[Validators.required]],
      imageUrl:[null,[Validators.required, Validators.pattern(this.urlRegex)]],
      location:[null]
    },
    {
      updateOn:'blur'
    }
    );

    this.faceSnapPreview$= this.snapForm.valueChanges.pipe(
      map( FormValue => ({
        ...FormValue,
        createdDate: new Date(),
        id:0,
        snaps:0
      })
      )
    );

    console.log('hi'+this.faceSnapPreview$) ;


    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
  }


  onSubmitForm(){
    
    this.faceSnapService.addFacesnap(this.snapForm.value).pipe(tap(()=>
    this.router.navigateByUrl('/facesnaps'))
    ).subscribe();

   
     

    }



  

    
    

   }

