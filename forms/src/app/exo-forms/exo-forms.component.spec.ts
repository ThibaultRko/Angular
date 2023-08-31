import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoFormsComponent } from './exo-forms.component';

describe('ExoFormsComponent', () => {
  let component: ExoFormsComponent;
  let fixture: ComponentFixture<ExoFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExoFormsComponent]
    });
    fixture = TestBed.createComponent(ExoFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
