import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCloseAccComponent } from './view-close-acc.component';

describe('ViewCloseAccComponent', () => {
  let component: ViewCloseAccComponent;
  let fixture: ComponentFixture<ViewCloseAccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCloseAccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCloseAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
