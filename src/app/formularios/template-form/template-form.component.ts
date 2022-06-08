import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario : any = {
    nome: "teste",
    email: "teste@teste.com",
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: Form){
    console.log(form);
    console.log(this.usuario);
  }
}
