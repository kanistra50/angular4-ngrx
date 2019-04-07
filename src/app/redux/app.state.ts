import {Car} from '../car.model';

export const CAR_PAGE = 'carPage';

export interface AppState {
  carPage: {
    cars: Car[]
  };
}
