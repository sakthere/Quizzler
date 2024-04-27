declare var google: any;
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService, AuthConfig } from 'angular-oauth2-oidc';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isUserLoggedIn: Subject<boolean> = new Subject<boolean>();
  decodedResponse: any;

  constructor(private router: Router) {
    this.isUserLoggedIn.next(false);}

  updateDecodedResponse(response: any) {
    this.decodedResponse = response;
    this.isUserLoggedIn.next(true);
  }
  
  getDecodedResponse() {
    return this.decodedResponse;
  }

  signOut() {
    google.accounts.id.disableAutoSelect();
    this.router.navigate(['']);
  }
}
