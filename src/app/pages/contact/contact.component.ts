import { Component, OnInit, ViewChild, ElementRef, HostListener  } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

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
      if (rectPhone.top >= 0 && rectPhone.bottom-200 <= window.innerHeight){
        this.phoneDiv.nativeElement.classList.remove('opacity-0')
        this.phoneDiv.nativeElement.classList.add('animate-fade-in-left')
        this.phoneDone = true
      }
    }
    if (this.emailDiv && !this.emailDone) {
      const rectPhone = this.emailDiv.nativeElement.getBoundingClientRect();
      if (rectPhone.top >= 0 && rectPhone.bottom-200 <= window.innerHeight){
        this.emailDiv.nativeElement.classList.remove('opacity-0')
        this.emailDiv.nativeElement.classList.add('animate-fade-in-up')
        this.emailDone = true
      }
    }
    if (this.hourDiv && !this.hourDone) {
      const rectPhone = this.hourDiv.nativeElement.getBoundingClientRect();
      if (rectPhone.top >= 0 && rectPhone.bottom-200 <= window.innerHeight){
        this.hourDiv.nativeElement.classList.remove('opacity-0')
        this.hourDiv.nativeElement.classList.add('animate-fade-in-right')
        this.hourDone = true
      }
    }
    if (this.addressDiv && !this.addressDone) {
      const rectPhone = this.addressDiv.nativeElement.getBoundingClientRect();
      if (rectPhone.top >= 0 && rectPhone.bottom-200 <= window.innerHeight){
        this.addressDiv.nativeElement.classList.remove('opacity-0')
        this.addressDiv.nativeElement.classList.add('animate-fade-in-down')
        this.addressDone = true
      }
    }
  }

  ngOnInit(): void {
    this.isOnLoadIntoView()
  }

  isOnLoadIntoView():void {
    const phone = <HTMLElement>document.getElementById('phoneDiv');
    if (phone && !this.phoneDone) {
      const rectPhone = phone.getBoundingClientRect();
      if (rectPhone.top >= 0 && rectPhone.bottom-200 <= window.innerHeight){
        phone.classList.remove('opacity-0')
        phone.classList.add('animate-fade-in-left')
        this.phoneDone = true
      }
    }
    const email = <HTMLElement>document.getElementById('emailDiv');
    if (email && !this.emailDone) {
      const rectPhone = email.getBoundingClientRect();
      if (rectPhone.top >= 0 && rectPhone.bottom-200 <= window.innerHeight){
        email.classList.remove('opacity-0')
        email.classList.add('animate-fade-in-up')
        this.emailDone = true
      }
    }
    const hour = <HTMLElement>document.getElementById('hourDiv');
    if (hour && !this.hourDone) {
      const rectPhone = hour.getBoundingClientRect();
      if (rectPhone.top >= 0 && rectPhone.bottom-200 <= window.innerHeight){
        hour.classList.remove('opacity-0')
        hour.classList.add('animate-fade-in-right')
        this.hourDone = true
      }
    }
    const address = <HTMLElement>document.getElementById('addressDiv');
    if (address && !this.addressDone) {
      const rectPhone = address.getBoundingClientRect();
      if (rectPhone.top >= 0 && rectPhone.bottom-200 <= window.innerHeight){
        address.classList.remove('opacity-0')
        address.classList.add('animate-fade-in-down')
        this.addressDone = true
      }
    }
  }

}
