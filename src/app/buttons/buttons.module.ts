import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginButtonComponent } from './login-button/login-button.component';
import { SignUpButtonComponent } from './sign-up-button/sign-up-button.component';

@NgModule({
  declarations: [LoginButtonComponent, SignUpButtonComponent],
  imports: [CommonModule],
  exports: [LoginButtonComponent, SignUpButtonComponent],
})
export class ButtonsModule {}
