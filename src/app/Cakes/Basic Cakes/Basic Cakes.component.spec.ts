import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCakesComponent } from './Basic Cakes.component';

describe('BasicCakesComponent', () => {
  let component: BasicCakesComponent;
  let fixture: ComponentFixture<BasicCakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicCakesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicCakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
