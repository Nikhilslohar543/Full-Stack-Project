import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteexpenceComponent } from './deleteexpence.component';

describe('DeleteexpenceComponent', () => {
  let component: DeleteexpenceComponent;
  let fixture: ComponentFixture<DeleteexpenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteexpenceComponent]
    });
    fixture = TestBed.createComponent(DeleteexpenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
