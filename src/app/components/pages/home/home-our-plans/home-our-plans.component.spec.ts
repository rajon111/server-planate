import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOurPlansComponent } from './home-our-plans.component';

describe('HomeOurPlansComponent', () => {
  let component: HomeOurPlansComponent;
  let fixture: ComponentFixture<HomeOurPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeOurPlansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeOurPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
