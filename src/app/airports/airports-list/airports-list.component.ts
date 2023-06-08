import { Component, OnInit } from '@angular/core';

import { AirportsService } from '../../services/airports/airports.service';

@Component({
  selector: 'app-airports-list',
  templateUrl: './airports-list.component.html',
  styleUrls: ['./airports-list.component.css'],
})
export class AirportsListComponent implements OnInit {
  /**
   * Holds the airport data.
   */
  airports: any;

  /**
   * Creates an instance of AirportsListComponent.
   * @param airportsService - The service used for retrieving airport data.
   */
  constructor(private airportsService: AirportsService) {}

  /**
   * Lifecycle hook that is called after the component is initialized.
   * Retrieves all airport data and assigns it to the `airports` property.
   */
  ngOnInit(): void {
    this.airportsService.getAllAirports().subscribe((data) => {
      this.airports = data;
    });
  }
}
