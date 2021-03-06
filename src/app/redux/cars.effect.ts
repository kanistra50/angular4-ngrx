import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import {Car} from '../car.model';
import {CAR_ACTION} from './car.action';
import {CarsService} from '../cars.service';

@Injectable()
export class CarsEffect {

  constructor(private actions$: Actions, private carsService: CarsService) {}

  @Effect() loadCars = this.actions$.ofType(CAR_ACTION.ADD_CAR)
    .switchMap(() => this.carsService.preloadCars())
    .mergeMap((cars: Car[]) => [{type: CAR_ACTION.LOAD_CARS, payload: cars}]);
}
