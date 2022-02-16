import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluckOperatorComponent } from './pluck-operator.component';

describe('PluckOperatorComponent', () => {
  let component: PluckOperatorComponent;
  let fixture: ComponentFixture<PluckOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PluckOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PluckOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
