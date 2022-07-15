import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglemediaComponent } from './singlemedia.component';

describe('SinglemediaComponent', () => {
  let component: SinglemediaComponent;
  let fixture: ComponentFixture<SinglemediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglemediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglemediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
