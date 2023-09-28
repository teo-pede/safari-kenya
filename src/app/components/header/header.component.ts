import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Modal, Carousel } from 'flowbite';
import type { ModalOptions, ModalInterface, CarouselItem, CarouselOptions, CarouselInterface } from 'flowbite'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy{

  private navbarModal: ModalInterface = new Modal();

  isHome = true;
  links = [
    {name: 'Escursioni', link: '/excursions'},
    {name: 'Safari', link: '/safaris'},
    {name: 'Faq', link: '/faq'},
    {name: 'Chi sono', link: '/about'},
    {name: 'Contatti', link: '/contact'}
  ]

  constructor(private router: Router ) {}
  
  routeEvent(router: Router){
    router.events.subscribe(e => {
      this.closeNavbar()
      if (e instanceof NavigationEnd){
        this.isHome = e.urlAfterRedirects.startsWith('/#') || e.urlAfterRedirects == '/'
      }
    });
  }
  
  ngOnInit() {
    this.enableNavarModal();
    this.routeEvent(this.router);
    this.chooseTheme();
    this.backOnTopBtn();
  }

  ngOnDestroy(): void {
      this.closeNavbar()
  }

  enableNavarModal(): void{
    const navbarElement = <HTMLElement>document.getElementById('navbar-mini');
    const modalOptions: ModalOptions = {
      placement: 'top-right',
      backdrop: 'dynamic',
      backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
      closable: true,
      onHide: () => {},
      onShow: () => {},
      onToggle: () => {}
    }
    this.navbarModal = new Modal(navbarElement, modalOptions);
  }

  openNavbar(): void{
    this.navbarModal.show()
  }
  closeNavbar(): void{
    this.navbarModal.hide()
  }
  toggleNavbar(): void{
    this.navbarModal.toggle()
  }

  chooseTheme():void {
    var themeToggleDarkIcon = <HTMLElement>document.getElementById('theme-toggle-dark-icon');
    var themeToggleLightIcon = <HTMLElement>document.getElementById('theme-toggle-light-icon');

    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      themeToggleLightIcon.classList.remove('hidden');
    } else {
      themeToggleDarkIcon.classList.remove('hidden');
    }

    var themeToggleBtn = <HTMLElement>document.getElementById('theme-toggle');
    themeToggleBtn.addEventListener('click', function() {
      themeToggleDarkIcon.classList.toggle('hidden');
      themeToggleLightIcon.classList.toggle('hidden');

      if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

      } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
      }
    });
  }

  backOnTopBtn(): void{
    const mybutton = <HTMLElement>document.getElementById("btn-back-to-top");
    const scrollFunction = () => {
      if (
        document.body.scrollTop > 250 ||
        document.documentElement.scrollTop > 250
      ) {
        mybutton.classList.remove("hidden");
      } else {
        mybutton.classList.add("hidden");
      }
    };
    const backToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    mybutton.addEventListener("click", backToTop);
    window.addEventListener("scroll", scrollFunction);
  }
}
