import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AirportsService } from 'src/app/services/airports/airports.service';

@Component({
  selector: 'app-airport-arrivals',
  templateUrl: './airport-arrivals.component.html',
  styleUrls: ['./airport-arrivals.component.css'],
})
export class AirportArrivalsComponent {
  arrivals: any;

  constructor(
    private airportsService: AirportsService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.paramMap.subscribe((params: any) => {
      this.airportsService
        .getArrivals(params.params.id)
        .subscribe((data: any) => {
          this.arrivals = data;
        });
    });
  }
}
