import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemcommitteeComponent } from './problemcommittee.component';

describe('ProblemcommitteeComponent', () => {
  let component: ProblemcommitteeComponent;
  let fixture: ComponentFixture<ProblemcommitteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemcommitteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemcommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
