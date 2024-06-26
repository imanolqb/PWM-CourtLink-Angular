import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvpsComponent } from './mvps.component';

describe('HomeComponent', () => {
  let component: MvpsComponent;
  let fixture: ComponentFixture<MvpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MvpsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MvpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
