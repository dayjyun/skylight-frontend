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
  /**
   * Holds the airport data.
   */
  airport: any;

  /**
   * Holds the Google Maps library.
   */
  google: any;

  /**
   * Reference to the map container element.
   */
  @ViewChild('mapContainer', { static: false }) mapContainer!: ElementRef;

  /**
   * Creates an instance of AirportDetailsComponent.
   * @param route - The activated route containing the route parameters.
   * @param airportsService - The service used for retrieving airport data.
   */
  constructor(
    private route: ActivatedRoute,
    private airportsService: AirportsService
  ) {}

  /**
   * Lifecycle hook that is called after the component is initialized.
   * Retrieves the airport data and initializes Google Maps.
   */
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

  /**
   * Lifecycle hook that is called after the component's view has been initialized.
   */
  ngAfterViewInit(): void {
    // No changes required in this function
  }

  /**
   * Loads the Google Maps library and initializes the map.
   */
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

  /**
   * Initializes the Google Map with the airport's location.
   */
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
