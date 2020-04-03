import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JlgLoan1Component } from './jlg-loan1.component';

describe('JlgLoan1Component', () => {
  let component: JlgLoan1Component;
  let fixture: ComponentFixture<JlgLoan1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JlgLoan1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JlgLoan1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
