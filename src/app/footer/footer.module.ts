import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { SocialIconsComponent } from './social-icons/social-icons.component';
import { NavbarModule } from '../navbar/navbar.module';



@NgModule({
  declarations: [
    FooterComponent,
    SocialIconsComponent
  ],
  imports: [
    CommonModule,
    NavbarModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
