import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Personal_infoComponent } from './personal_info.component';

describe('PersonalInfoComponent', () => {
  let component: Personal_infoComponent;
  let fixture: ComponentFixture<Personal_infoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Personal_infoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Personal_infoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
