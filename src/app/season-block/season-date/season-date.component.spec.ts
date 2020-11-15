import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonDateComponent } from './season-date.component';

describe('SeasonDateComponent', () => {
  let component: SeasonDateComponent;
  let fixture: ComponentFixture<SeasonDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeasonDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
