import { Component } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

import { AirportsService } from '../../../services/airports/airports.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  /**
   * The text entered in the search bar.
   */
  searchBarText: string = '';

  /**
   * Holds the airport data.
   */
  airports: any;

  /**
   * Creates an instance of the component.
   * @param airportsService - The service used for retrieving airport data.
   */
  constructor(private airportsService: AirportsService) {}

  /**
   * Filters the airport data based on the search bar text.
   */
  filterAirports() {
    this.airportsService.getAllAirports().subscribe((data: any) => {
      this.airports = data.filter((airport: any) => {
        return (
          airport.name
            .toLowerCase()
            .includes(this.searchBarText.toLowerCase()) ||
          airport.airportCode
            .toLowerCase()
            .includes(this.searchBarText.toLowerCase()) ||
          airport.city.toLowerCase().includes(this.searchBarText.toLowerCase())
        );
      });
    });
  }
}
