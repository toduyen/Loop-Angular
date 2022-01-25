import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompRenderComponent } from './comp-render.component';

describe('CompRenderComponent', () => {
  let component: CompRenderComponent;
  let fixture: ComponentFixture<CompRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompRenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
