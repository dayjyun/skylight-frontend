import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BecomeAPilotComponent } from './become-a-pilot/become-a-pilot.component';


@NgModule({
  declarations: [
    BecomeAPilotComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [BecomeAPilotComponent]
})
export class BecomeAPilotModule { }
