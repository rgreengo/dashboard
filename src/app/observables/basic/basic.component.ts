import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs'

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  subscription1 : Subscription;

  constructor() { }

  ngOnInit(): void {
    const myFirstObservable$ = new Observable(
      (observer: Observer<number>) => {
        observer.next(1);
        observer.next(2);
        observer.next(3);
        observer.complete();
      }
    );

    this.subscription1 = myFirstObservable$.subscribe((a) => console.log(a));
  }

  ngOnDestroy(): void {
    this.subscription1.unsubscribe();
  }
}
