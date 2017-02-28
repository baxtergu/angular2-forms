import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormSkuWithCustomValidationsComponent } from './demo-form-sku-with-custom-validations.component';

describe('DemoFormSkuWithCustomValidationsComponent', () => {
  let component: DemoFormSkuWithCustomValidationsComponent;
  let fixture: ComponentFixture<DemoFormSkuWithCustomValidationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoFormSkuWithCustomValidationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFormSkuWithCustomValidationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
