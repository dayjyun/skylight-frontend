import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AirportsService } from '../../services/airports/airports.service';
import { apiKey } from '../../../../key';


declare var google: any;

@Component({
  selector: 'app-airport-details',
  templateUrl: './airport-details.component.html',
  styleUrls: ['./airport-details.component.css'],
})
export class AirportDetailsComponent implements OnInit, AfterViewInit {
  airport: any;
  google: any;

  @ViewChild('mapContainer', { static: false }) mapContainer!: ElementRef;

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

        // Load Google Maps library after fetching the airport details
        this.loadMapsLibrary();
      });
    });
  }

  ngAfterViewInit(): void {
    // No changes required in this function
  }

  loadMapsLibrary(): void {
    if (!this.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
      script.onload = () => {
        this.google = google;
        this.initMap();
      };
      document.body.appendChild(script);
    } else {
      this.initMap();
    }
  }

  initMap(): void {
    const mapOptions = {
      center: { lat: +this.airport.latitude, lng: +this.airport.longitude },
      zoom: 12,
      disableDefaultUI: true, // Optional: Disable default map UI
    };

    const map = new this.google.maps.Map(
      this.mapContainer.nativeElement,
      mapOptions
    );

    const marker = new this.google.maps.Marker({
      position: { lat: +this.airport.latitude, lng: +this.airport.longitude },
      map: map,
    });
  }
}