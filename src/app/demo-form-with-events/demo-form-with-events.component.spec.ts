import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormSkuWithEventsComponent } from './demo-form-sku-with-events.component';

describe('DemoFormSkuWithEventsComponent', () => {
  let component: DemoFormSkuWithEventsComponent;
  let fixture: ComponentFixture<DemoFormSkuWithEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoFormSkuWithEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFormSkuWithEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
