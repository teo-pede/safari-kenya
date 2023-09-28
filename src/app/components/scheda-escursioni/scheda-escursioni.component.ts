import { Component, OnInit } from '@angular/core';
import { type ModalOptions, type ModalInterface, type CarouselItem, type CarouselOptions, type CarouselInterface, Modal, Carousel } from 'flowbite'

@Component({
  selector: 'app-scheda-escursioni',
  templateUrl: './scheda-escursioni.component.html',
  styleUrls: ['./scheda-escursioni.component.css']
})
export class SchedaEscursioniComponent implements OnInit {
  [key: string]: any;

  ngOnInit(): void {
    this.enableAllModal();
    this.enableAllCarousel();
  }

  enableAllModal(): void {
    const safarBlueElement = <HTMLElement>document.querySelector('#safari-blue-modal');

    const modalOptions: ModalOptions = {
      placement: 'top-center',
      backdrop: 'dynamic',
      backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
      closable: true,
      onHide: () => { },
      onShow: () => { },
      onToggle: () => { }
    }

    this['safarBlueModal'] = new Modal(safarBlueElement, modalOptions);
  }

  enableAllCarousel(): void {
    const itemInCarousel = [
      { name: 'safari-blue', item: 13 }
    ]

    itemInCarousel.forEach((carousel) => {
      var items: CarouselItem[] = []
      var optionItem = []
      for (let i = 1; i <= carousel.item; i++) {
        items.push({ position: i - 1, el: <HTMLElement>document.getElementById('carousel-' + carousel.name + '-item-' + i) });
        optionItem.push({ position: i - 1, el: <HTMLElement>document.getElementById('carousel-' + carousel.name + '-indicator-' + i) })
      }
      var options: CarouselOptions = {
        defaultPosition: 1,
        interval: 3000,
        indicators: {
          activeClasses: 'bg-white dark:bg-gray-800',
          inactiveClasses: 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
          items: optionItem
        },
        onNext: () => { },
        onPrev: () => { },
        onChange: () => { }
      }
      const carouselHtml: CarouselInterface = new Carousel(items, options);
      const prevButton = <HTMLElement>document.getElementById('carousel-' + carousel.name + '-prev');
      const nextButton = <HTMLElement>document.getElementById('carousel-' + carousel.name + '-next');
      prevButton.addEventListener('click', () => {
        carouselHtml.prev();
      });
      nextButton.addEventListener('click', () => {
        carouselHtml.next();
      });
    })

  }

  fighe = [{
    title: "Fake Sardegna",
    sub_title: "Non venirci",
    position: "Maldive del salento",
    price: "60€",
  }]



  openModal(modalName: string): void {
    this[modalName].show()
  }
  closeModal(modalName: string): void {
    this[modalName].hide()
  }
}




