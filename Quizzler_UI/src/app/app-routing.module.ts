import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing-page/landing-page.component';
import { QuestionComponentComponent } from './question-component/question-component.component';
import { MsalGuard } from '@azure/msal-angular';
import { HomeComponent } from './home/home.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { QuizzScreenComponent } from './quizz-screen/quizz-screen.component';
import { AuthGuard } from './auth-guard';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { EditQuizComponent } from './edit-quiz/edit-quiz.component';
const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'question',
    component: QuestionComponentComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'quizzes',
    component: QuizzesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'quizz-screen/:value',
    component: QuizzScreenComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'v2/home',
    component: AdminHomeComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: 'v2/create-quiz',
    component: CreateQuizComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: 'v2/edit-quiz',
    component: EditQuizComponent,
    // canActivate: [AuthGuard],
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
