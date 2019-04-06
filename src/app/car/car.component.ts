import {Component, Input} from '@angular/core';
import {Car} from '../car.model';
import {Store} from '@ngrx/store';
import {AppState} from '../redux/app.state';
import {DeleteCar, UpdateCar} from '../redux/car.action';
import {CarsService} from '../cars.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  @Input() car: Car;
  deleteCar;

  constructor(private carsService: CarsService) {}

  onDelete() {
    this.carsService.deleteCar(this.car);
    // this.store.dispatch(new DeleteCar(this.car));
  }

  onBuy() {
    // this.store.dispatch(new UpdateCar(this.car));
    this.car.isSold = true;
    this.carsService.updateCar(this.car);
  }
}
