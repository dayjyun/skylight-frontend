import { Component } from '@angular/core';

interface Card {
  img: string;
  title: string;
  details: string;
}

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
})
export class SectionComponent {
  cards: Card[] = [
    {
      img: '../assets/icons/love-travel.png',
      title: 'Expand Your Love Of Traveling',
      details: `Fly fast and fly frequently with more access to air travel than ever before. Soar towards your destinations with newfound flightpaths and speed`,
    },
    {
      img: '../assets/icons/airline-passenger.png',
      title: `Seamless Travel Experience`,
      details: `Embrace the new travel revolution. You will not miss the old-fashioned airport delays, cancellations, or crowd. It's just you and the endless sea of clouds`,
    },
    {
      img: '../assets/icons/x-wing-starfighter.png',
      title: 'Discover New Way To Travel ',
      details: `Traverse the skies in state-of-the-art aircraft that redefine travel, offering unparalleled comfort, safety, and awe-inspiring experiences along the way`,
    },
    {
      img: '../assets/icons/microsoft-flight-simulator.png',
      title: 'Microsoft Flight Simulator Certified',
      details:
        'Our pilots have undergone over 1000 hours of flight simulations including severe weather, extreme landing, and Homelander bailout',
    },
    {
      img: '../assets/icons/mobile.png',
      title: 'Mobile Ready',
      details: `Whether you're home or on the go, Skylight is ready to take-off with you with easy access and responsive designs`,
    },
  ];
}
