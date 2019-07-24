import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RapidformsBasicModule } from '@i-novation/ng-rapidforms';
import { RapidformsBootstrapNgModule } from '@i-novation/ng-rapidforms/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RapidformsBasicModule,
    RapidformsBootstrapNgModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
