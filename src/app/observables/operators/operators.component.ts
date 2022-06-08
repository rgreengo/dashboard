import { Component, OnInit } from '@angular/core';
import { from, map, delay } from 'rxjs';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {

  resultadoMap: string = "";

  constructor() { }

  ngOnInit(): void {
    this.map();
  }

  map(): void {
    from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).pipe(
      map(i => this.resultadoMap += "Valor " + i * 10 + " "),
      delay(1000)
    ).subscribe(i => console.log(i));
  }
}
