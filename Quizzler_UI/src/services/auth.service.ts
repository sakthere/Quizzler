import { Injectable } from '@angular/core';
import { OAuthService, AuthConfig } from 'angular-oauth2-oidc';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private oauthService: OAuthService) {
    this.configureOAuth();
  }

  private configureOAuth(): void {
    const authConfig: AuthConfig = {
      issuer:
        'https://login.microsoftonline.com/8cae9378-18c1-4030-b5ad-09aa68475545/v2.0',
      redirectUri: window.location.origin,
      clientId: '5b4ae44c-b483-4ca4-ba28-54dee24ee7ac',
      scope: 'openid profile email',
      responseType: 'code',
      silentRefreshRedirectUri: `${window.location.origin}/silent-refresh.html`,
      useSilentRefresh: true,
      silentRefreshTimeout: 5 * 60 * 1000, // 5 minutes
    };

    this.oauthService.configure(authConfig);
    this.oauthService.setupAutomaticSilentRefresh();
  }
  
  login(): void {
    this.oauthService.initLoginFlow();
  }

  logout(): void {
    this.oauthService.logOut();
  }

  getAccessToken(): string | null {
    return this.oauthService.getAccessToken();
  }

  getIdentityClaims(): any {
    return this.oauthService.getIdentityClaims();
  }

  isAuthenticated(): boolean {
    return this.oauthService.hasValidAccessToken();
  }
}
