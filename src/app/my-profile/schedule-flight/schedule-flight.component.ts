import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AirportsService } from 'src/app/services/airports/airports.service';

@Component({
  selector: 'app-schedule-flight',
  templateUrl: './schedule-flight.component.html',
  styleUrls: ['./schedule-flight.component.css'],
})
export class ScheduleFlightComponent implements OnInit {
  /**
   * Represents airport object.
   */
  airportData: any;
  /**
   * Represents the selected origin airport from the dropdown.
   */
  originAirportSelect: any;
  /**
   * Represents the selected destination airport from the dropdown.
   */
  destinationAirportSelect: any;
  /**
   * Represents the origin airport data.
   */
  originAirportData: any = {};
  /**
   * Represents the destination airport data.
   */
  destinationData: any = {};
  /**
   * Represents flight data.
   */
  flightData: any = {};

  constructor(
    private airportsService: AirportsService,
    private router: Router
  ) {}

  /**
   * Initializes the component with all the airport data.
   */
  ngOnInit(): void {
    this.getAllAirports();
  }
  /**
   * Retrieves all airports and assigns the airport data
   */
  getAllAirports(): void {
    this.airportsService.getAllAirports().subscribe((data: any) => {
      this.airportData = data;
    });
  }
  /**
   * Saves the selected origin airport from the dropdown.
   * @param airport - The selected origin airport.
   */
  saveOriginAirportSelect(airport: any): void {
    this.airportsService
      .getAirportById(airport.target.value)
      .subscribe((data: any) => {
        this.originAirportSelect = data;
      });
  }

  /**
   * Saves the selected destination airport from the dropdown.
   * @param airport - The selected destination airport.
   */
  saveDestinationAirportSelect(airport: any): void {
    this.airportsService
      .getAirportById(airport.target.value)
      .subscribe((data: any) => {
        this.destinationAirportSelect = data;
      });
  }

  /**
   * Creates a new flight by calling the airport service
   */
  createFlight(): void {
    this.airportsService
      .createFlight(
        this.originAirportSelect.airportCode,
        this.destinationAirportSelect.airportCode,
        this.flightData
      )
      .subscribe((data: any) => {
        this.router.navigate(['/air']);
      });
  }
}
