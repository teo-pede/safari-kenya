import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

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
}
