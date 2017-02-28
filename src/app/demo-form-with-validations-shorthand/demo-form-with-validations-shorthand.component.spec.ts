import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormSkuWithValidationsShorthandComponent } from './demo-form-sku-with-validations-shorthand.component';

describe('DemoFormSkuWithValidationsShorthandComponent', () => {
  let component: DemoFormSkuWithValidationsShorthandComponent;
  let fixture: ComponentFixture<DemoFormSkuWithValidationsShorthandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoFormSkuWithValidationsShorthandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFormSkuWithValidationsShorthandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
