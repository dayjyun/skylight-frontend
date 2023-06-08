import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyProfileComponent } from '../my-profile/my-profile.component';
import { EditProfileComponent } from '../../edit-profile/edit-profile.component';
const routes: Routes = [
  {
    path: 'myProfile',
    component: MyProfileComponent,
    children: [
      // { path: 'edit', component: EditProfileComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyProfileRoutingModule {}
