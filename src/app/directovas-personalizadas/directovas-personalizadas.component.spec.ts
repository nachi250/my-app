import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectovasPersonalizadasComponent } from './directovas-personalizadas.component';

describe('DirectovasPersonalizadasComponent', () => {
  let component: DirectovasPersonalizadasComponent;
  let fixture: ComponentFixture<DirectovasPersonalizadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectovasPersonalizadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectovasPersonalizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
