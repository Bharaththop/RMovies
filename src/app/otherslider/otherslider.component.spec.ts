import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersliderComponent } from './otherslider.component';

describe('OthersliderComponent', () => {
  let component: OthersliderComponent;
  let fixture: ComponentFixture<OthersliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OthersliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OthersliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
