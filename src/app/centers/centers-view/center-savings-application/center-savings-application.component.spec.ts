import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterSavingsApplicationComponent } from './center-savings-application.component';

describe('CenterSavingsApplicationComponent', () => {
  let component: CenterSavingsApplicationComponent;
  let fixture: ComponentFixture<CenterSavingsApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterSavingsApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterSavingsApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
