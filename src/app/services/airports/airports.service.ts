import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  getAllAirports() {
    return this.http.get(`http://localhost:8080/api/airports`);
  }

  /**
   * Functionality: Returns details of an airport (Public)
   * Path: /api/airports/{airportId}
   * @param airportId is the airport ID to search by
   * @return airport
   */
  getAirportById(airportId: number) {
    return this.http.get(`http://localhost:8080/api/airports/${airportId}`);
  }

  /**
   * Functionality: Returns details of an airport by code (Public)
   * Path: /api/airports/code/{airportCode}
   * @param airportCode is the airport code to search by
   * @return airport
   */
  getAirportByCode(airportCode: string) {
    return this.http.get(
      `http://localhost:8080/api/airports/code/${airportCode}`
    );
  }

  /**
   * Functionality: Admin creates a new flight origin (Code) (Private)
   * Path: /api/airports/code/{airportCode}/arrivals
   * @param airportCode is the origin airport details
   * @param departingFlight is the origin flight data
   * @return flight departure details
   */
  createFlightOrigin(airportCode: string, departingFlight: any) {
    const jwt = localStorage.getItem('jwt');
    const headers = new HttpHeaders({ Authorization: `Bearer ${jwt}` });
    return this.http.post(
      `http://localhost:8080/api/airports/code/${airportCode}/origin`,
      departingFlight,
      { headers }
    );
  }

  /**
   * Functionality: Admin creates a new flight destination (Private)
   * Path: /api/airports/code/{airportCode}/destination
   * @param airportCode is the destination airport details
   * @param arrivingFlight is the destination flight data
   * @return flight departure details
   */
  createFlightDestination(airportCode: string, arrivingFlight: any) {
    const jwt = localStorage.getItem('jwt');
    const headers = new HttpHeaders({ Authorization: `Bearer ${jwt}` });
    return this.http.post(
      `http://localhost:8080/api/airports/code/${airportCode}/destination`,
      arrivingFlight,
      { headers }
    );
  }

  createFlight(
    originAirportCode: string,
    destinationAirportCode: string,
    flightData: any
  ) {
    const jwt = localStorage.getItem('jwt');
    const headers = new HttpHeaders({ Authorization: `Bearer ${jwt}` });
    console.log(flightData)
    return this.http.post(
      `http://localhost:8080/api/airports/code/${originAirportCode}/${destinationAirportCode}`, flightData,
      { headers }
    );
  }

  /**
   * Functionality: Returns list of arrivals for an airport (Public)
   * Path: /api/airports/{airportId}/arrivals
   * @param airportId is the airport ID to search by
   * @return list of flights
   */
  getArrivals(airportId: number) {
    return this.http.get(
      `http://localhost:8080/api/airports/${airportId}/arrivals`
    );
  }

  /**
   * Functionality: Returns list of departures for an airport (Public)
   * Path: /api/airports/{airportId}/departures
   * @param airportId is the airport ID to search by
   * @return list of flights
   */
  getDepartures(airportId: number) {
    return this.http.get(
      `http://localhost:8080/api/airports/${airportId}/departures`
    );
  }
}
