import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyBookedFlightsComponent } from './my-booked-flights/my-booked-flights.component';
import { MyScheduledFlightsComponent } from './my-scheduled-flights/my-scheduled-flights.component';



@NgModule({
  declarations: [
    MyProfileComponent,
    MyBookedFlightsComponent,
    MyScheduledFlightsComponent
  ],
  imports: [
    CommonModule
  ],
  providers: []
})
export class MyProfileModule { }
