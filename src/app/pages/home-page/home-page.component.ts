import { Component, AfterViewInit, OnDestroy, HostListener, ViewChild, ElementRef } from '@angular/core';
import { Modal, Carousel, Accordion } from 'flowbite';
import type { ModalOptions, ModalInterface, CarouselItem, CarouselOptions, CarouselInterface, 
              AccordionOptions, AccordionItem, AccordionInterface } from 'flowbite';
import { Observable } from 'rxjs';
import { SafarisComponent } from '../safaris/safaris.component';
import { ExcursionsComponent } from '../excursions/excursions.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements AfterViewInit, OnDestroy {

  modalOpen = false
  private modals = new Map<string, ModalInterface>();

  canDeactivate(): Observable<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no modal open
    if (!this.modalOpen ) {
      return true;
    }
    this.closeAllModal()
    return false
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  readonly safComp = new SafarisComponent()
  readonly excComp = new ExcursionsComponent()

  randExcursions = this.excComp.excurions.sort(() => Math.random() - Math.random()).slice(0,7)
  randSafaris = this.safComp.safarisWatamu.concat(this.safComp.safarisNairoby).sort(() => Math.random() - Math.random()).slice(0,7)

  friendCount = 0;

  friendInterval:any = setInterval(() => {}, 1);

  @ViewChild('safaris', { static: false })
  private safaris: ElementRef<HTMLDivElement>|undefined;
  private safarisDone = false;

  @ViewChild('excursions', { static: false })
  private excursions: ElementRef<HTMLDivElement>|undefined;
  private excursionsDone = false;

  private friendImgDone = false;

  @ViewChild('homeImg1', { static: false })
  private img1: ElementRef<HTMLDivElement>|undefined;

  @ViewChild('homeImg2', { static: false })
  private img2: ElementRef<HTMLDivElement>|undefined;

  @ViewChild('friendsNum', { static: false })
  private friendsNum: ElementRef<HTMLDivElement>|undefined;
  private friendNumDone = false;

  @ViewChild('guide', { static: false })
  private guide: ElementRef<HTMLDivElement>|undefined;
  private guideDone = false;

  @ViewChild('tickets', { static: false })
  private tickets: ElementRef<HTMLDivElement>|undefined;
  private ticketsDone = false;

  @ViewChild('support', { static: false })
  private support: ElementRef<HTMLDivElement>|undefined;
  private supportDone = false;


  @HostListener('window:scroll', ['$event'])
  isScrolledIntoView() {
    if(this.img1 && this.img2 && !this.friendImgDone){
      const rectImg1 = this.img1.nativeElement.getBoundingClientRect();
      if (rectImg1.top >= 0 && rectImg1.bottom-150 <= window.innerHeight){
        this.img1.nativeElement.classList.add('animate-bounce-in-left')
        this.img1.nativeElement.classList.remove('opacity-0')
        this.img2.nativeElement.classList.add('animate-bounce-in-right')
        this.img2.nativeElement.classList.remove('opacity-0')
        this.friendImgDone = true
      }
    }
    if(this.friendsNum && !this.friendNumDone){
      const rectFriend = this.friendsNum.nativeElement.getBoundingClientRect();
      if (rectFriend.top >= 0 && rectFriend.bottom-50 <= window.innerHeight){
        this.friendsNum.nativeElement.classList.add('animate-grow-my')
        this.friendsNum.nativeElement.classList.remove('scale-0')
        this.friendNumDone = true
        this.friendInterval = setInterval(() => {
          this.friendCount += 9;
          if (this.friendCount == 999){
            clearInterval(this.friendInterval);
          }
        }, 1)
      }
    }
    if(this.guide && !this.guideDone){
      const rectGuide = this.guide.nativeElement.getBoundingClientRect();
      if (rectGuide.top >= 0 && rectGuide.bottom-75 <= window.innerHeight){
        this.guide.nativeElement.classList.remove('opacity-0')
        this.guide.nativeElement.classList.add('animate-fade-in-up')
        this.guideDone = true
      }
    }
    if(this.tickets && !this.ticketsDone){
      const rectTickets = this.tickets.nativeElement.getBoundingClientRect();
      if (rectTickets.top >= 0 && rectTickets.bottom-75 <= window.innerHeight){
        this.tickets.nativeElement.classList.remove('opacity-0')
        this.tickets.nativeElement.classList.add('animate-fade-in-left')
        this.ticketsDone = true
      }
    }
    if(this.support && !this.supportDone){
      const rectSupport = this.support.nativeElement.getBoundingClientRect();
      if (rectSupport.top >= 0 && rectSupport.bottom-75 <= window.innerHeight){
        this.support.nativeElement.classList.remove('opacity-0')
        this.support.nativeElement.classList.add('animate-fade-in-up')
        this.supportDone = true
      }
    }
    if(this.safaris && !this.safarisDone){
      const rectSafaris = this.safaris.nativeElement.getBoundingClientRect();
      if (rectSafaris.top >= 0 && rectSafaris.bottom-50 <= window.innerHeight){
        this.safaris.nativeElement.classList.remove('opacity-0')
        this.safaris.nativeElement.classList.add('animate-bounce-in-right')
        this.safarisDone = true
      }
    }
    if(this.excursions && !this.excursionsDone){
      const rectExcursions = this.excursions.nativeElement.getBoundingClientRect();
      if (rectExcursions.top >= 0 && rectExcursions.bottom-50 <= window.innerHeight){
        this.excursions.nativeElement.classList.remove('opacity-0')
        this.excursions.nativeElement.classList.add('animate-bounce-in-left')
        this.excursionsDone = true
      }
    }
  }

  ngAfterViewInit(): void {
    this.isScrolledIntoView();
    this.enableAllModalAllCarousel();
  }

  ngOnDestroy(): void {
    this.closeAllModal();
  }

  carouselOnclick(event: any, carouselName: string){
    const elems = Array.from(document.querySelectorAll<HTMLElement>('.' + carouselName +'__item'))
    const newActive = <HTMLElement>event.target.closest('.' + carouselName + '__item')
    const newActivePos = newActive.dataset['pos'];
    if (newActivePos == "0") {
      return;
    };
    newActive.classList.add('carousel__item_active')
    this.update(newActive, elems)
  }

  update(newActive: HTMLElement, elems: HTMLElement[]) {
    const newActivePos = newActive.dataset['pos'];
  
    const current = elems.find((elem) => elem.dataset['pos'] == '0');
    const prev = elems.find((elem) => elem.dataset['pos'] == '-1');
    const next = elems.find((elem) => elem.dataset['pos'] == '1');
    const prev2 = elems.find((elem) => elem.dataset['pos'] == '-2');
    const next2 = elems.find((elem) => elem.dataset['pos'] == '2');
    const first = elems.find((elem) => elem.dataset['pos'] == '-3');
    const last = elems.find((elem) => elem.dataset['pos'] == '3');
    
    if (current) current.classList.remove('carousel__item_active');
    
    [current, prev, next, prev2, next2, first, last].forEach(item => {
      if (item && newActivePos){
        var itemPos = item.dataset['pos'] || '0';
        item.dataset['pos'] = this.getPos(itemPos, newActivePos)
      }
    })
  }

  getPos (current: String, active: String) {
    const diff = Number(current) - Number(active)
    if (Math.abs(Number(current) - Number(active)) > 3) {
      return Number(-current).toString()
    }
    return diff.toString();
  }

  enableAllModalAllCarousel(): void{
    const modalOptions: ModalOptions = {
      placement: 'top-center',
      backdrop: 'dynamic',
      backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
      closable: true,
      onHide: () => { this.modalOpen = false },
      onShow: () => { this.modalOpen = true },
      onToggle: () => {}
    }
    this.randSafaris.forEach( (safari) => {
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
        onToggle: (item) => {
          item._items.forEach( (el) => {
            el.triggerEl.querySelectorAll('svg')[1].classList.remove('rotate-180')
          })
          item._items.find( el => el.active)?.triggerEl.querySelectorAll('svg')[1].classList.add('rotate-180')
        },
      };
      const accordion: AccordionInterface = new Accordion(accordionItems, optionsAccord);
      accordion.open('accordion-' + safari.varName + '-heading-1');
    })
    this.randExcursions.forEach( (excur) => {
      const element = <HTMLElement>document.getElementById(excur.varName + '-modal');
      const modalEl: ModalInterface = new Modal(element, modalOptions);
      this.modals.set(excur.varName+'Modal', modalEl);

      var items: CarouselItem[] = []
      var optionItem = []
      for(let i=1; i <= excur.imgsArray.length; i++){
        items.push({ position: i-1, el: <HTMLElement>document.getElementById('carousel-' + excur.varName + '-item-' + i) });
        optionItem.push({ position: i-1, el: <HTMLElement>document.getElementById('carousel-' + excur.varName + '-indicator-' + i) })
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
      var prevButton = <HTMLElement>document.getElementById('carousel-' + excur.varName + '-prev');
      var nextButton = <HTMLElement>document.getElementById('carousel-' + excur.varName + '-next');
      prevButton.addEventListener('click', () => {
        carouselHtml.prev();
      });
      nextButton.addEventListener('click', () => {
        carouselHtml.next();
      });
    })
  }

  openModal(event: any, modalName: string, carouselName: string): void{
    const carouselItem = <HTMLElement>event.target.closest('.' + carouselName + '__item')
    if(carouselItem.classList.contains('carousel__item_active')){
      var modal = this.modals.get(modalName)
      if (modal){
        modal.show()
      }
    }
  }

  closeModal(modalName: string): void{
    var modal = this.modals.get(modalName)
    if (modal){
      modal.hide()
    }
  }

  closeAllModal(): void{
    this.randSafaris.forEach( (modal) => {
      this.closeModal(modal.varName + 'Modal')
    })
    this.randExcursions.forEach( (modal) => {
      this.closeModal(modal.varName + 'Modal')
    })
    this.modalOpen = false
  }

}
