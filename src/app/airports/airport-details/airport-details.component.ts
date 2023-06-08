import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { AirportsService } from '../../services/airports/airports.service';

@Component({
  selector: 'app-airport-details',
  templateUrl: './airport-details.component.html',
  styleUrls: ['./airport-details.component.css'],
})
export class AirportDetailsComponent {
  airport: any;

  constructor(
    private route: ActivatedRoute,
    private airportsService: AirportsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.airportsService.getAllAirports().subscribe((data: any) => {
        let paramId: string = params.get('id') || '';
        this.airport = data.find((airport: any) => {
          return airport.id === +paramId;
        });
      });
    });
  }
}
