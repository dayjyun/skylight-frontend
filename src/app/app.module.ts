import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterModule } from './footer/footer.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FlightsModule } from './flights/flights.module';
import { NavbarModule } from './navbar/navbar.module';
import { MainPageModule } from './main-page/main-page.module';
import { ButtonsModule } from './buttons/buttons.module';
import { MyProfileModule } from './my-profile/my-profile.module';
import { UsersService } from './services/users/users.service';


@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NavbarModule,
    MainPageModule,
    FooterModule,
    FlightsModule,
    ButtonsModule,
    MyProfileModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
