import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightersComponent } from './highlighters.component';

describe('HighlightersComponent', () => {
  let component: HighlightersComponent;
  let fixture: ComponentFixture<HighlightersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighlightersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HighlightersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
