import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Carousel, Popover } from "flowbite";
import type { CarouselItem, CarouselOptions, CarouselInterface, PopoverOptions, PopoverInterface } from "flowbite";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  friendCount = 0;
  countIsRunning = false;
  resetted = true;

  friendCountStop:any = setInterval(() => {
    this.countIsRunning = true
    this.friendCount += 111;
    if (this.friendCount == 999){
      clearInterval(this.friendCountStop)
      this.countIsRunning = false
    }
  }, 1)

  @ViewChild('friendCountDiv', { static: false })
  private friendCountDiv: ElementRef<HTMLDivElement>|undefined;
  isFriendCountDivScrolledIntoView = false;

  @HostListener('window:scroll', ['$event'])
  isScrolledIntoView() {
    if (this.friendCountDiv) {
      const rect = this.friendCountDiv.nativeElement.getBoundingClientRect();
      const topShown = rect.top >= 0;
      const bottomShown = rect.bottom-25 <= window.innerHeight;
      this.isFriendCountDivScrolledIntoView = topShown && bottomShown;
      if (this.isFriendCountDivScrolledIntoView){
        if (!this.countIsRunning && this.resetted) {
          this.resetted = false
          this.countIsRunning = true;
          this.friendCount = 0;
          this.friendCountStop = setInterval(() => {
            this.friendCount += 9;
            if (this.friendCount == 999){
              clearInterval(this.friendCountStop);
              this.countIsRunning = false
            }
          }, 1)
        }
      } else{
        if (!this.countIsRunning) {
          this.resetted = true
        }
      }
    }
  }

  ngOnInit(): void {
    this.setCarousel();
    this.enablePopOver();
  }

  enablePopOver(): void{
    const targetEl = <HTMLElement>document.getElementById('popover-image');
    const triggerEl = <HTMLElement>document.getElementById('popover-image-button');
    const options: PopoverOptions = {
      placement: 'top',
      triggerType: 'hover',
      offset: 10,
      onHide: () => {},
      onShow: () => {},
      onToggle: () => {}
    };
    if (targetEl) {
        const popover: PopoverInterface = new Popover(targetEl, triggerEl, options);
    }
  }

  setCarousel(): void{
    const items: CarouselItem[] = [
      { position: 0, el: <HTMLElement>document.getElementById('carousel-item-1') },
      { position: 1, el: <HTMLElement>document.getElementById('carousel-item-2') },
      { position: 2, el: <HTMLElement>document.getElementById('carousel-item-3') },
      { position: 3, el: <HTMLElement>document.getElementById('carousel-item-4') },
      { position: 4, el: <HTMLElement>document.getElementById('carousel-item-5') },
      { position: 5, el: <HTMLElement>document.getElementById('carousel-item-6') },
      { position: 6, el: <HTMLElement>document.getElementById('carousel-item-7') },
      { position: 7, el: <HTMLElement>document.getElementById('carousel-item-8') },
      { position: 8, el: <HTMLElement>document.getElementById('carousel-item-9') },
      { position: 9, el: <HTMLElement>document.getElementById('carousel-item-10') },
      { position: 10, el: <HTMLElement>document.getElementById('carousel-item-11') },
      { position: 11, el: <HTMLElement>document.getElementById('carousel-item-12') },
      { position: 12, el: <HTMLElement>document.getElementById('carousel-item-13') },
      { position: 13, el: <HTMLElement>document.getElementById('carousel-item-14') },
      { position: 14, el: <HTMLElement>document.getElementById('carousel-item-15') },
      { position: 15, el: <HTMLElement>document.getElementById('carousel-item-16') },
      { position: 16, el: <HTMLElement>document.getElementById('carousel-item-17') },
      { position: 17, el: <HTMLElement>document.getElementById('carousel-item-18') },
      { position: 18, el: <HTMLElement>document.getElementById('carousel-item-19') }
    ];
    const options: CarouselOptions = {
      defaultPosition: 1,
      interval: 3000,
      indicators: {
          activeClasses: 'bg-white dark:bg-gray-800',
          inactiveClasses: 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
          items: [
              { position: 0, el: <HTMLElement>document.getElementById('carousel-indicator-1') },
              { position: 1, el: <HTMLElement>document.getElementById('carousel-indicator-2') },
              { position: 2, el: <HTMLElement>document.getElementById('carousel-indicator-3') },
              { position: 3, el: <HTMLElement>document.getElementById('carousel-indicator-4') },
              { position: 4, el: <HTMLElement>document.getElementById('carousel-indicator-5') },
              { position: 5, el: <HTMLElement>document.getElementById('carousel-indicator-6') },
              { position: 6, el: <HTMLElement>document.getElementById('carousel-indicator-7') },
              { position: 7, el: <HTMLElement>document.getElementById('carousel-indicator-8') },
              { position: 8, el: <HTMLElement>document.getElementById('carousel-indicator-9') },
              { position: 9, el: <HTMLElement>document.getElementById('carousel-indicator-10') },
              { position: 10, el: <HTMLElement>document.getElementById('carousel-indicator-11') },
              { position: 11, el: <HTMLElement>document.getElementById('carousel-indicator-12') },
              { position: 12, el: <HTMLElement>document.getElementById('carousel-indicator-13') },
              { position: 13, el: <HTMLElement>document.getElementById('carousel-indicator-14') },
              { position: 14, el: <HTMLElement>document.getElementById('carousel-indicator-15') },
              { position: 15, el: <HTMLElement>document.getElementById('carousel-indicator-16') },
              { position: 16, el: <HTMLElement>document.getElementById('carousel-indicator-17') },
              { position: 17, el: <HTMLElement>document.getElementById('carousel-indicator-18') },
              { position: 18, el: <HTMLElement>document.getElementById('carousel-indicator-19') }
          ]
      },
      onNext: () => {},
      onPrev: () => {},
      onChange: () => {}
    };
    const carousel: CarouselInterface = new Carousel(items, options);
    carousel.cycle()
    const prevButton = <HTMLElement>document.getElementById('data-carousel-prev');
    const nextButton = <HTMLElement>document.getElementById('data-carousel-next');
    prevButton.addEventListener('click', () => {
        carousel.prev();
    });
    nextButton.addEventListener('click', () => {
        carousel.next();
    });
  }

}
