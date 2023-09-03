import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getChannelName, getCounter } from 'src/app/shared/store/counter/counter.selector';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit{

  counter$ !: Observable<number>;
  chnahhelName$ !: Observable<string>;

  constructor(private store : Store<{counter : number}>) {}

  ngOnInit() {
    this.counter$ = this.store.select(getCounter);
    this.chnahhelName$ = this.store.select(getChannelName);
  }

}
