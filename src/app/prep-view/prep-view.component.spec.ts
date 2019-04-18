import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepViewComponent } from './prep-view.component';

describe('PrepViewComponent', () => {
  let component: PrepViewComponent;
  let fixture: ComponentFixture<PrepViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrepViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
