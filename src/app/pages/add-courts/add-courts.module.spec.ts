import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourtsComponent } from './add-courts.component';

describe('CourtComponent', () => {
  let component: AddCourtsComponent;
  let fixture: ComponentFixture<AddCourtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCourtsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AddCourtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
