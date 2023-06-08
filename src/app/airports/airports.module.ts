import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AirportsComponent } from './airports/airports.component';
import { AirportsListComponent } from './airports-list/airports-list.component';
import { AirportDetailsComponent } from './airport-details/airport-details.component';



@NgModule({
  declarations: [
    AirportsComponent,
    AirportsListComponent,
    AirportDetailsComponent,
  ],
  imports: [CommonModule],
  exports: [AirportsComponent],
})
export class AirportsModule {}
