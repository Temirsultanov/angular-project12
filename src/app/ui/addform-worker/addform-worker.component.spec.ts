import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddformWorkerComponent } from './addform-worker.component';

describe('AddformWorkerComponent', () => {
  let component: AddformWorkerComponent;
  let fixture: ComponentFixture<AddformWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddformWorkerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddformWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
