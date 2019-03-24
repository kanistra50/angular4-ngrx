import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import * as moment from 'moment';
import {AppState} from '../redux/app.state';
import {Car} from '../car.model';
import {AddCar} from '../redux/car.action';

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.css']
})
export class CarsFormComponent {
  carName: string = '';
  carModel: string = '';
  id: number = 2;

  constructor(private store: Store<AppState>) { }

  onAdd() {
    this.id = ++this.id;

    if (this.carModel === '' || this.carName === '') return
    const car = new Car(
      this.carName,
      moment().format('DD.MM.YY'),
      this.carModel,
      false,
      this.id
    );

    this.store.dispatch(new AddCar(car));

    this.carName = '';
    this.carModel = '';
  }

  onLoad(){
    // TODO;
  }
}
