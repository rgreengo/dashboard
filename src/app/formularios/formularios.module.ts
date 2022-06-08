import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FormulariosRoutingModule } from './formularios.routing.module';
import { Formulario1Component } from './formulario1/formulario1.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { DataFormComponent } from './data-form/data-form.component';
import { ValidationFormComponent } from './validation-form/validation-form.component';


@NgModule({
  declarations: [
    Formulario1Component,
    TemplateFormComponent,
    DataFormComponent,
    ValidationFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FormulariosRoutingModule,
  ],
  exports: [
  ]
})
export class FormulariosModule { }
