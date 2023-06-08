import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AirportsService } from 'src/app/services/airports/airports.service';

@Component({
  selector: 'app-airport-departures',
  templateUrl: './airport-departures.component.html',
  styleUrls: ['./airport-departures.component.css'],
})
export class AirportDeparturesComponent implements OnInit {
  departures: any;

  constructor(
    private airportsService: AirportsService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.paramMap.subscribe((params: any) => {
      this.airportsService
        .getDepartures(params.params.id)
        .subscribe((data: any) => {
          this.departures = data;
        });
    });
  }
}
