import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTrainComponent } from './login-train.component';

describe('LoginTrainComponent', () => {
  let component: LoginTrainComponent;
  let fixture: ComponentFixture<LoginTrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginTrainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginTrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
