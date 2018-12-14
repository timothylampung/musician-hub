import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Progress.DialogComponent } from './progress.dialog.component';

describe('Progress.DialogComponent', () => {
  let component: Progress.DialogComponent;
  let fixture: ComponentFixture<Progress.DialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Progress.DialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Progress.DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
