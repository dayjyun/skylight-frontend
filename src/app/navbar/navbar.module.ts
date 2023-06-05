import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    LogoComponent,
    LoginComponent,
    SignUpComponent,
    NavbarComponent,
  ],
  imports: [CommonModule],
  exports: [LogoComponent, LoginComponent, SignUpComponent, NavbarComponent],
})
export class NavbarModule {}
