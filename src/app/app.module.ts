import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './main-page/header/header.module';
import { FooterModule } from './footer/footer.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FlightsModule } from './flights/flights.module';
import { NavbarModule } from './navbar/navbar.module';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    HeaderModule,
    FooterModule,
    FlightsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
