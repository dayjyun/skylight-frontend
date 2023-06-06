import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AirportsService {
  constructor(private http: HttpClient) {}

  /**
   * Functionality: Returns a list of airports	(Public)
   * Path: /api/airports
   * @return list of airports
   */
  getAllAirports() {}

  /**
   * Functionality: Returns details of an airport (Public)
   * Path: /api/airports/{airportId}
   * @param airportId is the airport ID to search by
   * @return airport
   */
  getAirportById(airportId: number) {}

  /**
   * Functionality: Returns details of an airport by code (Public)
   * Path: /api/airports/code/{airportCode}
   * @param airportCode is the airport code to search by
   * @return airport
   */
  getAirportByCode(airportCode: string) {}

  /**
   * Functionality: Admin creates a new flight origin (ID/Code) (Private)
   * Path: /api/airports/{airportId}/arrivals
   * @param airportCode is the origin airport details
   * @param departingFlight is the origin flight data
   * @return flight departure details
   */
  createFlightOrigin(airportCode: string) {}

  /**
   * Functionality: Admin creates a new flight destination (Private)
   * Path: /api/airports/code/{airportCode}/destination
   * @param airportCode is the destination airport details
   * @param arrivingFlight is the destination flight data
   * @return flight departure details
   */
  createFlightDestination(airportCode: string) {}

  /**
   * Functionality: Returns list of arrivals for an airport (Public)
   * Path: /api/airports/{airportId}/arrivals
   * @param airportId is the airport ID to search by
   * @return list of flights
   */
  getArrivals() {}

  /**
   * Functionality: Returns list of departures for an airport (Public)
   * Path: /api/airports/{airportId}/departures
   * @param airportId is the airport ID to search by
   * @return list of flights
   */
  getDepartures() {}
}
