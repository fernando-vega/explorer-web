import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideCustomersComponent } from './slide-customers.component';

describe('SlideCustomersComponent', () => {
  let component: SlideCustomersComponent;
  let fixture: ComponentFixture<SlideCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
