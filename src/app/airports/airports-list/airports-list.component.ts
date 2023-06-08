import { Component, OnInit } from '@angular/core';

import { AirportsService } from '../../services/airports/airports.service';
import { apiKey } from '../../../../key'

@Component({
  selector: 'app-airports-list',
  templateUrl: './airports-list.component.html',
  styleUrls: ['./airports-list.component.css'],
})
export class AirportsListComponent implements OnInit {
  airports: any;

  constructor(private airportsService: AirportsService) {}

  ngOnInit(): void {
    console.log(apiKey);
    this.airportsService.getAllAirports().subscribe((data) => {
      this.airports = data;
    });
  }
}
