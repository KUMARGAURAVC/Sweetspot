import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayCakesComponent } from './Birthday Cakes.component';

describe('BirthdayCakesComponent', () => {
  let component: BirthdayCakesComponent;
  let fixture: ComponentFixture<BirthdayCakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BirthdayCakesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BirthdayCakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
