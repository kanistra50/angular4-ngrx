import {Component, Input} from '@angular/core';
import {Car} from '../car.model';

// @ts-ignore
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  @Input() car: Car;


}
