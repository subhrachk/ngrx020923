import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { customChanges } from 'src/app/shared/store/counter/counter.actions';
import { CounterModel } from 'src/app/shared/store/counter/counter.model';

@Component({
  selector: 'app-customcounter',
  templateUrl: './customcounter.component.html',
  styleUrls: ['./customcounter.component.css']
})
export class CustomcounterComponent {

  constructor(private store : Store<{counter : CounterModel}>) {}

  changevalue : number = 0;
  changetype : string = 'inc';

  customChange() {
    this.store.dispatch(customChanges({counterchange : { value : this.changevalue , type :  this.changetype}}));
  }

}
