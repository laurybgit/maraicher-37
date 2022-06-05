import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellingPointsComponent } from './selling-points.component';

describe('SellingPointsComponent', () => {
  let component: SellingPointsComponent;
  let fixture: ComponentFixture<SellingPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellingPointsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellingPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
