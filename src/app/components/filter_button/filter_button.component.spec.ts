import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Filter_buttonComponent } from './filter_button.component';

describe('FilterButtonComponent', () => {
  let component: Filter_buttonComponent;
  let fixture: ComponentFixture<Filter_buttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Filter_buttonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Filter_buttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
