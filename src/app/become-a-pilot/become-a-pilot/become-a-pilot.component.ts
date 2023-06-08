import { Component } from '@angular/core';

interface Card {
  img: string;
  title: string;
  details: string;
}

@Component({
  selector: 'app-become-a-pilot',
  templateUrl: './become-a-pilot.component.html',
  styleUrls: ['./become-a-pilot.component.css'],
})
export class BecomeAPilotComponent {
  /**
   * An array of cards containing image, title, and details.
   */
  cards: Card[] = [
    {
      img: '../assets/icons/user-flying.png',
      title: "Sky's the Limit",
      details: `Experience the exhilaration of flying and explore the boundless beauty of the world from a new perspective. Soar. Dream. Inspire.`,
    },
    {
      img: '../assets/icons/sunset.png',
      title: 'Unforgettable Memories',
      details: `From witnessing breathtaking sunsets to exploring the boundless beauty of the world, you will create unforgettable memories that are truly one of a kind.`,
    },
    {
      img: '../assets/icons/pilot-hat.png',
      title: `Seamless Travel Experience`,
      details: `Transform your lifelong love for aviation into an exhilarating career, where you'll soar as a skilled pilot, making dreams take flight.`,
    },
    {
      img: '../assets/icons/certified.png',
      title: 'Elevate Your Skills',
      details: `Take your career to new heights where we provide the resources and support you need to accelerate your professional growth. Invest in your future through SkyLight and your career growth will be nurtured every step of the way.`,
    },
    {
      img: '../assets/icons/region.png',
      title: 'Endless Horizons To Explore',
      details: `Enjoy the freedom of being in control of your own aircraft, making decisions and charting your own course.`,
    },
  ];
}
