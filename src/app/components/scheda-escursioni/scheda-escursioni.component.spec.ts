import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedaEscursioniComponent } from './scheda-escursioni.component';

describe('SchedaEscursioniComponent', () => {
  let component: SchedaEscursioniComponent;
  let fixture: ComponentFixture<SchedaEscursioniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchedaEscursioniComponent]
    });
    fixture = TestBed.createComponent(SchedaEscursioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
