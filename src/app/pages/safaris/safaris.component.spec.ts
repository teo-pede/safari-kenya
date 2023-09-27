import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafarisComponent } from './safaris.component';

describe('SafarisComponent', () => {
  let component: SafarisComponent;
  let fixture: ComponentFixture<SafarisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SafarisComponent]
    });
    fixture = TestBed.createComponent(SafarisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
