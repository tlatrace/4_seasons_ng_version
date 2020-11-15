import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonTitleComponent } from './season-title.component';

describe('SeasonTitleComponent', () => {
  let component: SeasonTitleComponent;
  let fixture: ComponentFixture<SeasonTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeasonTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
