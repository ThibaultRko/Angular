import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoSubscriptionFormsComponent } from './exo-subscription-forms.component';

describe('ExoSubscriptionFormsComponent', () => {
  let component: ExoSubscriptionFormsComponent;
  let fixture: ComponentFixture<ExoSubscriptionFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExoSubscriptionFormsComponent]
    });
    fixture = TestBed.createComponent(ExoSubscriptionFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
