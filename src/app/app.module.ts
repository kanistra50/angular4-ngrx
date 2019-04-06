import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {carsReducer} from './redux/cars.reducer';
import {CarsEffect} from './redux/cars.effect';
import {CarsService} from './cars.service';

import {AppComponent} from './app.component';
import {CarComponent} from './car/car.component';
import {CarsFormComponent} from './cars-form/cars-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsFormComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    EffectsModule.forRoot([CarsEffect]),
    StoreModule.forRoot({carPage: carsReducer})
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
