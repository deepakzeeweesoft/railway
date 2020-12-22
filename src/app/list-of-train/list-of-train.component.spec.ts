import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfTrainComponent } from './list-of-train.component';

describe('ListOfTrainComponent', () => {
  let component: ListOfTrainComponent;
  let fixture: ComponentFixture<ListOfTrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfTrainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfTrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
