import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyScheduledFlightsComponent } from './my-scheduled-flights/my-scheduled-flights.component';
import { ButtonsModule } from '../buttons/buttons.module';
import { MyProfileRoutingModule } from './my-profile-routing/my-profile-routing.module';

@NgModule({
  declarations: [
    MyProfileComponent,
    MyScheduledFlightsComponent
  ],
  imports: [
    CommonModule,
    ButtonsModule,
    MyProfileRoutingModule,
  ],
})
export class MyProfileModule { }
