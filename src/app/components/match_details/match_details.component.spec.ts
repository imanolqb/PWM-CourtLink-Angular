import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Match_detailsComponent } from './match_details.component';

describe('MatchDetailsComponent', () => {
  let component: Match_detailsComponent;
  let fixture: ComponentFixture<Match_detailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Match_detailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Match_detailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
