import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginButtonComponent } from './login-button/login-button.component';
import { SignUpButtonComponent } from './sign-up-button/sign-up-button.component';
import { BecomeAPilotButtonComponent } from './become-a-pilot-button/become-a-pilot-button.component';

@NgModule({
  declarations: [LoginButtonComponent, SignUpButtonComponent, BecomeAPilotButtonComponent],
  imports: [CommonModule],
  exports: [LoginButtonComponent, SignUpButtonComponent],
})
export class ButtonsModule {}
