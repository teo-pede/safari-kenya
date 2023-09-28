import { Component } from '@angular/core';

@Component({
  selector: 'app-scheda-escursioni',
  templateUrl: './scheda-escursioni.component.html',
  styleUrls: ['./scheda-escursioni.component.css']
})
export class SchedaEscursioniComponent {
  fighe = [{
    title: "Fake Sardegna",
    sub_title: "Non venirci",
    position: "Maldive del salento",
    price: "60€",
  }]
}
