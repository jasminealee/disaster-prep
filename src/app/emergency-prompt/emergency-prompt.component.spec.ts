import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyPromptComponent } from './emergency-prompt.component';

describe('EmergencyPromptComponent', () => {
  let component: EmergencyPromptComponent;
  let fixture: ComponentFixture<EmergencyPromptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmergencyPromptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencyPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
