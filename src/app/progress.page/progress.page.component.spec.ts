import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Progress.PageComponent } from './progress.page.component';

describe('Progress.PageComponent', () => {
  let component: Progress.PageComponent;
  let fixture: ComponentFixture<Progress.PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Progress.PageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Progress.PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
