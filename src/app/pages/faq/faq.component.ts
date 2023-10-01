import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Accordion } from "flowbite";
import type { AccordionOptions, AccordionItem, AccordionInterface } from "flowbite";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit, AfterViewInit {

  faqs = [
    {
      question: 'Servono vaccinazioni?',
      answer: [
        "È consigliato rivolgersi - con un anticipo di almeno 4 mesi - alla propia ASL di competenza e fissare un appuntamento per valutare eventuali vaccinazioni prima di arrivare in Kenya. A seconda della situazione e dei Paesi visitati prima dell'arrivo, potrebbe essere necessario qualche vaccino.",
        "<strong>RICORDA:</strong> se vuoi viaggiare a Zanzibar passando prima dal Kenya è obbligatorio il vaccino per la febbre gialla."
      ]
    },
    {
      question: 'Quali documenti sono necessari per entrare in Kenya?',
      answer: [
        'Tutti i cittadini maggiori di 16 anni necessitano del visto - stampato a colori - emesso da <br><a href="https://accounts.ecitizen.go.ke" target="_blank" class="text-amber-600 hover:underline">https://accounts.ecitizen.go.ke</a><br>da richiedere un paio di settimana prima dell\'arrivo nel Paese.',
        '<strong>Passaporto in corso di validità con scadenza superiore ai 6 mesi.</strong>',
        'Per ulteriori info:<br><a href="https://www.viaggiaresicuri.it/country/KEN" target="_blank" class="text-amber-600 hover:underline">https://www.viaggiaresicuri.it/country/KEN</a>'
      ]
    },
    {
      question: 'Come posso accedere alla rete durante il viaggio?',
      answer: [
        'Buona parte dei campi e lodge offrono una connessione Wi-Fi agli ospiti, sebbene la velocità e la stabilità potrebbe essere ridotta.',
        'Se vuoi essere sicuro di rimanere connesso in ogni momento puoi sempre comprare una SIM locale (airtel o safaricom), fisica o elettronica - qualora il tuo dispositivo la supporti. Pre la eSIM consiglio <br><a href="https://www.airalo.com" target="_blank" class="text-amber-600 hover:underline">https://www.airalo.com</a><br>anche se i prezzi si aggirano sui 10€ al GB, mentre le SIM fisiche, che ad esempio puoi comprare all\'areoporto, offrono tariffe di circa 1€ al GB.'
      ]
    },
    {
      question: 'Cosa portare per il safari?',
      answer: [
        "L'abbigliamento deve essere comodo, dai colori neutri e possibilmente in fibre naturali. Nelle zone più intenre l'escursione termica è maggiore, quindi l'opzione migliore è vestirsi a strati.",
        "Non possono mancare cappello, occhiali da sole, crema solare, repellente per insetti e binocolo, per vivere l'esperienza al meglio.",
        "Importanti anche farmaci di prima necessità, tra cui antidolorifici per comuni mal di testa, farmaci per la dissenteria, paracetamolo e collirio per eventuale iritazioni degli occhi.",
        '<strong>RICORDA:</strong> il drone in Kenya è vietato.'
      ]
    },
    {
      question: 'Come gestire soldi e mance?',
      answer: [
        "La moneta locale è lo scellino e il valore di cambio viene fissato ogni anno (normalmente il rapporto è di 1€ = 150 KSh). Se anche è vero che gli euro sono accettati per i pagamenti, consiglio di cambiare qualche centinaio di euro all'arrivo (in areoporto e negli albergi il tasso di cambio dovrebbe essere onesto), poichè i venditori tendono ad applicare un rapporto di cambio 1 a 100. <br>Inoltre le mance, anche se non obbligatorie, sono praticamente la norma, e utilizzando gli scellini avrete possibilità di usare tagli più piccoli.",
        'Quando acquisti nei mercati o per strada il prezzo è sempre contrattabile, e può succedere di arrivare anche alla metà del prezzo di partenza'
      ]
    },
    {
      question: 'Che lingua si parla?',
      answer: [
        "Lo swahili è la lingua ufficiale del Kenya mentre nelle scuole viene insegnato l'inglese. Inoltre ognuna delle tribu parla un dialetto differente.",
        "Nella zone costiera di Watamu e limitrofi la gran maggioranza di turismo italiano ha portato la popoazione locale ad imparare l'italiano, che viene parlato fluentemente da quasi tutti."
      ]
    }
  ]

  ngOnInit() {}
  
  ngAfterViewInit(): void {
    this.configAccordion()
  }

  configAccordion(): void {
    const accordionItems: AccordionItem[] = [];
    for (let index = 1; index <= this.faqs.length; index++) {
      accordionItems.push(
        {
          id: 'accordion-flush-heading-' + (index),
          triggerEl: <HTMLElement>document.getElementById('accordion-flush-heading-' + (index)),
          targetEl: <HTMLElement>document.getElementById('accordion-flush-body-' + (index)),
          active: index == 1 ? true : false
        });
    }

    const options: AccordionOptions = {
      alwaysOpen: false,
      activeClasses: 'text-gray-900 dark:text-white',
      inactiveClasses: 'text-gray-700 dark:text-gray-400',
      onOpen: (item) => { },
      onClose: (item) => { },
      onToggle: (item) => { 
        item._items.forEach( (el) => {
          el.triggerEl.querySelectorAll('svg')[1].classList.remove('rotate-180')
        })
        item._items.find( el => el.active)?.triggerEl.querySelectorAll('svg')[1].classList.add('rotate-180')
      },
    };

    const accordion: AccordionInterface = new Accordion(accordionItems, options);
    accordion.open('accordion-flush-heading-1');
  }

}
