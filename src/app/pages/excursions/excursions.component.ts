import { Component ,OnInit, OnDestroy } from '@angular/core';
import { Modal, Carousel } from 'flowbite';
import type { ModalOptions, ModalInterface, CarouselItem, CarouselOptions, CarouselInterface } from 'flowbite'

@Component({
  selector: 'app-excursions',
  templateUrl: './excursions.component.html',
  styleUrls: ['./excursions.component.css']
})
export class ExcursionsComponent implements OnInit, OnDestroy{
  [key: string]: any;

  private safarBlueModal: ModalInterface = new Modal();
  private safarSardModal: ModalInterface = new Modal();
  private goldBeachModal: ModalInterface = new Modal();
  private mgrModal: ModalInterface = new Modal();
  private marafaModal: ModalInterface = new Modal();
  private gedeModal: ModalInterface = new Modal();
  private malindiModal: ModalInterface = new Modal();
  private malindiNightModal: ModalInterface = new Modal();
  private amoreModal: ModalInterface = new Modal();
  private dabasoModal: ModalInterface = new Modal();
  private garodaModal: ModalInterface = new Modal();
  private jacarandaModal: ModalInterface = new Modal();
  private breezeModal: ModalInterface = new Modal();
  private midaCreekModal: ModalInterface = new Modal();
  private falconeriaModal: ModalInterface = new Modal();
  private hallerParkModal: ModalInterface = new Modal();

  ngOnInit(): void {
      this.enableAllModal();
      this.enableAllCarousel();
  }

  ngOnDestroy(): void {
      this.closeAllModal();
  }

  closeAllModal(): void{
    ['safarBlueModal', 'safarSardModal', 'goldBeachModal', 'mgrModal', 'marafaModal', 'gedeModal', 'malindiModal', 'malindiNightModal', 'amoreModal', 'dabasoModal', 'garodaModal', 'jacarandaModal', 'breezeModal', 'midaCreekModal', 'falconeriaModal', 'hallerParkModal'].forEach( (modalVar) => {
      this.closeModal(modalVar)
    })
  }

  enableAllModal(): void{
    const safarBlueElement = <HTMLElement>document.querySelector('#safari-blue-modal');
    const safarSarElement = <HTMLElement>document.querySelector('#sardegna-modal');
    const goldBeachElement = <HTMLElement>document.querySelector('#golden-beach-modal');
    const mgrElement = <HTMLElement>document.querySelector('#mgr-modal');
    const marafaElement = <HTMLElement>document.querySelector('#marafa-modal');
    const gedeElement = <HTMLElement>document.querySelector('#gede-modal');
    const malindiElement = <HTMLElement>document.querySelector('#malindi-modal');
    const malindiNightElement = <HTMLElement>document.querySelector('#malindi-night-modal');
    const amoreElement = <HTMLElement>document.querySelector('#amore-modal');
    const dabasoElement = <HTMLElement>document.querySelector('#dabaso-modal');
    const garodaElement = <HTMLElement>document.querySelector('#garoda-modal');
    const jacarandaElement = <HTMLElement>document.querySelector('#jacaranda-modal');
    const breezeElement = <HTMLElement>document.querySelector('#breeze-modal');
    const midaCreekElement = <HTMLElement>document.querySelector('#mida-creek-modal');
    const falconeriaElement = <HTMLElement>document.querySelector('#malindi-falconeria-modal');
    const hallerParkElement = <HTMLElement>document.querySelector('#haller-park-modal');

    const modalOptions: ModalOptions = {
      placement: 'top-center',
      backdrop: 'dynamic',
      backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
      closable: true,
      onHide: () => {},
      onShow: () => {},
      onToggle: () => {}
    }

    this.safarBlueModal = new Modal(safarBlueElement, modalOptions);
    this.safarSardModal = new Modal(safarSarElement, modalOptions);
    this.goldBeachModal = new Modal(goldBeachElement, modalOptions);
    this.mgrModal = new Modal(mgrElement, modalOptions);
    this.marafaModal = new Modal(marafaElement, modalOptions);
    this.gedeModal = new Modal(gedeElement, modalOptions);
    this.malindiModal = new Modal(malindiElement, modalOptions);
    this.malindiNightModal = new Modal(malindiNightElement, modalOptions);
    this.amoreModal = new Modal(amoreElement, modalOptions);
    this.dabasoModal = new Modal(dabasoElement, modalOptions);
    this.garodaModal = new Modal(garodaElement, modalOptions);
    this.jacarandaModal = new Modal(jacarandaElement, modalOptions);
    this.breezeModal = new Modal(breezeElement, modalOptions);
    this.midaCreekModal = new Modal(midaCreekElement, modalOptions);
    this.falconeriaModal = new Modal(falconeriaElement, modalOptions);
    this.hallerParkModal = new Modal(hallerParkElement, modalOptions);
  }

  enableAllCarousel(): void{
    const itemInCarousel = [
      { name: 'safari-blue', item: 13 },
      { name: 'sardegna', item: 8 },
      { name: 'golden-beach', item: 7 },
      { name: 'mgr', item: 6 },
      { name: 'marafa', item: 12 },
      { name: 'gede', item: 5 },
      { name: 'malindi', item: 3 },
      { name: 'malindi-night', item: 3 },
      { name: 'amore', item: 3 },
      { name: 'dabaso', item: 4 },
      { name: 'garoda', item: 2 },
      { name: 'jacaranda', item: 2 },
      { name: 'breeze', item: 2 },
      { name: 'mida-creek', item: 4 },
      { name: 'malindi-falconeria', item: 3 },
      { name: 'haller-park', item: 6 }
    ]

    itemInCarousel.forEach( (carousel) => {
      var items: CarouselItem[] = []
      var optionItem = []
      for(let i=1; i <= carousel.item; i++){
        items.push({ position: i-1, el: <HTMLElement>document.getElementById('carousel-' + carousel.name + '-item-' + i) });
        optionItem.push({ position: i-1, el: <HTMLElement>document.getElementById('carousel-' + carousel.name + '-indicator-' + i) })
      }
      var options: CarouselOptions = {
        defaultPosition: 1,
        interval: 3000,
        indicators: {
          activeClasses: 'bg-white dark:bg-gray-800',
          inactiveClasses: 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
          items: optionItem
        },
        onNext: () => {},
        onPrev: () => {},
        onChange: () => {}
      }
      const carouselHtml: CarouselInterface = new Carousel(items, options);
      const prevButton = <HTMLElement>document.getElementById('carousel-' + carousel.name + '-prev');
      const nextButton = <HTMLElement>document.getElementById( 'carousel-' + carousel.name + '-next');
      prevButton.addEventListener('click', () => {
        carouselHtml.prev();
      });
      nextButton.addEventListener('click', () => {
        carouselHtml.next();
      });
    })

  }

  openModal(modalName: string): void{
    this[modalName].show()
  }
  closeModal(modalName: string): void{
    this[modalName].hide()
  }

}
