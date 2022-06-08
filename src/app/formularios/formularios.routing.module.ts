import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { Formulario1Component } from './formulario1/formulario1.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { DataFormComponent } from './data-form/data-form.component';
import { ValidationFormComponent } from './validation-form/validation-form.component';

const cursosRoutes: Routes = [
  { path: 'formulario1', component: Formulario1Component },
  { path: 'data-form', component: DataFormComponent },
  { path: 'template-form', component: TemplateFormComponent },
  { path: 'validation-form', component: ValidationFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(cursosRoutes)],
  exports: [RouterModule],
  declarations: [
  ]
})
export class FormulariosRoutingModule { }
