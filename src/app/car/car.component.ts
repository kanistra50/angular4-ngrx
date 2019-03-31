import {Component, Input} from '@angular/core';
import {Car} from '../car.model';
import {Store} from '@ngrx/store';
import {AppState} from '../redux/app.state';
import {DeleteCar, UpdateCar} from '../redux/car.action';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  @Input() car: Car;
  deleteCar;

  constructor(private store: Store<AppState>) {}

  onDelete() {
    this.store.dispatch(new DeleteCar(this.car));
  }

  onBuy() {
    this.store.dispatch(new UpdateCar(this.car));
    // this.car.isSold = true;
  }
}
