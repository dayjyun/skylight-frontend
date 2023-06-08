import { Component } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

import { AirportsService } from '../../../services/airports/airports.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  searchBarText: string = '';
  airports: any;

  constructor(private airportsService: AirportsService) {}

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
