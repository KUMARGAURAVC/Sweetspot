import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumCakesComponent } from './Premium Cakes.component';

describe('PremiumCakesComponent', () => {
  let component: PremiumCakesComponent;
  let fixture: ComponentFixture<PremiumCakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PremiumCakesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PremiumCakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
