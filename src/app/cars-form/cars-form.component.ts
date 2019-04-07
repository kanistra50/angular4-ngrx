import {Component} from '@angular/core';
import * as moment from 'moment';
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

  constructor(private carsService: CarsService) { }

  onAdd() {
    if (this.carModel === '' || this.carName === '') {
      return;
    }

    const date = moment().format('DD.MM.YY')
    const car = new Car(this.carName, date, this.carModel);
    this.carsService.addCar(car);

    this.carName = '';
    this.carModel = '';
  }

  onLoad() {
    this.carsService.loadCars();
  }
}
