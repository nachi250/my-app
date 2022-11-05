import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CicloProductoComponent } from './ciclo-producto.component';

describe('CicloProductoComponent', () => {
  let component: CicloProductoComponent;
  let fixture: ComponentFixture<CicloProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CicloProductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CicloProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
