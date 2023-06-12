import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginButtonComponent } from './login-button/login-button.component';
import { SignUpButtonComponent } from './sign-up-button/sign-up-button.component';
import { BecomeAPilotButtonComponent } from './become-a-pilot-button/become-a-pilot-button.component';
import { AppRoutingModule } from '../app-routing.module';
import { MyBookedFlightsButtonComponent } from './my-booked-flights-button/my-booked-flights-button.component';
import { LogoutButtonComponent } from './logout-button/logout-button.component';
import { ScheduledFlightsButtonComponent } from './scheduled-flights-button/scheduled-flights-button.component';
import { MyProfileButtonComponent } from './my-profile-button/my-profile-button.component';
import { EditMyProfileButtonComponent } from './edit-my-profile-button/edit-my-profile-button.component';
import { AllFlightsButtonComponent } from './all-flights-button/all-flights-button.component';
import { AllAirportsButtonComponent } from './all-airports-button/all-airports-button.component';
import { RouterLink, RouterModule } from '@angular/router';
import { ScheduleNewFlightButtonComponent } from './schedule-new-flight-button/schedule-new-flight-button.component';

@NgModule({
  declarations: [
    LoginButtonComponent,
    SignUpButtonComponent,
    BecomeAPilotButtonComponent,
    MyBookedFlightsButtonComponent,
    LogoutButtonComponent,
    ScheduledFlightsButtonComponent,
    MyProfileButtonComponent,
    EditMyProfileButtonComponent,
    AllFlightsButtonComponent,
    AllAirportsButtonComponent,
    ScheduleNewFlightButtonComponent,
  ],
  imports: [CommonModule, AppRoutingModule, RouterModule],
  exports: [
    LoginButtonComponent,
    SignUpButtonComponent,
    BecomeAPilotButtonComponent,
    MyBookedFlightsButtonComponent,
    LogoutButtonComponent,
    ScheduledFlightsButtonComponent,
    MyProfileButtonComponent,
    EditMyProfileButtonComponent,
    AllFlightsButtonComponent,
    AllAirportsButtonComponent,
    ScheduleNewFlightButtonComponent,
  ],
})
export class ButtonsModule {}
