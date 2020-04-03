import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrpSaveAppComponent } from './grp-save-app.component';

describe('GrpSaveAppComponent', () => {
  let component: GrpSaveAppComponent;
  let fixture: ComponentFixture<GrpSaveAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrpSaveAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrpSaveAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
