import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Add_match_buttonComponent } from './add_match_button.component';

describe('AddMatchComponent', () => {
  let component: Add_match_buttonComponent;
  let fixture: ComponentFixture<Add_match_buttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Add_match_buttonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Add_match_buttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
