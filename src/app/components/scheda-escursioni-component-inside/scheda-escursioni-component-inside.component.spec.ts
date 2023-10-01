import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedaEscursioniComponentInsideComponent } from './scheda-escursioni-component-inside.component';

describe('SchedaEscursioniComponentInsideComponent', () => {
  let component: SchedaEscursioniComponentInsideComponent;
  let fixture: ComponentFixture<SchedaEscursioniComponentInsideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchedaEscursioniComponentInsideComponent]
    });
    fixture = TestBed.createComponent(SchedaEscursioniComponentInsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
