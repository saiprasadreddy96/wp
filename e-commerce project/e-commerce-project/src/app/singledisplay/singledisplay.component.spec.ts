import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingledisplayComponent } from './singledisplay.component';

describe('SingledisplayComponent', () => {
  let component: SingledisplayComponent;
  let fixture: ComponentFixture<SingledisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingledisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingledisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
