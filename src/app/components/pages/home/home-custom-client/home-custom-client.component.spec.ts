import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCustomClientComponent } from './home-custom-client.component';

describe('HomeCustomClientComponent', () => {
  let component: HomeCustomClientComponent;
  let fixture: ComponentFixture<HomeCustomClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCustomClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCustomClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
