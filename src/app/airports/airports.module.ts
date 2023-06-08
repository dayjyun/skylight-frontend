import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AirportsComponent } from './airports/airports.component';
import { AirportsListComponent } from './airports-list/airports-list.component';
import { AirportDetailsComponent } from './airport-details/airport-details.component';
import { RouterModule } from '@angular/router';
import { ButtonsModule } from '../buttons/buttons.module';
import { AirportDeparturesComponent } from './airport-details/airport-departures/airport-departures.component';
import { AirportArrivalsComponent } from './airport-details/airport-arrivals/airport-arrivals.component';
import { AirportFlightsComponent } from './airport-details/airport-flights/airport-flights.component';


@NgModule({
  declarations: [
    AirportsComponent,
    AirportsListComponent,
    AirportDetailsComponent,
    AirportDeparturesComponent,
    AirportArrivalsComponent,
    AirportFlightsComponent,
  ],
  imports: [CommonModule, RouterModule, ButtonsModule],
  exports: [AirportsComponent],
})
export class AirportsModule {}
