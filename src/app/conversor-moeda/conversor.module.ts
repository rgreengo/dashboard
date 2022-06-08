import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ConversorService } from './conversor.service';
import { ConversorComponent } from './conversor/conversor.component';
import { ConversorRoutingModule } from './conversor.routing.module';
import { MoedaService } from './moeda.service';

@NgModule({
  declarations: [
    ConversorComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ConversorRoutingModule,
  ],
  providers: [
    ConversorService,
    MoedaService,
  ]
})
export class ConversorModule { }
