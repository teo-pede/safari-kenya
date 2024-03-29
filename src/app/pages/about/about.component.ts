import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Carousel, Popover } from "flowbite";
import type { CarouselItem, CarouselOptions, CarouselInterface, PopoverOptions, PopoverInterface } from "flowbite";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, AfterViewInit {

  friendsImgs = ['friend_1.jpeg','friend_2.jpeg','friend_3.jpeg','friend_4.jpeg','friend_5.jpeg','friend_6.jpeg','friend_7.jpeg','friend_8.jpeg','friend_9.jpeg','friend_10.jpeg','friend_11.jpeg','friend_12.jpeg','friend_13.jpeg','friend_14.jpeg','friend_15.jpeg','friend_16.jpeg','friend_17.jpeg','friend_18.jpeg','friend_19.jpeg']
  friendsImgFolder = '/assets/img/friends/'
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
    this.enablePopOver();
  }

  ngAfterViewInit(): void {
    this.setCarousel();
  }

  enablePopOver(): void{
    const targetEl = <HTMLElement>document.getElementById('popover-image');
    const triggerEl = <HTMLElement>document.getElementById('popover-image-button');
    const options: PopoverOptions = {
      placement: 'top',
      triggerType: 'click',
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
    const items: CarouselItem[] = [];
    const itemsOpt: CarouselItem[] = [];
    for (let i=0; i<19; i++){
      items.push({ position: i, el: <HTMLElement>document.getElementById('carousel-item-' + (i+1)) })
      itemsOpt.push({ position: i, el: <HTMLElement>document.getElementById('carousel-indicator-' + (i+1)) })
    }
    const options: CarouselOptions = {
      defaultPosition: 0,
      interval: 3000,
      indicators: {
          activeClasses: 'bg-white dark:bg-gray-800',
          inactiveClasses: 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
          items: itemsOpt
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
