import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-cursos-detalhe',
  templateUrl: './cursos-detalhe.component.html',
  styleUrls: ['./cursos-detalhe.component.css']
})
export class CursosDetalheComponent implements OnInit {

  id: number = 0;
  curso: any;
  inscription: Subscription;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private cursosService: CursosService) {
      this.inscription = new Subscription();
    }

  ngOnInit(): void {
    this.inscription = this.route.params.subscribe(
      (params:any) => {
        this.id = params['id'];
        this.curso = this.cursosService.getCurso(this.id);
        if(this.curso == null) {
          this.router.navigate(['erro404']);
        }
      }
    );
  }

}
