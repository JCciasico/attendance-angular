import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockDigComponent } from './clock-dig.component';

describe('ClockDigComponent', () => {
  let component: ClockDigComponent;
  let fixture: ComponentFixture<ClockDigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClockDigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClockDigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
