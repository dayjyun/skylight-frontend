import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LogoComponent } from './logo/logo.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsersService } from '../services/users/users.service';
import { ButtonsModule } from '../buttons/buttons.module';

@NgModule({
  declarations: [
    LogoComponent,
    LoginComponent,
    SignUpComponent,
    NavbarComponent,
  ],
  providers: [UsersService],
  imports: [CommonModule, FormsModule, HttpClientModule, ButtonsModule],
  exports: [LogoComponent, LoginComponent, SignUpComponent, NavbarComponent],
})
export class NavbarModule {}
