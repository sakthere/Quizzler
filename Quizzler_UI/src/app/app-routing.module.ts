import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing-page/landing-page.component';
import { QuestionComponentComponent } from './question-component/question-component.component';
import { MsalGuard } from '@azure/msal-angular';
import { HomeComponent } from './home/home.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { QuizzScreenComponent } from './quizz-screen/quizz-screen.component';
const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'question',
    component: QuestionComponentComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'quizzes',
    component: QuizzesComponent,
  },
  {
    path: 'quizz-screen/:value',
    component: QuizzScreenComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledNonBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
