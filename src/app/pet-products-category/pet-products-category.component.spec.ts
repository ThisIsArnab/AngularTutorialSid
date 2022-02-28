import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetProductsCategoryComponent } from './pet-products-category.component';

describe('PetProductsCategoryComponent', () => {
  let component: PetProductsCategoryComponent;
  let fixture: ComponentFixture<PetProductsCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetProductsCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetProductsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
