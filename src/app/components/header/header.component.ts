import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  currentUrl = '';

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
      var navBar = <HTMLElement>document.getElementById('navbar-sticky');
      if (!navBar.classList.contains('hidden')){
        var navBarButton = <HTMLElement>document.getElementById('collapse-navbar-button');
        navBarButton.click();
      }
      if (e instanceof NavigationEnd){
        this.currentUrl = e.urlAfterRedirects
      }
    });
  }
  
  ngOnInit() {
    this.routeEvent(this.router);
    this.chooseTheme();
    this.backOnTopBtn();
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
