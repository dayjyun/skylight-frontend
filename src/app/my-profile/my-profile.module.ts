import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyScheduledFlightsComponent } from './my-scheduled-flights/my-scheduled-flights.component';
import { ButtonsModule } from '../buttons/buttons.module';
import { MyBookedFlightsModule } from '../my-booked-flights/my-booked-flights.module';
import { ScheduleFlightComponent } from './schedule-flight/schedule-flight.component';
import { FormsModule } from '@angular/forms';
import { AirportsService } from '../services/airports/airports.service';

@NgModule({
  declarations: [
    MyProfileComponent,
    MyScheduledFlightsComponent,
    ScheduleFlightComponent
  ],
  imports: [
    CommonModule,
    ButtonsModule,
    MyBookedFlightsModule,
    FormsModule,
  ],
  exports: [
    ScheduleFlightComponent
  ],
  providers: [AirportsService]
})
export class MyProfileModule { }
