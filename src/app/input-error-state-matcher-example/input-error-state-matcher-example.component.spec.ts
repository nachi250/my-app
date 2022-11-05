import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyErrorStateMatcher } from './input-error-state-matcher-example.component';

describe('MyErrorStateMatcher', () => {
  let component: MyErrorStateMatcher;
  let fixture: ComponentFixture<MyErrorStateMatcher>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyErrorStateMatcher ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyErrorStateMatcher);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
