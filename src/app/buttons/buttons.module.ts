import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginButtonComponent } from './login-button/login-button.component';
import { SignUpButtonComponent } from './sign-up-button/sign-up-button.component';
import { BecomeAPilotButtonComponent } from './become-a-pilot-button/become-a-pilot-button.component';
import { AppRoutingModule } from '../app-routing.module';
import { MyBookedFlightsButtonComponent } from './my-booked-flights-button/my-booked-flights-button.component';

@NgModule({
  declarations: [
    LoginButtonComponent,
    SignUpButtonComponent,
    BecomeAPilotButtonComponent,
    MyBookedFlightsButtonComponent,
  ],
  imports: [CommonModule, AppRoutingModule],
  exports: [
    LoginButtonComponent,
    SignUpButtonComponent,
    BecomeAPilotButtonComponent,
    MyBookedFlightsButtonComponent
  ],
})
export class ButtonsModule {}
