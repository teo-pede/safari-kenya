import { Component } from '@angular/core';

@Component({
  selector: 'app-safaris',
  templateUrl: './safaris.component.html',
  styleUrls: ['./safaris.component.css']
})
export class SafarisComponent {
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
}
