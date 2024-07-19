import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyShowerComponent } from './Baby Shower.component';

describe('BabyShowerComponent', () => {
  let component: BabyShowerComponent;
  let fixture: ComponentFixture<BabyShowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BabyShowerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BabyShowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
