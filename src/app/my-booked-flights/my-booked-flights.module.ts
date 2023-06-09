import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyBookedFlightsComponent } from './my-booked-flights/my-booked-flights.component';
import { MyBookedFlightsListComponent } from './my-booked-flights-list/my-booked-flights-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MyBookedFlightsComponent,
    MyBookedFlightsListComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [MyBookedFlightsComponent],
})
export class MyBookedFlightsModule {}
