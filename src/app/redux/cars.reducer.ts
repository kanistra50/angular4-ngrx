import {Car} from '../car.model';
import {Action} from '@ngrx/store';
import {AddCar, CAR_ACTION} from './car.action';

const initialState = {
  cars: [
    new Car('Ford', '12.12.12', 'Focus', false, 1),
    new Car('Audi', '09.08.11', 'A4', false, 2)
  ]
}

export function carsReducer(state = initialState, action: AddCar) {
  switch (action.type) {
    case CAR_ACTION.ADD_CAR:
      return {
        ...state,
        cars: [...state.cars, action.payload]
      }
    default: return state;
  }
}
