import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AddCar, CAR_ACTION} from './car.action';
import {Car} from '../car.model';
import {CarsService} from '../cars.service';
import {switchMap} from 'rxjs/internal/operators/switchMap';
import {mergeMap} from 'rxjs/internal/operators/mergeMap';


@Injectable()
export class CarsEffect {

  constructor(private actions$: Actions, private carsService: CarsService) {}

  // @Effect() loadCars = this.actions$.pipe(
  //   ofType(CAR_ACTION.ADD_CAR),
  //   switchMap((action: AddCar) => this.carsService.preloadCars()),
  //   mergeMap((cars: Car[]) => [
  //     {type: CAR_ACTION.ADD_CAR, payload: cars}
  //   ]))

}
