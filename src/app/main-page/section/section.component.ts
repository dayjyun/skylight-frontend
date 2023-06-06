import { Component } from '@angular/core';

interface Card {
  img: string,
  details: string,
}

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent {
  card: Card = {
    img: "",
    details: "",
  }
}
