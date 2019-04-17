import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioItemsComponent } from './scenario-items.component';

describe('ScenarioItemsComponent', () => {
  let component: ScenarioItemsComponent;
  let fixture: ComponentFixture<ScenarioItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenarioItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenarioItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
