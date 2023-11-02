import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.modules';
import { AppComponent } from './app.component';

// Modules
import { HomeModule } from './modules/home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [AppRoutingModule, BrowserModule, HomeModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
