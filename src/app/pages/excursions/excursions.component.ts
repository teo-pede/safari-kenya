import { Component, OnInit } from '@angular/core';
import { Modal, Carousel } from 'flowbite';
import type { ModalOptions, ModalInterface, CarouselItem, CarouselOptions, CarouselInterface } from 'flowbite'

@Component({
  selector: 'app-excursions',
  templateUrl: './excursions.component.html',
  styleUrls: ['./excursions.component.css']
})
export class ExcursionsComponent implements OnInit {
  [key: string]: any;

  schedeDaMostrare = [
    {
      title: "SAFARI BLUE GARODA",
      sub_title: "giornata intera",
      position: "Parco Marino & Mangrovie & Garoda",
      price: "€60",
      img_path: "/assets/img/excursions/safari_blue/safari_blue_5.jpg",
      modale_da_aprire: "safarBlueModal"
    },
    {
      title: "SAFARI BLUE SARDEGNA 2",
      sub_title: "giornata intera",
      position: " Parco Marino & Watamu",
      price: "€60",
      img_path: "/assets/img/excursions/sardegna/sardegna_1.jpg",
      modale_da_aprire: "safarSardModal"
    },
    {
      title: "SPIAGGIA DORATA - CHE SHALE",
      sub_title: "mezza giornata",
      position: " Che Shale",
      price: "€30",
      img_path: "/assets/img/excursions/golden_beach/gold_5.jpg",
      modale_da_aprire: "goldBeachModal"
    },
    {
      title: "SPIAGGIA DORATA - ISOLA DI ROBINSON - MARAFA",
      sub_title: "giornata intera",
      position: " Parco Marino & Watamu",
      price: "€70",
      img_path: "/assets/img/excursions/marafa_gold_robinson/mgr_7.jpg",
      modale_da_aprire: "mgrModal"
    },
    {
      title: "MARAFA - HELLS KITCHEN",
      sub_title: "mezza intera",
      position: "Marafa",
      price: "€35",
      img_path: "/assets/img/excursions/marafa/marafa_1.jpeg",
      modale_da_aprire: "marafaModal"
    },
    {
      title: "ROVINE DI GEDE",
      sub_title: "mezza intera",
      position: "Gede",
      price: "€30",
      img_path: "/assets/img/excursions/gede/gede_2.jpg",
      modale_da_aprire: "gedeModal"
    },
    {
      title: "MALINDI TOUR",
      sub_title: "mezza intera",
      position: "Malindi",
      price: "€25",
      img_path: "/assets/img/excursions/malindi/malindi_1.jpg",
      modale_da_aprire: "malindiModal"
    },
    {
      title: "MALINDI BY NIGHT",
      sub_title: "mezza intera",
      position: "Malindi",
      price: "€25",
      img_path: "/assets/img/excursions/malindi_night/malindi_night_2.jpg",
      modale_da_aprire: "malindiNightModal"
    },
    {
      title: "ISOLA DELL'AMORE",
      sub_title: "mezza intera",
      position: "Isola dell'Amore, Watamu",
      price: "€30",
      img_path: "/assets/img/excursions/amore/amore_1.jpg",
      modale_da_aprire: "amoreModal"
    },
    {
      title: "DABASO COMMUNITY",
      sub_title: "mezza intera",
      position: "Mida Creek, Watamu",
      price: "€30",
      img_path: "/assets/img/excursions/dabaso/dabaso_3.jpeg",
      modale_da_aprire: "dabasoModal"
    },
    {
      title: "GARODA",
      sub_title: "mezza intera",
      position: "Garoda, Watamu",
      price: "€25",
      img_path: "/assets/img/excursions/garoda/garoda_1.jpg",
      modale_da_aprire: "garodaModal"
    },
    {
      title: "JACARANDA",
      sub_title: "mezza intera",
      position: "Jacaranda, Watamu",
      price: "€25",
      img_path: "/assets/img/excursions/jacaranda/jacaranda_1.jpg",
      modale_da_aprire: "jacarandaModal"
    },
    {
      title: "OCEAN BREEZE",
      sub_title: "mezza intera",
      position: "Ocean Breeze, Watamu",
      price: "€25",
      img_path: "/assets/img/excursions/breeze/breeze_1.jpg",
      modale_da_aprire: "breezeModal"
    },
    {
      title: "MIDA CREEK",
      sub_title: "mezza intera",
      position: "Mida Creek, Watamu",
      price: "€25",
      img_path: "/assets/img/excursions/mida_creek/mida_creek_1.png",
      modale_da_aprire: "midaCreekModal"
    },
    {
      title: "FALCONERIA DI MALINDI",
      sub_title: "mezza intera",
      position: "Malindi",
      price: "€25",
      img_path: "/assets/img/excursions/malindi_falconeria/malindi_falconeria_1.jpg",
      modale_da_aprire: "falconeriaModal"
    },
    {
      title: "HALLER PARK + FORT JESUS",
      sub_title: "giornata intera",
      position: "Mombasa",
      price: "€60",
      img_path: "/assets/img/excursions/haller_park/haller_park_1.jpg",
      modale_da_aprire: "hallerParkModal"
    },


  ];

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

  enableAllModal(): void {
    const safarBlueElement = <HTMLElement>document.querySelector('#safari-blue-modal');
    const safarSarElement = <HTMLElement>document.querySelector('#safari-sard-modal');
    const goldBeachElement = <HTMLElement>document.querySelector('#gold-beach-modal');
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
    const falconeriaElement = <HTMLElement>document.querySelector('#falconeria-modal');
    const hallerParkElement = <HTMLElement>document.querySelector('#haller-park-modal');

    const modalOptions: ModalOptions = {
      placement: 'top-center',
      backdrop: 'dynamic',
      backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
      closable: true,
      onHide: () => { },
      onShow: () => { },
      onToggle: () => { }
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

  enableAllCarousel(): void {
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

  openModal(modalName: string): void {
    debugger;
    this[modalName].show()
  }
  closeModal(modalName: string): void {
    this[modalName].hide()
  }

}
