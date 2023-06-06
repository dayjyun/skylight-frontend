import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TicketsService {
  constructor(private http: HttpClient) {}

  /**
   * Functionality: Returns ticket details (Public/Private)
   * Path: /api/tickets/{ticketId}
   * @param ticketId is the ticket ID to search by
   * @return a ticket
   */
  getTicketById(ticketId: number) {
    return this.http.get(`http://localhost:8080/api/tickets/${ticketId}`);
  }

  /**
   * Functionality: Admin deletes ticket (Private)
   * Path: /api/tickets/{ticketId}
   * @param ticketId is the ticket ID to search by
   * @return the deleted ticket data
   */
  deleteTicket(ticketId: number) {
    return this.http.delete(`http://localhost:8080/api/tickets/${ticketId}`);
  }

  /**
   * Functionality: User books ticket (Public)
   * Path: /api/tickets/{ticketId}/bookFlight
   * @param ticketId is the ticket ID to search by
   * @return the booked ticket data
   */
  bookFlight(ticketId: number) {
    return this.http.put(`http://localhost:8080/api/tickets/${ticketId}/bookFlight`, { });
  }
}
