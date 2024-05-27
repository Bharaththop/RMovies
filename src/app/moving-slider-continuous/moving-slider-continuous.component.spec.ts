import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingSliderContinuousComponent } from './moving-slider-continuous.component';

describe('MovingSliderContinuousComponent', () => {
  let component: MovingSliderContinuousComponent;
  let fixture: ComponentFixture<MovingSliderContinuousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovingSliderContinuousComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovingSliderContinuousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
