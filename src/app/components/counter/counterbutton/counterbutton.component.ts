import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement, reset, changechannelname } from 'src/app/shared/store/counter/counter.actions';

@Component({
  selector: 'app-counterbutton',
  templateUrl: './counterbutton.component.html',
  styleUrls: ['./counterbutton.component.css']
})
export class CounterbuttonComponent {

  constructor(private store : Store<{counter : number}>) {}

  OnIncrement() {
    this.store.dispatch(increment());
  }

  OnDecrement() {
    this.store.dispatch(decrement());
  }
  OnReset() {
    this.store.dispatch(reset());
  }

  OnRename() {
    this.store.dispatch(changechannelname({channel : 'Welcome to Nihir Techies!'}));
  }
}
