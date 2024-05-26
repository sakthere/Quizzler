import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponentComponent } from './question-component/question-component.component';
import { LandingComponent } from './landing-page/landing-page.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MsalModule,
  MsalInterceptor,
  MsalGuard,
  MsalRedirectComponent,
} from '@azure/msal-angular';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { InteractionType, PublicClientApplication } from '@azure/msal-browser';
import { AuthService } from 'src/services/auth.service';
import { HomeComponent } from './home/home.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { QuizCardComponent } from './quiz-card/quiz-card.component';
import { QuizzScreenComponent } from './quizz-screen/quizz-screen.component';
import { DialogModule } from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {AvatarModule} from 'primeng/avatar';
import { CardModule } from 'primeng/card';
import {ProgressBarModule} from 'primeng/progressbar';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { EditQuizComponent } from './edit-quiz/edit-quiz.component';

export const protectedResourceMap: any = [
  [environment.baseUrl, environment.scopeUri],
];

const isIE =
  window.navigator.userAgent.indexOf('MSIE ') > -1 ||
  window.navigator.userAgent.indexOf('Trident/') > -1;

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponentComponent,
    LandingComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    QuizzesComponent,
    QuizCardComponent,
    QuizzScreenComponent,
    AdminHomeComponent,
    CreateQuizComponent,
    EditQuizComponent,
  ],
  imports: [
    MsalModule.forRoot(
      new PublicClientApplication({
        auth: {
          clientId: environment.uiClienId,
          authority:
            'https://login.microsoftonline.com/' + environment.tenantId,
          redirectUri: environment.redirectUrl,
        },
        cache: { cacheLocation: 'localStorage', storeAuthStateInCookie: isIE },
      }),
      {
        interactionType: InteractionType.Redirect,
        authRequest: { scopes: ['user.read'] },
      },
      {
        interactionType: InteractionType.Redirect,
        protectedResourceMap: new Map([
          ['https://graph.microsoft.com/v1.0/me', ['User.Read']],
        ]),
      }
    ),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DialogModule,
    AvatarModule,
    ButtonModule,
    BrowserAnimationsModule,
    CardModule,
    ProgressBarModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true,
    },
    MsalGuard,
    AuthService,
  ],
  bootstrap: [AppComponent, MsalRedirectComponent],
})
export class AppModule {}
