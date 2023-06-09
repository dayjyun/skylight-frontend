import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BecomeAPilotComponent } from './become-a-pilot/become-a-pilot.component';
import { PilotCarouselComponent } from './pilot-carousel/pilot-carousel.component';


@NgModule({
  declarations: [
    BecomeAPilotComponent,
    PilotCarouselComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [BecomeAPilotComponent]
})
export class BecomeAPilotModule { }
