import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResellerHostingComponent } from './reseller-hosting.component';

describe('ResellerHostingComponent', () => {
  let component: ResellerHostingComponent;
  let fixture: ComponentFixture<ResellerHostingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResellerHostingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResellerHostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
