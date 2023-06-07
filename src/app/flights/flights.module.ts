import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsComponent } from './flights/flights.component';
import { FlightsListComponent } from './flights-list/flights-list.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';


@NgModule({
  declarations: [
    FlightsComponent,
    FlightsListComponent,
    FlightDetailsComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class FlightsModule { }
