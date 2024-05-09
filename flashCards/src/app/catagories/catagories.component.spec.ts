import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatagoriesComponent } from './catagories.component';

describe('CatagoriesComponent', () => {
  let component: CatagoriesComponent;
  let fixture: ComponentFixture<CatagoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatagoriesComponent]
    });
    fixture = TestBed.createComponent(CatagoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
