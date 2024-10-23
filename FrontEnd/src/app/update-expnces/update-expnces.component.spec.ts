import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateExpncesComponent } from './update-expnces.component';

describe('UpdateExpncesComponent', () => {
  let component: UpdateExpncesComponent;
  let fixture: ComponentFixture<UpdateExpncesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateExpncesComponent]
    });
    fixture = TestBed.createComponent(UpdateExpncesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
