import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsComponent } from './flights/flights.component';
import { FlightsListComponent } from './flights-list/flights-list.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FlightsComponent,
    FlightsListComponent,
    FlightDetailsComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class FlightsModule {}
