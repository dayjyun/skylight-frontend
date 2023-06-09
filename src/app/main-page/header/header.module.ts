import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SplashImageComponent } from './splash-image/splash-image.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { ButtonsModule } from '../../buttons/buttons.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [HeaderComponent, SplashImageComponent, SearchBarComponent],
  imports: [CommonModule, FormsModule, ButtonsModule, RouterModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
