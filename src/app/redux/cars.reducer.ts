import {CAR_ACTION, CarsAction} from './car.action';

const initialState = {
  cars: []
}

export function carsReducer(state = initialState, action: CarsAction) {
  switch (action.type) {

    case CAR_ACTION.ADD_CAR:
      return {
        ...state,
        cars: [...state.cars, action.payload]
      };

    case CAR_ACTION.DELETE_CAR:
      return {
        ...state,
        cars: [...state.cars.filter(c => c.id !== action.payload.id)]
      };

    case CAR_ACTION.UPDATE_CAR:
      const index = state.cars.findIndex((c) => c.id === action.payload.id);
      state.cars[index].isSold = true;
      return {
        ...state,
        cars: [...state.cars]
      };

    case CAR_ACTION.LOAD_CARS:
      return {
        ...state,
        cars: [...action.payload]
      };

    default: return state;
  }
}
