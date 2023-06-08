import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyBookedFlightsComponent } from './my-booked-flights/my-booked-flights.component';



@NgModule({
  declarations: [MyBookedFlightsComponent],
  imports: [CommonModule],
  exports: [MyBookedFlightsComponent],
})
export class MyBookedFlightsModule {}
