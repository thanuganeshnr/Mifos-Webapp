import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnassignViewComponent } from './unassign-view.component';

describe('UnassignViewComponent', () => {
  let component: UnassignViewComponent;
  let fixture: ComponentFixture<UnassignViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnassignViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnassignViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
