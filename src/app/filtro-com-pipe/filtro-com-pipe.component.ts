import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { CursosService } from '../cursos/cursos.service';
import { Curso } from './../cursos/cursos.model';

@Component({
  selector: 'app-filtro-com-pipe',
  templateUrl: './filtro-com-pipe.component.html',
  styleUrls: ['./filtro-com-pipe.component.css']
})
export class FiltroComPipeComponent implements OnInit {

  searchText: string = '';
  cursos : Curso[] = [];
  public MY_PREC: number = 0;
  textoSaving: string = "";
  processando: boolean = false;
  inscricao: Subscription;

  constructor(private cursosService: CursosService) { }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
  }

  onProcess() {
    this.processando = true;
    this.MY_PREC = 0;
    const source = interval(20);

    this.inscricao = source.subscribe(result => {
      this.MY_PREC += 1;
      if (this.MY_PREC >= 100) {
        this.processando = false;
        this.inscricao.unsubscribe();
      }
    });
  }

  obterCursos(): {id: number; cursoName: string; useCase: string; }[] {
    if (this.cursos.length === 0 || this.searchText.trim() === ''
    || this.searchText === undefined) {
      return this.cursos;
    }

    return this.cursos.filter((c) => {
      if(c.cursoName.toLowerCase().indexOf(this.searchText.toLowerCase()) >= 0) {
        return true;
      }
      return false;
    });
  }
}
