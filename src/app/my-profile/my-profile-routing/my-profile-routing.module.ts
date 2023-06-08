import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyProfileComponent } from '../my-profile/my-profile.component';
import { EditProfileComponent } from '../../edit-profile/edit-profile.component';
import { MyBookedFlightDetailsComponent } from 'src/app/my-booked-flights/my-booked-flight-details/my-booked-flight-details.component';
const routes: Routes = [
  {
    path: 'myProfile',
    component: MyProfileComponent,
    children: [
      { path: 'edit', component: EditProfileComponent },
      { path: 'my-tickets', component: MyBookedFlightDetailsComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyProfileRoutingModule {}
