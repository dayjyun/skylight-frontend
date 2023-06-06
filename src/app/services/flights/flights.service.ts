import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  getAllFlights() {}

  /**
   * Functionality: Returns flight details (Public)
   * Path: /api/flights/{flightId}
   * @param flightId is the flight ID to search by
   * @return a Flight
   */
  getFlightById(flightId: number) {}

  /**
   * Functionality: Admin deletes flight details (Private)
   * Path: /api/flights/{flightId}
   * @param flightId is the flight ID to search by
   * @return the deleted flight data
   */
  deleteFlightById(flightId: number) {}

  /**
   * Functionality: Get all tickets available for flight (Public)
   * Path: /api/flights/{flightId}/tickets
   * @param flightId is the flight ID to search by
   * @return a list of tickets
   */
  getFlightTickets(flightId: number) {}

  /**
   * Functionality: Admin creates ticket for flight (Public | Private)
   * Path: /api/flights/{flightId}/tickets
   * @param flightId is the flight ID to search by
   * @return newly created ticket
   */
  createTicketForFlight(flightId: number) {}
}
