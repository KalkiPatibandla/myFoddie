import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyComponentComponent } from './verify-component.component';

describe('VerifyComponentComponent', () => {
  let component: VerifyComponentComponent;
  let fixture: ComponentFixture<VerifyComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerifyComponentComponent]
    });
    fixture = TestBed.createComponent(VerifyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
