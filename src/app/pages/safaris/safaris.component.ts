import { Component,  OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Modal, Carousel } from 'flowbite';
import type { ModalOptions, ModalInterface, CarouselItem, CarouselOptions, CarouselInterface } from 'flowbite'

@Component({
  selector: 'app-safaris',
  templateUrl: './safaris.component.html',
  styleUrls: ['./safaris.component.css']
})
export class SafarisComponent implements OnInit, OnDestroy, AfterViewInit {

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  private modals = new Map<string, ModalInterface>();

  safarisWatamu = [
    {
      thumbnail: '',
      imgFolder: '',
      title: 'SAFARI STORICO',
      duration: '2 giorni e 1 notte',
      price: '',
      place: 'Gede + Tsavo Est',
      varName: 'safariHist',
      imgsArray: [],
      programs: [],
      included: [
        'Tutti i trasferimenti a bordo di fuoristrada con tetto panoramico apribile',
        "Biglietto d'ingresso alle rovine di Gede con guida specializzata (in italiano)",
        "Biglietto d'ingresso al parco Tsavo East",
        'Pernottamento in lodge/camp con pensione completa (escluse le bevande)',
        'Acqua minerale durante tutti i game drive',
        "Autista e/o guida (in italiano) con regolare licenza abilitati per safari (in periodo di alta stagione l’autista e la guida possono essere la stessa persona)"
      ],
      excluded: [
        'Bevande durante i pasti nei campi/lodge',
        'Mance ed eventuali extra personali'
      ]
    }
  ]

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    //this.enableAllModalAllCarousel();
  }

  ngOnDestroy(): void {
    //this.closeAllModal();
  }

  closeAllModal(): void{
    this.safarisWatamu.forEach( (modal) => {
      this.closeModal(modal.varName + 'Modal')
    })
  }

  openModal(modalName: string): void{
    var modal = this.modals.get(modalName)
    if (modal){
      modal.show()
    }
  }

  closeModal(modalName: string): void{
    var modal = this.modals.get(modalName)
    if (modal){
      modal.hide()
    }
  }

}
