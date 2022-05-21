import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovileMenuComponent } from './movile-menu.component';

describe('MovileMenuComponent', () => {
  let component: MovileMenuComponent;
  let fixture: ComponentFixture<MovileMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovileMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovileMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
