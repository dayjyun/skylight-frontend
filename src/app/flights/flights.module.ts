import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketInfoComponent } from './ticket-info/ticket-info.component';
import { TicketsListComponent } from './tickets-list/tickets-list.component';



@NgModule({
  declarations: [
    TicketsListComponent,
    TicketInfoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FlightsModule { }
