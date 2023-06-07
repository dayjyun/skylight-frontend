import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FlightsService {
  constructor(private http: HttpClient) {}

  /**
   * Functionality: Returns a list of all flights (Public)
   * Path: /api/flights
   * @return a list of flights
   */
  getAllFlights() {
    return this.http.get(`http://localhost:8080/api/flights`);
  }

  /**
   * Functionality: Returns flight details (Public)
   * Path: /api/flights/{flightId}
   * @param flightId is the flight ID to search by
   * @return a Flight
   */
  getFlightById(flightId: number) {
    return this.http.get(`http://localhost:8080/api/flights/${flightId}`);
  }

  /**
   * Functionality: Admin deletes flight details (Private)
   * Path: /api/flights/{flightId}
   * @param flightId is the flight ID to search by
   * @return the deleted flight data
   */
  deleteFlightById(flightId: number) {
    const jwt = localStorage.getItem('jwt');
    const headers = new HttpHeaders({ Authorization: `Bearer ${jwt}` });
    return this.http.delete(`http://localhost:8080/api/flights/${flightId}`, { headers });
  }

  /**
   * Functionality: Get all tickets available for flight (Public)
   * Path: /api/flights/{flightId}/tickets
   * @param flightId is the flight ID to search by
   * @return a list of tickets
   */
  getFlightTickets(flightId: number) {
    return this.http.get(
      `http://localhost:8080/api/flights/${flightId}/tickets`
    );
  }

  /**
   * Functionality: Admin creates ticket for flight (Private)
   * Path: /api/flights/{flightId}/tickets
   * @param flightId is the flight ID to search by
   * @return newly created ticket
   */
  createTicketForFlight(flightId: number, flightData: any) {
    const jwt = localStorage.getItem('jwt');
    const headers = new HttpHeaders({ Authorization: `Bearer ${jwt}` });
    return this.http.post(
      `http://localhost:8080/api/flights/${flightId}`,
      flightData,
      { headers }
    );
  }
}
