import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferClientsComponent } from './transfer-clients.component';

describe('TransferClientsComponent', () => {
  let component: TransferClientsComponent;
  let fixture: ComponentFixture<TransferClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
