import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSegmentsComponent } from './show-segments.component';

describe('ShowSegmentsComponent', () => {
  let component: ShowSegmentsComponent;
  let fixture: ComponentFixture<ShowSegmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSegmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSegmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
