import {Component, OnInit} from '@angular/core';
import {Cars} from './car.model';
import {Store} from '@ngrx/store';
import {AppState, CAR_PAGE} from './redux/app.state';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public carState: Observable<Cars>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.carState = this.store.select(CAR_PAGE);
  }
}
