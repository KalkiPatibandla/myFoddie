import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDetailsComponentComponent } from './customer-details-component.component';

describe('CustomerDetailsComponentComponent', () => {
  let component: CustomerDetailsComponentComponent;
  let fixture: ComponentFixture<CustomerDetailsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerDetailsComponentComponent]
    });
    fixture = TestBed.createComponent(CustomerDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
