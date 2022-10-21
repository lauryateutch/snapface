import { Injectable } from "@angular/core";




@Injectable ({
    providedIn:'root'
})
export class AuthService{
    private token: 'MyFakeToken' = "MyFakeToken";


    getToken():string{
        return this.token;
    }
}