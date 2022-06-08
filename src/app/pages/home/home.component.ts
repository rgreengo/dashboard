import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, timer } from 'rxjs';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faCoffee = faCoffee;
  public MY_PREC: number = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {

    const ticker = timer(0, 1000);
    ticker.subscribe((value) => {
      this.MY_PREC += value * 29;
    });

  }

  goFiltros(): void{
    this.router.navigateByUrl('filtros');
  }
}
