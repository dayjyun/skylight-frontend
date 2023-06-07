import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainPageComponent } from './main-page/main-page/main-page.component';
import { SignUpComponent } from './navbar/sign-up/sign-up.component';
import { LoginComponent } from './navbar/login/login.component';
import { MyProfileComponent } from './my-profile/my-profile/my-profile.component';
import { FlightsComponent } from './flights/flights/flights.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'myProfile',
    component: MyProfileComponent
  },
  {
    path: 'flights',
    component: FlightsComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
