import {Component} from '@angular/core';
import {Car} from './car.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  public cars: Car[] = [
    new Car('Ford', '12.12.12', 'Focus', false, 1),
    new Car('Audi', '09.08.11', 'A4', false, 2)
  ];

  onAdd(car) {
    this.cars.push(car);
  }

  onDelete(car: Car) {
    this.cars = this.cars.filter(c => c.id !== car.id);
  }
}
