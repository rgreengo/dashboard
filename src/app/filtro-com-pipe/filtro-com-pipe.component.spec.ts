import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroComPipeComponent } from './filtro-com-pipe.component';

describe('FiltroComPipeComponent', () => {
  let component: FiltroComPipeComponent;
  let fixture: ComponentFixture<FiltroComPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroComPipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroComPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
