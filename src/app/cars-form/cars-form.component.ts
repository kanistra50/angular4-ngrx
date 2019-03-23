import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Car} from '../car.model';
import * as moment from 'moment';

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.css']
})
export class CarsFormComponent implements OnInit {
  carName: string = '';
  carModel: string = '';
  id: number = 2;
  @Output() addCar = new EventEmitter<Car>();

  constructor() { }

  ngOnInit() {
  }

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

    this.addCar.emit(car);

    this.carName = '';
    this.carModel = '';
  }

  onLoad(){
    // TODO;
  }
}
