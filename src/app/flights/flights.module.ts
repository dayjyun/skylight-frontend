import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketsListComponent } from './tickets-list/tickets-list.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';



@NgModule({
  declarations: [
    TicketsListComponent,
    TicketDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FlightsModule { }
