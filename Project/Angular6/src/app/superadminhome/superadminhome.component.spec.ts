import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminhomeComponent } from './superadminhome.component';

describe('SuperadminhomeComponent', () => {
  let component: SuperadminhomeComponent;
  let fixture: ComponentFixture<SuperadminhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperadminhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperadminhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
