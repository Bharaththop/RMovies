import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NearlyfundedsliderComponent } from './nearlyfundedslider.component';

describe('NearlyfundedsliderComponent', () => {
  let component: NearlyfundedsliderComponent;
  let fixture: ComponentFixture<NearlyfundedsliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NearlyfundedsliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NearlyfundedsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
