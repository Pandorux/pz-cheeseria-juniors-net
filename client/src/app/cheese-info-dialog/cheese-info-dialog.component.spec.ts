import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheeseInfoDialogComponent } from './cheese-info-dialog.component';

describe('CheeseInfoDialogComponent', () => {
  let component: CheeseInfoDialogComponent;
  let fixture: ComponentFixture<CheeseInfoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheeseInfoDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheeseInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
