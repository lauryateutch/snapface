import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  token: string | undefined;

  constructor(private authservice : AuthService, private router: Router) { }

  ngOnInit(): void {
  }


  login(){
this.authservice.login();
this.router.navigateByUrl('/facesnaps');

  }

}
