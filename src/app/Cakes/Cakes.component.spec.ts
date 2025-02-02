import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakesComponent } from './Cakes.component';

describe('ProductsComponent', () => {
  let component: CakesComponent;
  let fixture: ComponentFixture<CakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CakesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
