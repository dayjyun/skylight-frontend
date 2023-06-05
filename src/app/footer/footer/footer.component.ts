import { Component } from '@angular/core';

interface Dev {
  portfolio: string,
  github: string,
  linkedIn: string,
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  dev: Dev = {
    portfolio: 'https://kbarrios.dev/',
    github: 'https://github.com/dayjyun',
    linkedIn: 'https://www.linkedin.com/in/kevinbarrios12/',
  };
}
