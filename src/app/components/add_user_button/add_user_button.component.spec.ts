import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Add_user_buttonComponent } from './add_user_button.component';

describe('AddUserComponent', () => {
  let component: Add_user_buttonComponent;
  let fixture: ComponentFixture<Add_user_buttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Add_user_buttonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Add_user_buttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
