import { Component, ViewChild, ElementRef, HostListener  } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  @ViewChild('phoneDiv', { static: false })
  private phoneDiv: ElementRef<HTMLDivElement>|undefined;
  private phoneDone = false;

  @ViewChild('emailDiv', { static: false })
  private emailDiv: ElementRef<HTMLDivElement>|undefined;
  private emailDone = false;

  @ViewChild('hourDiv', { static: false })
  private hourDiv: ElementRef<HTMLDivElement>|undefined;
  private hourDone = false;

  @ViewChild('addressDiv', { static: false })
  private addressDiv: ElementRef<HTMLDivElement>|undefined;
  private addressDone = false;

  @HostListener('window:scroll', ['$event'])
  isScrolledIntoView() {
    if (this.phoneDiv && !this.phoneDone) {
      const rectPhone = this.phoneDiv.nativeElement.getBoundingClientRect();
      if (rectPhone.top >= 0 && rectPhone.bottom-110 <= window.innerHeight){
        this.phoneDiv.nativeElement.classList.remove('opacity-0')
        this.phoneDiv.nativeElement.classList.add('animate-fade-in-left')
        this.phoneDone = true
      }
    }
    if (this.emailDiv && !this.emailDone) {
      const rectPhone = this.emailDiv.nativeElement.getBoundingClientRect();
      if (rectPhone.top >= 0 && rectPhone.bottom-110 <= window.innerHeight){
        this.emailDiv.nativeElement.classList.remove('opacity-0')
        this.emailDiv.nativeElement.classList.add('animate-fade-in-up')
        this.emailDone = true
      }
    }
    if (this.hourDiv && !this.hourDone) {
      const rectPhone = this.hourDiv.nativeElement.getBoundingClientRect();
      if (rectPhone.top >= 0 && rectPhone.bottom-110 <= window.innerHeight){
        this.hourDiv.nativeElement.classList.remove('opacity-0')
        this.hourDiv.nativeElement.classList.add('animate-fade-in-right')
        this.hourDone = true
      }
    }
    if (this.addressDiv && !this.addressDone) {
      const rectPhone = this.addressDiv.nativeElement.getBoundingClientRect();
      if (rectPhone.top >= 0 && rectPhone.bottom-110 <= window.innerHeight){
        this.addressDiv.nativeElement.classList.remove('opacity-0')
        this.addressDiv.nativeElement.classList.add('animate-fade-in-down')
        this.addressDone = true
      }
    }
  }
}
