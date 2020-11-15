import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonBlockComponent } from './season-block.component';

describe('SeasonBlockComponent', () => {
  let component: SeasonBlockComponent;
  let fixture: ComponentFixture<SeasonBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeasonBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
