import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import * as moment from 'moment';
import {AppState} from '../redux/app.state';
import {Car} from '../car.model';
import {CarsService} from '../cars.service';

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.css']
})
export class CarsFormComponent {
  carName = '';
  carModel = '';
  // id = 2;

  constructor(private carsService: CarsService) { }

  onAdd() {
    // this.id = ++this.id;

    if (this.carModel === '' || this.carName === '') {
      return;
    }

    const date = moment().format('DD.MM.YY')
    const car = new Car(this.carName, date, this.carModel);

    // this.store.dispatch(new AddCar(car));
    this.carsService.addCar(car);

    this.carName = '';
    this.carModel = '';
  }

  onLoad() {
    this.carsService.loadCars();
  }
}
