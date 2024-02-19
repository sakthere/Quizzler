import { Injectable } from '@angular/core';
import * as Msal from 'msal';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class MsalUserService {
  private accessToken: any;
  public clientApplication: Msal.UserAgentApplication;
  config = {
    auth: {
      clientId: '9b39a661-f988-48a7-b354-a08f53477cb5',
      authority:
        'https://login.microsoftonline.com/3d73e268-e9b4-4525-96dc-6739e4b29a69',
      validateAuthority: true,
      postLogoutRedirectUri: 'https://localhost:4200',
      redirectUri: 'https://localhost:4200/api/questions',
      navigateToLoginRequestUrl: true,
    },
  };
  constructor() {
    this.clientApplication = new Msal.UserAgentApplication(this.config);
  }

  public GetAccessToken(): Observable<any> {
    if (
      sessionStorage.getItem('msal.idtoken') !== undefined &&
      sessionStorage.getItem('msal.idtoken') != null
    ) {
      this.accessToken = sessionStorage.getItem('msal.idtoken');
    }
    return this.accessToken;
  }

  public authCallback(
    errorDesc: string,
    token: any,
    error: string,
    tokenType: any
  ) {
    if (token) {
    } else {
      console.log(error + ':' + errorDesc);
    }
  }

  // public getCurrentUserInfo() {
  //   const user = this.clientApplication.getUser();
  //   alert(user.name);
  // }

  public logout() {
    this.clientApplication.logout();
  }
}
