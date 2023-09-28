import { Component, OnInit } from '@angular/core';
import { Accordion } from "flowbite";
import type { AccordionOptions, AccordionItem, AccordionInterface } from "flowbite";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit{

  ngOnInit(){
    this.configAccordion()
  }

  configAccordion(): void{
    const accordionItems: AccordionItem[] = [
      {
          id: 'accordion-flush-heading-1',
          triggerEl: <HTMLElement>document.getElementById('accordion-flush-heading-1'),
          targetEl: <HTMLElement>document.getElementById('accordion-flush-body-1'),
          active: true
      },
      {
          id: 'accordion-flush-heading-2',
          triggerEl: <HTMLElement>document.getElementById('accordion-flush-heading-2'),
          targetEl: <HTMLElement>document.getElementById('accordion-flush-body-2'),
          active: false
      },
      {
          id: 'accordion-flush-heading-3',
          triggerEl: <HTMLElement>document.getElementById('accordion-flush-heading-3'),
          targetEl: <HTMLElement>document.getElementById('accordion-flush-body-3'),
          active: false
      },
      {
        id: 'accordion-flush-heading-4',
        triggerEl: <HTMLElement>document.getElementById('accordion-flush-heading-4'),
        targetEl: <HTMLElement>document.getElementById('accordion-flush-body-4'),
        active: false
      },
      {
        id: 'accordion-flush-heading-5',
        triggerEl: <HTMLElement>document.getElementById('accordion-flush-heading-5'),
        targetEl: <HTMLElement>document.getElementById('accordion-flush-body-5'),
        active: false
      },
      {
        id: 'accordion-flush-heading-6',
        triggerEl: <HTMLElement>document.getElementById('accordion-flush-heading-6'),
        targetEl: <HTMLElement>document.getElementById('accordion-flush-body-6'),
        active: false
      }
    ];
  
    const options: AccordionOptions = {
      alwaysOpen: false,
      activeClasses: 'text-gray-900 dark:text-whit',
      inactiveClasses: 'text-gray-700 dark:text-gray-400',
      onOpen: () => {},
      onClose: () => {},
      onToggle: () => {},
    };

    const accordion: AccordionInterface = new Accordion(accordionItems, options);
    accordion.open('accordion-flush-heading-1');
  }

}
