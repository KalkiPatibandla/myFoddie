import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceOrderComponentComponent } from './place-order-component.component';

describe('PlaceOrderComponentComponent', () => {
  let component: PlaceOrderComponentComponent;
  let fixture: ComponentFixture<PlaceOrderComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlaceOrderComponentComponent]
    });
    fixture = TestBed.createComponent(PlaceOrderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
