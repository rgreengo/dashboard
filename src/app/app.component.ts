import { Component } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Dashboard';
  componentTitulo = '';

  constructor(private router: Router,
    private route: ActivatedRoute) {
  }

  onActivate(componentRef: any){
    console.log(componentRef);
    this.componentTitulo = componentRef.titulo ?? '';
  }
}
