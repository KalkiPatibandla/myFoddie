import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUsercomponentComponent } from './new-usercomponent.component';

describe('NewUsercomponentComponent', () => {
  let component: NewUsercomponentComponent;
  let fixture: ComponentFixture<NewUsercomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewUsercomponentComponent]
    });
    fixture = TestBed.createComponent(NewUsercomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
