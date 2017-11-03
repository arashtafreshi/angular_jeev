import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMainTopComponent } from './home-main-top.component';

describe('HomeMainTopComponent', () => {
  let component: HomeMainTopComponent;
  let fixture: ComponentFixture<HomeMainTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMainTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMainTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
