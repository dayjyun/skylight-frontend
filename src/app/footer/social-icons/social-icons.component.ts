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
  /**
   * Developer information.
   */
  dev: Dev = {
    /**
     * Portfolio website URL.
     */
    portfolio: 'https://kbarrios.dev/',

    /**
     * GitHub profile URL.
     */
    github: 'https://github.com/dayjyun',

    /**
     * LinkedIn profile URL.
     */
    linkedIn: 'https://www.linkedin.com/in/kevinbarrios12/',
  };
}
