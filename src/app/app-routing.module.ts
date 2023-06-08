import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainPageComponent } from './main-page/main-page/main-page.component';
import { SignUpComponent } from './navbar/sign-up/sign-up.component';
import { LoginComponent } from './navbar/login/login.component';
import { MyProfileComponent } from './my-profile/my-profile/my-profile.component';
import { FlightsComponent } from './flights/flights/flights.component';
import { BecomeAPilotComponent } from './become-a-pilot/become-a-pilot/become-a-pilot.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ResultsComponent } from './results/results/results.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'myProfile',
    component: MyProfileComponent,
  },
  {
    path: 'myProfile/edit',
    component: EditProfileComponent,
  },
  {
    path: 'flights/:id',
    component: FlightsComponent,
  },
  {
    path: 'results',
    component: ResultsComponent
  },
  {
    path: 'become-a-pilot',
    component: BecomeAPilotComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
