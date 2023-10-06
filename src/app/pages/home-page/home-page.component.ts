import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  friendCount = 0;

  friendInterval:any = setInterval(() => {}, 1);

  private friendImgDone = false;

  @ViewChild('homeImg1', { static: false })
  private img1: ElementRef<HTMLDivElement>|undefined;

  @ViewChild('homeImg2', { static: false })
  private img2: ElementRef<HTMLDivElement>|undefined;

  @ViewChild('friendsNum', { static: false })
  private friendsNum: ElementRef<HTMLDivElement>|undefined;

  @HostListener('window:scroll', ['$event'])
  isScrolledIntoView() {
    if(this.img1 && this.img2 && this.friendsNum && !this.friendImgDone){
      const rectImg1 = this.img1.nativeElement.getBoundingClientRect();
      if (rectImg1.top >= 0 && rectImg1.bottom-150 <= window.innerHeight){
        this.img1.nativeElement.classList.remove('opacity-0')
        this.img1.nativeElement.classList.add('animate-bounce-in-left')
        this.img2.nativeElement.classList.remove('opacity-0')
        this.img2.nativeElement.classList.add('animate-bounce-in-right')
        this.friendsNum.nativeElement.classList.remove('scale-0')
        this.friendsNum.nativeElement.classList.add('animate-grow-my')
        this.friendImgDone = true
        this.friendInterval = setInterval(() => {
          this.friendCount += 9;
          if (this.friendCount == 999){
            clearInterval(this.friendInterval);
          }
        }, 1)
      }
    }
  }

  ngOnInit(): void {
    //isOnLoadIntoView()
  }
}
