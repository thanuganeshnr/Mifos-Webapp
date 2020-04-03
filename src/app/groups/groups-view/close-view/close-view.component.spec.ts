import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseViewComponent } from './close-view.component';

describe('CloseViewComponent', () => {
  let component: CloseViewComponent;
  let fixture: ComponentFixture<CloseViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloseViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
