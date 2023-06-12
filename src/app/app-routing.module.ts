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
import { AirportsComponent } from './airports/airports/airports.component';
import { MyBookedFlightsComponent } from './my-booked-flights/my-booked-flights/my-booked-flights.component';
import { AirportFlightsComponent } from './airports/airport-details/airport-flights/airport-flights.component';
import { MyScheduledFlightsComponent } from './my-profile/my-scheduled-flights/my-scheduled-flights.component';
import { ScheduleFlightComponent } from './my-profile/schedule-flight/schedule-flight.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'air',
    component: MyScheduledFlightsComponent,
  },
  {
    path: 'airports/:id',
    children: [
      {
        path: '',
        component: AirportsComponent,
      },
      {
        path: 'flights',
        component: AirportFlightsComponent,
      },
    ],
  },
  {
    path: 'become-a-pilot',
    component: BecomeAPilotComponent,
  },
  {
    path: 'flights/:id',
    component: FlightsComponent,
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
    path: 'air/schedule',
    component: ScheduleFlightComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
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
