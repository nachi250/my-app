import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivasPersonalizadasComponent } from './directivas-personalizadas.component';

describe('DirectovasPersonalizadasComponent', () => {
  let component: DirectivasPersonalizadasComponent;
  let fixture: ComponentFixture<DirectivasPersonalizadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivasPersonalizadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivasPersonalizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
