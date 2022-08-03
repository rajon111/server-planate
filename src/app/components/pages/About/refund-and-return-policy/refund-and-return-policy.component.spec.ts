import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundAndReturnPolicyComponent } from './refund-and-return-policy.component';

describe('RefundAndReturnPolicyComponent', () => {
  let component: RefundAndReturnPolicyComponent;
  let fixture: ComponentFixture<RefundAndReturnPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefundAndReturnPolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundAndReturnPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
