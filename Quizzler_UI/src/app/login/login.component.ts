declare var google: any;
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import {
  MSAL_GUARD_CONFIG,
  MsalBroadcastService,
  MsalGuardConfiguration,
  MsalService,
} from '@azure/msal-angular';
import { InteractionStatus, RedirectRequest } from '@azure/msal-browser';
import { Subject, filter, takeUntil } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  username: string = '';
  password: string = '';
  isUserLoggedIn: boolean = false;
  isChecked: boolean = false;
  private readonly _destroy = new Subject<void>();
  email: string = '';

  constructor(
    @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
    private msalBroadCastService: MsalBroadcastService,
    private authService: MsalService,
    private authenticationService: AuthService,
    private router: Router
  ) {}

  ngOnDestroy(): void {
    this._destroy.next(undefined);
    this._destroy.complete();
  }

  ngOnInit() {
    google.accounts.id.initialize({
      client_id:
        '790236578885-12gp1li9u38emkau0agnlohvoferk3tu.apps.googleusercontent.com',
      callback: (resp: any) => {
        this.handleLogin(resp);
      },
    });
    google.accounts.id.renderButton(document.getElementById('google-btn'), {
      theme: 'filled_blue',
      size: 'large',
      shape: 'rectangle',
      width: 350,
    });
  }

  private decodeToken(token: string) {
    return JSON.parse(atob(token.split('.')[1]));
  }

  handleCheck(ev: Event) {
    this.isChecked = true;
  }

  handleLogin(response: any) {
    if (response) {
      const payload = this.decodeToken(response.credential);
      this.authenticationService.updateDecodedResponse(payload);
      sessionStorage.setItem('loggedInUser', JSON.stringify(payload));
      this.email = JSON.parse(sessionStorage.getItem('loggedInUser')!).email;
      if(this.email == 'tiwarisaket3@gmail.com')
        this.router.navigate(['v2/home']);
      else
        this.router.navigate(['home']);
    }
  }
}
