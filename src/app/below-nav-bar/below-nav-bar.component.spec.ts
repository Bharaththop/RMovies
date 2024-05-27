import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BelowNavBarComponent } from './below-nav-bar.component';

describe('BelowNavBarComponent', () => {
  let component: BelowNavBarComponent;
  let fixture: ComponentFixture<BelowNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BelowNavBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BelowNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
