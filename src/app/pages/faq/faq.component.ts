import { Component, OnInit } from '@angular/core';
import { Accordion } from "flowbite";
import type { AccordionOptions, AccordionItem, AccordionInterface } from "flowbite";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  ngOnInit() {
    this.configAccordion()
  }

  configAccordion(): void {
    const accordionItems: AccordionItem[] = [];
    for (let index = 0; index < 6; index++) {
      accordionItems.push(
        {
          id: 'accordion-flush-heading-' + (index + 1),
          triggerEl: <HTMLElement>document.getElementById('accordion-flush-heading-' + (index + 1)),
          targetEl: <HTMLElement>document.getElementById('accordion-flush-body-' + (index + 1)),
          active: index == 0 ? true : false
        });
    }

    const options: AccordionOptions = {
      alwaysOpen: false,
      activeClasses: 'text-gray-900 dark:text-whit',
      inactiveClasses: 'text-gray-700 dark:text-gray-400',
      onOpen: () => { },
      onClose: () => { },
      onToggle: () => { },
    };

    const accordion: AccordionInterface = new Accordion(accordionItems, options);
    accordion.open('accordion-flush-heading-1');
  }

}
