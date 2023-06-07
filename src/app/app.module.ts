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
import { BecomeAPilotModule } from './become-a-pilot/become-a-pilot.module';
import { AirportsService } from './services/airports/airports.service'
import { FlightsService } from './services/flights/flights.service'
import { TicketsService } from './services/tickets/tickets.service'
import { UsersService } from './services/users/users.service';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, EditProfileComponent],
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
    MyProfileModule,
    BecomeAPilotModule
  ],
  exports: [
    EditProfileComponent
  ],
  providers: [AirportsService, FlightsService, TicketsService, UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
