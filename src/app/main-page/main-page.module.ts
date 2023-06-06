import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { HeaderComponent } from './header/header/header.component';
import { SectionComponent } from './section/section.component';
import { MainPageComponent } from './main-page/main-page.component';



@NgModule({
  declarations: [SectionComponent, MainPageComponent],
  imports: [
    CommonModule,
    HeaderModule,
  ],
  exports: [
    HeaderComponent,
    SectionComponent,
  ]
})
export class MainPageModule { }
