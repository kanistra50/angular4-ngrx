import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Cars} from './car.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public carState: Observable<Cars>

  // constructor(private store: Store<AppState>) {}

  ngOnInit() {
    // this.carState = this.store.select('carPage')
  }
}
