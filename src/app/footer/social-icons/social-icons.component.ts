import { Component } from '@angular/core';

interface Dev {
  portfolio: string;
  github: string;
  linkedIn: string;
}

@Component({
  selector: 'app-social-icons',
  templateUrl: './social-icons.component.html',
  styleUrls: ['./social-icons.component.css'],
})
export class SocialIconsComponent {
  dev: Dev = {
    portfolio: 'https://kbarrios.dev/',
    github: 'https://github.com/dayjyun',
    linkedIn: 'https://www.linkedin.com/in/kevinbarrios12/',
  };
}
