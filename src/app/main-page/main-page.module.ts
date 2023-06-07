import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { HeaderComponent } from './header/header/header.component';
import { SectionComponent } from './section/section.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ButtonsModule } from '../buttons/buttons.module';



@NgModule({
  declarations: [SectionComponent, MainPageComponent],
  imports: [
    CommonModule,
    HeaderModule,
    ButtonsModule,
  ],
  exports: [
    HeaderComponent,
    SectionComponent,
  ]
})
export class MainPageModule { }
