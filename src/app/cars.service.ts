import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Store} from '@ngrx/store';
import {AppState} from './redux/app.state';
import {LoadCars} from './redux/car.action';
import {Car} from './car.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CarsService {
  static BASE_URL = 'http://localhost:3000/';
  constructor(private http: Http, private store: Store<AppState>) {}

  loadCars(): void {
    this.http.get(CarsService.BASE_URL + 'cars')
      .map((response: Response) => response.json())
      .toPromise()
      .then((cars: Car[]) => {
        this.store.dispatch(new LoadCars(cars));
      });
  }
}
