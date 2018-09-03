import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderlrComponent } from './headerlr.component';

describe('HeaderlrComponent', () => {
  let component: HeaderlrComponent;
  let fixture: ComponentFixture<HeaderlrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderlrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderlrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
