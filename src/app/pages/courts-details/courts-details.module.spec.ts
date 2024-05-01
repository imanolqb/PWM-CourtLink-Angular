import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtsDetailsComponent } from './courts-details.component';

describe('CourtsComponent', () => {
  let component: CourtsDetailsComponent;
  let fixture: ComponentFixture<CourtsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourtsDetailsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CourtsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
