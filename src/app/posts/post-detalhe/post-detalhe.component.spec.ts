import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetalheComponent } from './post-detalhe.component';

describe('PostDetalheComponent', () => {
  let component: PostDetalheComponent;
  let fixture: ComponentFixture<PostDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostDetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
