import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDomainSearchComponent } from './home-domain-search.component';

describe('HomeDomainSearchComponent', () => {
  let component: HomeDomainSearchComponent;
  let fixture: ComponentFixture<HomeDomainSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeDomainSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDomainSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
