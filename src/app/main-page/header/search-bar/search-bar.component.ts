import { Component } from '@angular/core';
import { AirportsService } from '../../../services/airports/airports.service';
import { debounceTime } from 'rxjs/operators';
import { Router } from '@angular/router';
import { FlightsService } from '../../../services/flights/flights.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  searchBarText: string = '';
  airports: any;

  constructor(
    private airportsService: AirportsService,
    private flightsService: FlightsService
  ) {}

  filterAirports() {
    this.airportsService.getAllAirports().subscribe((data: any) => {
      this.airports = data.filter((airport: any) => {
        return (airport.name.toLowerCase().includes(this.searchBarText.toLowerCase()) || airport.airportCode.toLowerCase().includes(this.searchBarText.toLowerCase()) )
      })
    })
  }

  clearSearchBar() {
    this.searchBarText = '';
  }
}
