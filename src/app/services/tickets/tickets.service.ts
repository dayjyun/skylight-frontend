import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { testKey } from '../../../../key'

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
    const jwt = localStorage.getItem('jwt');
    const headers = jwt
      ? new HttpHeaders({ Authorization: `Bearer ${jwt}` })
      : undefined;
    return this.http.get(`http://localhost:8080/api/tickets/${ticketId}`, {
      headers,
    });
  }

  /**
   * Functionality: Admin deletes ticket (Private)
   * Path: /api/tickets/{ticketId}
   * @param ticketId is the ticket ID to search by
   * @return the deleted ticket data
   */
  deleteTicket(ticketId: number) {
    const jwt = localStorage.getItem('jwt');
    const headers = new HttpHeaders({ Authorization: `Bearer ${jwt}` });
    return this.http.delete(`http://localhost:8080/api/tickets/${ticketId}`, {
      headers,
    });
  }

  /**
   * Functionality: User books ticket (Public)
   * Path: /api/tickets/{ticketId}/bookFlight
   * @param ticketId is the ticket ID to search by
   * @return the booked ticket data
   */
  bookFlight(ticketId: number) {
    const jwt = localStorage.getItem('jwt');
    const headers = jwt
      ? new HttpHeaders({ Authorization: `Bearer ${jwt}` })
      : undefined;
    return this.http.put(
      `http://localhost:8080/api/tickets/${ticketId}/bookFlight`,
      {},
      { headers }
    );
  }
}
