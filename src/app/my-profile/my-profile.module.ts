import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyScheduledFlightsComponent } from './my-scheduled-flights/my-scheduled-flights.component';
import { ButtonsModule } from '../buttons/buttons.module';
import { MyBookedFlightsModule } from '../my-booked-flights/my-booked-flights.module';

@NgModule({
  declarations: [
    MyProfileComponent,
    MyScheduledFlightsComponent
  ],
  imports: [
    CommonModule,
    ButtonsModule,
    MyBookedFlightsModule,
  ],
})
export class MyProfileModule { }
