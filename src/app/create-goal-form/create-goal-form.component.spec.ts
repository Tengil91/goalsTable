import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGoalFormComponent } from './create-goal-form.component';

describe('CreateGoalFormComponent', () => {
  let component: CreateGoalFormComponent;
  let fixture: ComponentFixture<CreateGoalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGoalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGoalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
