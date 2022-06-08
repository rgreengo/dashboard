import { Injectable } from '@angular/core';
import { Curso } from './cursos.model';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  cursos = [
    { id: 1,  cursoName: "Angular", useCase: "frontend" },
    { id: 2,  cursoName: "Java", useCase: "backend" },
    { id: 3,  cursoName: "Java3", useCase: "backend" },
    { id: 4,  cursoName: "Java5", useCase: "backend" },
    { id: 5,  cursoName: "Java7", useCase: "backend" },
    { id: 61,  cursoName: "Java9", useCase: "backend" },
    { id: 62,  cursoName: "C#", useCase: "backend" },
    { id: 63,  cursoName: "C# - 2.0", useCase: "backend" },
    { id: 64,  cursoName: "C# - .NetCore", useCase: "backend" },
    { id: 65,  cursoName: "VueJs", useCase: "frontend" },
  ];

  constructor() { }

  getCursos() : Curso[]{
    return this.cursos;
  }

  getCurso(id: number) : any
  {
    for (let i = 0; i < this.cursos.length; i++){
      let curso = this.cursos[i];
      if (curso.id == id){
        return curso;
      }
    }
  }
}
