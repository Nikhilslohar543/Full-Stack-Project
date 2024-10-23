import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetExpencesComponent } from './get-expences.component';

describe('GetExpencesComponent', () => {
  let component: GetExpencesComponent;
  let fixture: ComponentFixture<GetExpencesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetExpencesComponent]
    });
    fixture = TestBed.createComponent(GetExpencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
