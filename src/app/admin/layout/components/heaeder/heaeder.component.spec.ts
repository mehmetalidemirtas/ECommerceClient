import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaederComponent } from './heaeder.component';

describe('HeaederComponent', () => {
  let component: HeaederComponent;
  let fixture: ComponentFixture<HeaederComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaederComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaederComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
