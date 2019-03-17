import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'
import {FormsModule} from '@angular/forms'

import {AppComponent} from './app.component';
import { CarsFormComponent } from './cars-form/cars-form.component'

@NgModule({
  declarations: [
    AppComponent,
    CarsFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // StoreModule.forRoot({carPage: carsReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
