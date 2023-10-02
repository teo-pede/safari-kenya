import { Component,  OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Modal, Carousel, Accordion } from 'flowbite';
import type { ModalOptions, ModalInterface, CarouselItem, CarouselOptions, CarouselInterface, 
              AccordionOptions, AccordionItem, AccordionInterface } from 'flowbite'

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
      thumbnail: 'hist_7.jpeg',
      imgFolder: '/assets/img/safaris/historical/',
      title: 'SAFARI STORICO',
      duration: '2 giorni e 1 notte',
      price: '',
      place: 'Gede + Tsavo Est',
      varName: 'safariHist',
      imgsArray: ['hist_1.jpg','hist_2.jpg','hist_3.jpg','hist_4.jpg','hist_5.jpg','hist_6.jpg','hist_7.jpeg'],
      programs: [
        "🚙 Partenza dal villaggio alle 7:00 del mattino direzione <strong>Gede</strong>. La visita alle rovine durerà circa 40 minuti e sarà accompagnata da una guida che, in italiano, spiegherà le origine e le curiosità del luogo. Si tratta di un sito storico dove sono visibili i resti della città araba di mercanti Gedi, immersa in una fitta vegetazione.<br>Gede è oggi stata scelta come dimora da un ricco insediamento di vivaci e simpatiche scimmiette 🐒🐵, che accompagnano i visitatori alla città in cambio di qualche banana 🍌.<br>Successivamente 2 ore e mezza di viaggio si arriva all'ingresso del parco <strong>Tsavo East</strong>, dove faremo una sosta vicino al fiume per vedere coccodrilli 🐊.<br>Ore 11:00/11:30 entriamo al parco dello Tsavo Est per cominciare il primo game drive, dirigendoci verso l'alloggio 'Sentrim Tsavo' per il pranzo.<br>Dopo il pranzo, un po' di riposo fino alle 15:30 per poi ripartire con un altro game drive fino al tramonto. <br>Rientro all'alloggio per la cena e il pernottamento.",
        "Sveglia all'alba, ☕️ colazione e alle 7 partenza per il game drive fino alle 12:00.<br>Usciremo dal parco utilizzando lo stesso ingresso, per dirigerci verso il ristorante per il pranzo al <strong>Crocodile Camp</strong>.<br>Dopo il pranzo, un po' di riposo, alle ore 14.30 si riparte verso Watamu.<br>Lungo il tragitto ci potremmo fermare nelle scuole e villaggi per consegnare cibo e abbigliamento.<br>Arrivo previsto a Watamu verso le 17:30"
      ],
      dailyPlace: ['Gede', 'Tsavo East'],
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
    this.enableAllModalAllCarousel();
  }

  ngOnDestroy(): void {
    this.closeAllModal();
  }

  enableAllModalAllCarousel(): void{
    const modalOptions: ModalOptions = {
      placement: 'top-center',
      backdrop: 'dynamic',
      backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
      closable: true,
      onHide: () => {},
      onShow: () => {},
      onToggle: () => {}
    }
    this.safarisWatamu.forEach( (safari) => {
      const element = <HTMLElement>document.getElementById(safari.varName + '-modal');
      const modalEl: ModalInterface = new Modal(element, modalOptions);
      this.modals.set(safari.varName+'Modal', modalEl);

      var items: CarouselItem[] = []
      var optionItem = []
      for(let i=1; i <= safari.imgsArray.length; i++){
        items.push({ position: i-1, el: <HTMLElement>document.getElementById('carousel-' + safari.varName + '-item-' + i) });
        optionItem.push({ position: i-1, el: <HTMLElement>document.getElementById('carousel-' + safari.varName + '-indicator-' + i) })
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
      var carouselHtml: CarouselInterface = new Carousel(items, options);
      var prevButton = <HTMLElement>document.getElementById('carousel-' + safari.varName + '-prev');
      var nextButton = <HTMLElement>document.getElementById('carousel-' + safari.varName + '-next');
      prevButton.addEventListener('click', () => {
        carouselHtml.prev();
      });
      nextButton.addEventListener('click', () => {
        carouselHtml.next();
      });

      const accordionItems: AccordionItem[] = [];
      for (let index = 1; index <= safari.programs.length; index++) {
        accordionItems.push(
          {
            id: 'accordion-' + safari.varName + '-heading-' + (index),
            triggerEl: <HTMLElement>document.getElementById('accordion-' + safari.varName + '-heading-' + (index)),
            targetEl: <HTMLElement>document.getElementById('accordion-' + safari.varName + '-body-' + (index)),
            active: index == 1 ? true : false
          });
      }
      const optionsAccord: AccordionOptions = {
        alwaysOpen: false,
        activeClasses: 'bg-transparent dark:bg-transparent',
        inactiveClasses: 'bg-gray-300 dark:bg-gray-600',
        onOpen: (item) => {
          this.scroll(<HTMLElement>item._items.find( el => el.active)?.triggerEl)
        },
        onClose: (item) => { },
        onToggle: (item) => { },
      };
      const accordion: AccordionInterface = new Accordion(accordionItems, optionsAccord);
      accordion.open('accordion-' + safari.varName + '-heading-1');
    })
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
