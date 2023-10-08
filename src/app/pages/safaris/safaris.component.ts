import { Component,  OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Modal, Carousel, Accordion } from 'flowbite';
import type { ModalOptions, ModalInterface, CarouselItem, CarouselOptions, CarouselInterface, 
              AccordionOptions, AccordionItem, AccordionInterface } from 'flowbite';
import { Observable } from 'rxjs';
import { DataService } from '../../data.service';
import { ViewportScroller } from "@angular/common";


@Component({
  selector: 'app-safaris',
  templateUrl: './safaris.component.html',
  styleUrls: ['./safaris.component.css']
})
export class SafarisComponent implements OnInit, OnDestroy, AfterViewInit {

  modalNameFromOther: string
  modalOpen = false

  constructor(private modalService: DataService, private scroller?: ViewportScroller) { 
    this.modalNameFromOther = this.modalService.getModalName()
    this.modalService.setModalName('')
  }

  canDeactivate(): Observable<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no modal open
    if (!this.modalOpen ) {
      return true;
    }
    this.closeAllModal()
    return false
  }

  scroll(el: HTMLElement) {
    if(el)
    el.scrollIntoView({ behavior: "smooth" });
  }

  private modals = new Map<string, ModalInterface>();

  safarisWatamu = [
    {
      thumbnail: 'hist_7.jpeg',
      imgFolder: '/assets/img/safaris/historical/',
      title: 'SAFARI STORICO',
      duration: '2 giorni e 1 notte',
      price: '',
      place: 'Gede + Tsavo Est',
      varName: 'safariHist',
      imgsArray: ['hist_1.jpg','hist_2.jpg','hist_3.jpg','hist_4.jpg','hist_5.jpg','hist_6.jpg','hist_7.jpeg'],
      programs: [
        "🚙 Partenza dal villaggio alle 7:00 del mattino direzione <strong>Gede</strong>. La visita alle rovine durerà circa 40 minuti e sarà accompagnata da una guida che, in italiano, spiegherà le origine e le curiosità del luogo. Si tratta di un sito storico dove sono visibili i resti della città araba di mercanti Gedi, immersa in una fitta vegetazione.<br>Gede è oggi stata scelta come dimora da un ricco insediamento di vivaci e simpatiche scimmiette 🐒🐵, che accompagnano i visitatori alla città in cambio di qualche banana 🍌.<br>Successivamente 2 ore e mezza di viaggio si arriva all'ingresso del parco <strong>Tsavo East</strong>, dove faremo una sosta vicino al fiume per vedere coccodrilli 🐊.<br>Ore 11:00/11:30 entriamo al parco dello Tsavo Est per cominciare il primo game drive, dirigendoci verso l'alloggio 'Sentrim Tsavo' per il pranzo.<br>Dopo il pranzo, un po' di riposo fino alle 15:30 per poi ripartire con un altro game drive fino al tramonto. <br>Rientro all'alloggio ⛺️ per la cena e il pernottamento 🛏.",
        "Sveglia all'alba, ☕️ colazione e alle 7 partenza per il game drive fino alle 12:00.<br>Usciremo dal parco utilizzando lo stesso ingresso, per dirigerci verso il ristorante per il pranzo al <strong>Crocodile Camp</strong>.<br>Dopo il pranzo, un po' di riposo, alle ore 14:30 si riparte verso Watamu.<br>Lungo il tragitto ci potremmo fermare nelle scuole e villaggi per consegnare cibo e abbigliamento.<br>Arrivo previsto a Watamu verso le 17:30"
      ],
      dailyPlace: ['Gede', 'Tsavo East'],
      included: [
        'Tutti i trasferimenti a bordo di fuoristrada con tetto panoramico apribile',
        "Biglietto d'ingresso alle rovine di Gede con guida specializzata (in italiano)",
        "Biglietto d'ingresso al parco Tsavo East",
        'Pernottamento in lodge/camp con pensione completa (escluse le bevande)',
        'Acqua minerale durante tutti i game drive',
        "Autista e/o guida (in italiano) con regolare licenza abilitati per safari (in periodo di alta stagione l'autista e la guida possono essere la stessa persona)"
      ],
      excluded: [
        'Bevande durante i pasti nei campi/lodge',
        'Mance ed eventuali extra personali'
      ]
    },
    {
      thumbnail: 'tzavo_east_7.jpeg',
      imgFolder: '/assets/img/safaris/tzavo_east/',
      title: 'TZAVO EST SHORT',
      duration: '1 giorno',
      price: '',
      place: 'Tzavo East',
      varName: 'tzavoEastShort',
      imgsArray: ['tzavo_east_1.jpeg','tzavo_east_2.jpg','tzavo_east_3.jpeg','tzavo_east_4.jpg','tzavo_east_5.jpeg','tzavo_east_6.jpg','tzavo_east_7.jpeg'],
      programs: [
        "🚙 Partenza dal resort alle <strong>04:00</strong> del mattino.<br>Qualora non si è fatta la colazione ☕️, ci si potrà fermare  mezz'ora dopo al bar <i>That's Amore</i> - colazione non compreso nel safari da pagare a parte.<br>Verrà presa una scorciatoia che ci farà attraversare villaggi molto suggestivi e scorgere momenti di vita giornaliera della gente keniota.<br>Ingresso al parco verso le <strong>07:30</strong> per l'inizio del Safari.<br>Grazie al costante contatto con le altre guide potremo recarci dove sono stati avvistati gli animali.<br>🍽 Pranzo al Lodge/Campo tendato verso le 13:00/13:30.<br>Safari pomeridiano e visita a le cascate del fiume <strong>Galana</strong>.<br>Uscita dal parco alle 15:30.<br>Rientro al villaggio 🏬 alle <strong>18:30</strong>"
      ],
      dailyPlace: ['Tzavo East'],
      included: [
        'Tutti i trasferimenti a bordo di fuoristrada con tetto panoramico apribile',
        "Biglietto d'ingresso al parco Tsavo East",
        'Acqua minerale durante tutti i game drive',
        "Autista e/o guida (in italiano) con regolare licenza abilitati per safari (in periodo di alta stagione l'autista e la guida possono essere la stessa persona)"
      ],
      excluded: [
        'Bevande durante i pasti nei campi/lodge',
        'Mance ed eventuali extra personali'
      ]
    },
    {
      thumbnail: 'tzavo_east_2.jpg',
      imgFolder: '/assets/img/safaris/tzavo_east/',
      title: 'TZAVO EAST LONG',
      duration: '2 giorni e 1 notte',
      price: '',
      place: 'Tzavo East',
      varName: 'tzavoEastLong',
      imgsArray: ['tzavo_east_1.jpeg','tzavo_east_2.jpg','tzavo_east_3.jpeg','tzavo_east_4.jpg','tzavo_east_5.jpeg','tzavo_east_6.jpg','tzavo_east_7.jpeg','tzavo_east_8.jpeg'],
      programs: [
        "🚙 Partenza dal villaggio alle <strong>06:00</strong> del mattino.<br>Qualora non si è fatta la colazione ☕️, ci si potrà fermare  mezz'ora dopo al bar <i>That's Amore</i> - colazione non compreso nel safari da pagare a parte.<br>Dopo due ore e mezza circa, entreremo al parco verso le 10:00/10:30 ed inizieremo il Safari.<br>Pranzo 🍽 13:00/13:30.<br>. Dopo un poco di relax si ripartirà con il safari pomeridiano verso le 15:30.<br>Rientro al lodge o al campo tendato ⛺️ verso le <strong>18:30</strong>.<br>.Cena e pernottamento 🛏.<br><br>Solitamente verso le undici di sera vengono spente le luci, per permettere di vedere il cielo stellato. In silenzio si potrà ascoltare il suono della savana e vedere nelle pozze d'acqua gli elefanti 🐘, i bufali 🐃 e altri animali.",
        "Sveglia all'alba, colazione e alle <strong>7:00</strong> partenza per il game drive fino alle 10:00 /10:30 quando usciremo dal parco per dirigerci verso Watamu.<br>Arrivo previsto al vostro alloggio 🏬 verso le <strong>13:00/13:30</strong>"
      ],
      dailyPlace: ['Tzavo East', 'Tzavo East'],
      included: [
        'Tutti i trasferimenti a bordo di fuoristrada con tetto panoramico apribile',
        "Biglietto d'ingresso al parco Tsavo East",
        'Pernottamento in lodge/camp con pensione completa (escluse le bevande)',
        'Acqua minerale durante tutti i game drive',
        "Autista e/o guida (in italiano) con regolare licenza abilitati per safari (in periodo di alta stagione l'autista e la guida possono essere la stessa persona)"
      ],
      excluded: [
        'Bevande durante i pasti nei campi/lodge',
        'Mance ed eventuali extra personali'
      ]
    },
    {
      thumbnail: 'tzavo_east_9.jpeg',
      imgFolder: '/assets/img/safaris/tzavo_east/',
      title: 'TZAVO EAST FULL',
      duration: '2 giorni interi e 1 notte',
      price: '',
      place: 'Tzavo East',
      varName: 'tzavoEastFull',
      imgsArray: ['tzavo_east_1.jpeg','tzavo_east_2.jpg','tzavo_east_3.jpeg','tzavo_east_4.jpg','tzavo_east_5.jpeg','tzavo_east_6.jpg','tzavo_east_7.jpeg','tzavo_east_8.jpeg','tzavo_east_9.jpeg'],
      programs: [
        "🚙 Ore <strong>07:40/08:00</strong>, partenza dal vostro alloggio e dopo due ore e mezza di viaggio si arriverà all'ingresso del parco <strong>Tsavo East</strong>, dove faremo una sosta vicino al fiume per vedere coccodrilli🐊.<br>Ore 11:00 /11:30, entreremo al parco per cominciare il primo game drive e dirigerci verso l'alloggio <strong>Sentrim Tsavo</strong>.<br>Ore 12:30/13:00 sosta per il pranzo 🍽 al Sentrim Tsavo.<br>Un pò di riposo fino ore 15:00 per poi ripartire per l'altro game drive fino al tramonto.<br>Rientro al Sentrim Tsavo per la cena ed il pernottamento 🛏.",
        "Sveglia all'alba, colazione e alle 7 partenza per il game drive fino alle 11:00 /11:30 quando usciremo dal parco e ci dirigeremo  verso il ristorante per il pranzo - il biglietto di ingresso al parco dura 24 ore.<br>Ore 12:00/12:30 pranzo al Crocodile Camp.<br>Un pò di riposo fino ore 14:30, per poi dirigerci verso Watamu.<br>Arrivo previsto al vostro alloggio 🏬 verso le <strong>17:30</strong>"
      ],
      dailyPlace: ['Tzavo East','Tzavo East'],
      included: [
        'Tutti i trasferimenti a bordo di fuoristrada con tetto panoramico apribile',
        "Biglietto d'ingresso alle rovine di Gede con guida specializzata (in italiano)",
        "Biglietto d'ingresso al parco Tsavo East",
        'Pernottamento in lodge/camp con pensione completa (escluse le bevande)',
        'Acqua minerale durante tutti i game drive',
        "Autista e/o guida (in italiano) con regolare licenza abilitati per safari (in periodo di alta stagione l'autista e la guida possono essere la stessa persona)"
      ],
      excluded: [
        'Bevande durante i pasti nei campi/lodge',
        'Mance ed eventuali extra personali'
      ]
    },
    {
      thumbnail: 'tzavo_east_ambo_1.jpeg',
      imgFolder: '/assets/img/safaris/tzavo_east_ambo/',
      title: 'TZAVO EAST + AMBOSELI',
      duration: '3 giorni e 2 notti',
      price: '',
      place: 'Tzavo East + Amboseli',
      varName: 'tzavoEastAmbo',
      imgsArray: ['tzavo_east_ambo_1.jpeg','tzavo_east_ambo_2.jpg','tzavo_east_ambo_3.jpeg','tzavo_east_ambo_4.jpg','tzavo_east_ambo_5.jpeg','tzavo_east_ambo_6.jpg','tzavo_east_ambo_7.jpeg','tzavo_east_ambo_8.jpg','tzavo_east_ambo_9.jpeg','tzavo_east_ambo_10.jpg','tzavo_east_ambo_11.jpg','tzavo_east_ambo_12.jpg'],
      programs: [
        "🚙 Partenza dal villaggio alle <strong>06:00</strong> del mattino.<br>Qualora non si è fatta la colazione ☕️, ci si potrà fermare  mezz'ora dopo al bar <i>That's Amore</i> - colazione non compreso nel safari da pagare a parte.<br>Ingresso al parco <strong>Tzavo East</strong> verso le <strong>10:00/10:30</strong> ed inizio Safari.<br>Il pranzo 🍽 è previsto per le 13:00/13:30 e dopo un breve riposo si riparte alle 15:30 per il safari pomeridiano.<br>Rientro al lodge o al campo tendato ⛺️ verso le 18:30.<br>Cena e pernottamento 🛏.<br>Solitamente verso le undici di sera vengono spente le luci, per permettere di vedere il cielo stellato da lasciare senza fiato. Per non parlare dell'assoluto silenzio che permette di ascoltare il suono della savana, e la vista nelle pozze d'acqua adiacente al campo di elefanti 🐘, bufali 🐃 e altri animali.",
        "⏰ Sveglia alle <strong>06:00</strong> per ammirare l'alba e fare colazione ☕️.<br>Partenza per <strong>Amboseli</strong> alle <strong>07:00</strong> con arrivo previsto per le 12:00.<br>Pranzo 🍽 alle 13:30 circa, riposo e via con il safari pomeridiano alle 15:00, per ammirare il Kilimangiaro e molti animali e uccelli.<br>Rientro al lodge o al campo tendato ⛺️ verso le 18:30.<br>Cena e pernottamento 🛏.",
        "⏰ Sveglia alle <strong>06:00</strong> per la colazione ☕️ e partenza alle 07:00 per un ultimo giro nel parcoprima di ripartire.<br>Ripercorreremo la stessa strada dell'andata fermandoci per il pranzo 🍽 a <strong>Voi Town</strong> alle 13:00 circa.<br>Per il rientro passeremo  per il villaggio <strong>Kaloleni (tribù Giriama)</strong> dove vedremo le abitazioni caratteristiche della zona immerse in bellissimi panorami.<br>Rientro al resort 🏬 previsto per le <strong>18:30</strong> circa"
      ],
      dailyPlace: ['Tzavo East', 'Amboseli', 'Amboseli + villaggio Kaloleni'],
      included: [
        'Tutti i trasferimenti a bordo di fuoristrada con tetto panoramico apribile',
        "Biglietto d'ingresso al parco Amboseli",
        "Biglietto d'ingresso al parco Tsavo East",
        'Pernottamento in lodge/camp con pensione completa (escluse le bevande)',
        'Acqua minerale durante tutti i game drive',
        "Autista e/o guida (in italiano) con regolare licenza abilitati per safari (in periodo di alta stagione l'autista e la guida possono essere la stessa persona)"
      ],
      excluded: [
        'Bevande durante i pasti nei campi/lodge',
        'Mance ed eventuali extra personali'
      ]
    },
    {
      thumbnail: 'tzavo_east_taita_1.jpeg',
      imgFolder: '/assets/img/safaris/tzavo_east_taita/',
      title: 'TZAVO EAST + TAITA HILLS',
      duration: '3 giorni e 2 notti',
      price: '',
      place: 'Tzavo East + Taita Hills',
      varName: 'tzavoEastTaita',
      imgsArray: ['tzavo_east_taita_1.jpeg','tzavo_east_taita_2.jpg','tzavo_east_taita_3.jpeg','tzavo_east_taita_4.jpg','tzavo_east_taita_5.jpeg','tzavo_east_taita_6.jpeg','tzavo_east_taita_7.jpeg','tzavo_east_taita_8.jpg','tzavo_east_taita_9.jpg','tzavo_east_taita_10.jpg'],
      programs: [
        "🚙 Partenza dal villaggio alle <strong>06:00</strong> del mattino direzione <strong>Tzavo East National Park</strong>.<br>Ci fermeremo per una sosta al <strong>Crocodile Point</strong> sulla riva del fiume <strong>Galana</strong> alle 09:30 per camminare sulle sponde del fiume alla ricerca di coccodrilli 🐊, ippopotami 🦛, scimmie 🐵🐒 e cicogne marabou.<br>L'arrivo al Parco è previsto per le <strong>10:00</strong> - il biglietto del Parco ha validità per 24 ore dall'ingresso).<br>Dopo il fotosafari ci receremo al lodge/campo tendato - 12:30 - per l'assegnazione delle stanze/tende e fare pranzo 🍽. Pausa fino alle ore 16:00 circa quando poi partiremo per il secondo game drive fino al tramonto.<br>Verso le 18:00 rientro al lodge o campo tendato ⛺️ per la cena e il pernottamento 🛏.",
        "⏰ Sveglia alle <strong>06:00</strong> per la colazione ☕️ e partenza alle 06:30 per <strong>Riserva Taita Hills</strong>.<br>L'arrivo è previsto 4 ore dopo - 12:30 - al lodge/campo tendato, dove verranno assegnate le stanze, si mangerà 🍽 e ci sarà il tempo per un po' di relax.<br>Dalle 16:00 fino a tramonto - circa 18:00 - faremo il game drive pomeridiano per poi rientrare al campo per la cena.<br>Alle <strong>20:30</strong> ultimo game drive della giornata in notturna 🎆 con rientro previsto per le <strong>22:30</strong> per il pernottamento 🛏.",
        "⏰ Sveglia alle <strong>06:00</strong> per la colazione ☕️ e partenza alle 06:30.<br>Un ultimo safari prima di partire per il rientro.<br>Faremo una sosta per il pranzo verso le 12:30 per poi continuare il rientro, con arrivo previsto alle <strong>17:30</strong>."
      ],
      dailyPlace: ['Tzavo East','Taita Hills','Taita Hills'],
      included: [
        'Tutti i trasferimenti a bordo di fuoristrada con tetto panoramico apribile',
        "Biglietto d'ingresso al parco Taita Hills",
        "Biglietto d'ingresso al parco Tsavo East",
        'Pernottamento in lodge/camp con pensione completa (escluse le bevande)',
        'Acqua minerale durante tutti i game drive',
        "Autista e/o guida (in italiano) con regolare licenza abilitati per safari (in periodo di alta stagione l'autista e la guida possono essere la stessa persona)"
      ],
      excluded: [
        'Bevande durante i pasti nei campi/lodge',
        'Mance ed eventuali extra personali'
      ]
    },
    {
      thumbnail: 'tzawo_east_ambo_west_6.jpg',
      imgFolder: '/assets/img/safaris/tzawo_east_ambo_west/',
      title: 'TZAVO WEST + AMBOSELI + TZAVO EAST da Mombasa',
      duration: '4 giorni e 3 notti',
      price: '',
      place: 'Tzavo West + Amboseli + Tzavo East',
      varName: 'tzavoEastWestAmboFromMom',
      imgsArray: ['tzawo_east_ambo_west_1.jpeg','tzawo_east_ambo_west_2.jpg','tzawo_east_ambo_west_3.jpeg','tzawo_east_ambo_west_4.jpg','tzawo_east_ambo_west_5.jpg','tzawo_east_ambo_west_6.jpg','tzawo_east_ambo_west_7.jpg','tzawo_east_ambo_west_8.jpg'],
      programs: [
        "🛬Dall'aeroporto di Mombasa percorreremo la statale Mombasa/Nairobi e ci dirigeremo verso lo <strong>Tsavo West</strong> e, in base all'orario di arrivo, si potrà iniziare con il safari.<br>Arriveremo poi al campo tendato o lodge per il check-in, pranzare 🍽 e riposare un poco.<br>Ripartiremo per il game drive verso le <strong>15:00</strong> dirigendoci verso il <strong>Rhino Santuary</strong>, così chiamato perché è un facile punto di avvistamento dei rinoceronti 🦏. Rientro al lodge o al campo tendato verso le 18:30 per la cena ed il pernottamento 🛏.",
        "⏰ Sveglia alle <strong>07:00</strong> per la colazione ☕️ e poi partenza verso il parco di Amboseli.<br>Game drive fino alle 09:00 verso il <strong>Mzima Spring</strong>, dove si trovano le sorgenti del fiume <strong>Tsavo</strong>, popolate da ippopotami 🦛 e coccodrilli 🐊. Qui scenderemo per una passeggita di mezz'ora per poi giungere alle nere colate laviche - le più lunghe al mondo - denominata <strong>Yatta Plateau</strong>.<br>Arrivo al <strong>Parco Amboseli</strong> verso le <strong>12:00</strong> all'entrata <i>'Kimana Gate'</i>.<br>Il logde/campo tendato <strong>'Sentrim Amboseli'</strong> si trova vicino l'ingresso del parco: check-in, pranzo 🍽 ed un poco di riposo fino alle 14:30.<br>Partiremo quidni per il game drive alla ricerca degli animali che popolano la savana.<br>Verso le <strong>18:30</strong> torneremo al campo tendato/lodge per la cena ed il pernottamento 🛏.",
        "⏰ Sveglia alle <strong>06:00</strong>, la colazione ☕️, partenza alle 07:00 verso l'altro ingresso del parco di Amboseli - <strong>'Irimito'</strong> per il game drive.<br>Successivamente ci dirigeremo verso il <strong>Parco Tsavo Est</strong> e arriveremo verso le <strong>13:00</strong> al campo tendato/lodge per il consueto check-in, pranzo 🍽 e riposo.<br>Alle 15:00 ripartiremo per il game drive verso le zone migliori del parco - lago <strong>Aruba</strong> e <strong>Kanderi Swamp</strong> - fino al tramonto per poi far rientro al campo per la cena ed il pernottamento 🛏.<br>Vicino alla sala ristornate ci sono delle pozze di acqua dove molti animali vengono a giocare ed abbeverarsi.",
        "⏰ Sveglia alle <strong>05:45</strong> per un game drive speciale in cerca di felini molto propensi alla caccia 🦁🐆.<br>Alle 09:00 rientro per la colazione ☕️ e subito dopo ripartiremo per un altro game drive - o eventualmente si potrà optare per una sosta in piscina fino all'ora di pranzo.<br>Ci dirigeremo verso l'uscita del parco, vicino al fiume <strong>Galana</strong>, che attraversa tutta la savana fino a Malindi e a seconda della zona che attraversa prende un nome diverso: <i>Galana</i>, <i>Sabaki</i> e <i>Athi River</i>. Seguendo il fiume potremmo ammirare ippopotami 🦛 e coccodrilli 🐊.<br>Faremo anche un piccolo giro a piedi per vedere più da vicino coccodrilli, scimmie e vari tipi di uccelli.<br>Pranzo 🍽 verso le 13:30 per poi ripartire verso i rispettivi resort a Watamu 🏬, dove arriveremo alle 18:00 circa"
      ],
      dailyPlace: ['Tzavo West','Amboseli','Amboseli + Tzavo East', 'Tzavo East'],
      included: [
        'Tutti i trasferimenti a bordo di fuoristrada con tetto panoramico apribile',
        "Biglietto d'ingresso al parco Amboseli",
        "Biglietto d'ingresso al parco Tsavo East",
        "Biglietto d'ingresso al parco Tsavo West",
        'Pernottamento in lodge/camp con pensione completa (escluse le bevande)',
        'Acqua minerale durante tutti i game drive',
        "Autista e/o guida (in italiano) con regolare licenza abilitati per safari (in periodo di alta stagione l'autista e la guida possono essere la stessa persona)"
      ],
      excluded: [
        'Bevande durante i pasti nei campi/lodge',
        'Mance ed eventuali extra personali'
      ]
    },
    {
      thumbnail: 'tzawo_east_ambo_west_2.jpg',
      imgFolder: '/assets/img/safaris/tzawo_east_ambo_west/',
      title: 'TZAVO WEST + AMBOSELI + TZAVO EAST da Watamu',
      duration: '4 giorni e 3 notti',
      price: '',
      place: 'Tzavo West + Amboseli + Tzavo East',
      varName: 'tzavoEastWestAmboFromWat',
      imgsArray: ['tzawo_east_ambo_west_1.jpeg','tzawo_east_ambo_west_2.jpg','tzawo_east_ambo_west_3.jpeg','tzawo_east_ambo_west_4.jpg','tzawo_east_ambo_west_5.jpg','tzawo_east_ambo_west_6.jpg','tzawo_east_ambo_west_7.jpg','tzawo_east_ambo_west_8.jpg'],
      programs: [
        "🚙 Partenza alle 04:00 dal vostro villaggio.<br>Faremo colazione ☕️ tutti insieme per poi procedere, percorrendo la strada principale che porta da Malindi fino al raccordo per Mombasa, fino alla città di <strong>Voi</strong>, quindi arriveremo all'entrata dello <strong>Tsavo Ovest (Tsavo Riva)</strong> verso le <strong>09:00</strong> circa.<br>Questo è il parco più caratteristico per la presenza di montagne, laghi e fiumi, dove risiedono le famiglie più numerose di animali ed in particolare di felini 🦁, data la presenza di tanti alberi.<br>Inizieremo il safari per vedere gli animali della savana - elefanti 🐘, zebre 🦓, giraffe 🦒, leoni 🦁, ghepardi 🐆, leopardi. Verso le 13:30 arriveremo al campo tendato/lodge per il check-in, pranzare 🍽 e riposare un poco. Ripartiremo per il game drive verso le 15:30 dirigendoci verso il <strong>Rhino Santuary</strong>, così chiamato perché è un facile punto di avvistamento dei rinoceronti 🦏. Rientro al lodge/campo verso le 18:30 per la cena ed il pernottamento 🛏.",
        "⏰ Sveglia alle <strong>06:00</strong>, colazione ☕️ e partenza verso le 07:00 per il game drive fino alle 09:00. Ci dirigeremo verso il <strong>Mzima Spring</strong>, dove si trovano le sorgenti del fiume <strong>Tsavo</strong>, popolate da ippopotami 🦛 e coccodrilli 🐊. Uscendo dal parco, prenderemo la strada che attraversa il Parco Tsavo East e Tsavo West in direzione del Monte Kilimanjaro e del <strong>Parco Amboseli</strong>, dove arriveremo verso le <strong>12:00</strong> all'entrata <i>'Irimito'</i>. Altro game drive fino alle 13:30, quando arriveremo al campo tendato/lodge per il check-in, pranzo 🍽 ed un poco di meritato riposo fino alle 15:30.<br>Ripartiremo per il successivo game drive verso il lago <strong>Amboseli</strong> per vedere ippopotami 🦛 e bufali 🐃 salendo verso l'Amboseli Hill per ammirare il panorama fino al tramonto. Verso le 18:30 torneremo al campo/lodge per la cena ed il pernottamento 🛏.",
        "⏰ Sveglia alle <strong>06:00</strong>, colazione ☕️ e partenza verso le 07:00 per il game drive fino alle 09:00 per poi dirigerci verso il <strong>Parco Tsavo East</strong> all'entrata <i>'Manyani Gate'</i> che arriveremo verso le 11:00.<br>Inizieremo subito il game drive fino alle 13:30 quando arriveremo al campo tendato/lodge per il consuento check-in, pranzo 🍽 e riposo.<br>Alle 15:30 ripartiremo per il game drive alla ricerca degli animali verso le zone migliori del parco - lago <i>Aruba</i> e <i>Kanderi Swamp</i> - fino al tramonto per poi far rientro al campo tendato/lodge per la cena ed il pernottamento 🛏.",
        "⏰ Sveglia alle <strong>06:00</strong>, colazione ☕️ e partenza alle 07:00 per il game drive nel parco, verso le cascate <strong>Lugards Falls</strong> che si trovano nel fiume <strong>Galana</strong> che attraversa tutta la savana fino a Malindi e, a seconda della zona che attraversa, prende un nome diverso. Lo stesso fiume viene chiamato infatti in 3 modi diversi: <i>Galana</i>, <i>Sabaki</i> e <i>Athi River</i>. Il giro continuerà fino alle 10:30/11:00 seguendo il fiume nei diversi punti di avvistamento degli animali come ippopotami 🦛, coccodrilli 🐊.<br>Faremo anche un piccolo giro a piedi per vedere coccodrilli 🐊, scimmie 🐒 e vari tipi di uccelli.<br>Pranzo 🍽 e verso le 14:00 ripartiremo verso Watamu 🏬, dove arriveremo verso le <strong>16:30</strong> circa."
      ],
      dailyPlace: ['Tzavo West','Amboseli','Amboseli + Tzavo East', 'Tzavo East'],
      included: [
        'Tutti i trasferimenti a bordo di fuoristrada con tetto panoramico apribile',
        "Biglietto d'ingresso al parco Amboseli",
        "Biglietto d'ingresso al parco Tsavo East",
        "Biglietto d'ingresso al parco Tsavo West",
        'Pernottamento in lodge/camp con pensione completa (escluse le bevande)',
        'Acqua minerale durante tutti i game drive',
        "Autista e/o guida (in italiano) con regolare licenza abilitati per safari (in periodo di alta stagione l'autista e la guida possono essere la stessa persona)"
      ],
      excluded: [
        'Bevande durante i pasti nei campi/lodge',
        'Mance ed eventuali extra personali'
      ]
    },
    {
      thumbnail: 'ambo_taita_4.jpeg',
      imgFolder: '/assets/img/safaris/ambo_taita/',
      title: 'AMBOSELI + TAITA HILLS',
      duration: '3 giorni e 2 notti',
      price: '',
      place: 'Amboseli + Taita Hills',
      varName: 'amboTaita',
      imgsArray: ['ambo_taita_1.jpeg','ambo_taita_2.jpeg','ambo_taita_3.jpeg','ambo_taita_4.jpeg','ambo_taita_5.jpeg','ambo_taita_6.jpeg'],
      programs: [
        "🚙 Partenza alle 04:00 dal vostro villaggio direzione <strong>Riserva Taita Hills</strong>.<br>Alle 12:30 arrivo alla riserva e pranzo 🍽 al lodge/campo prescelto. Dopo una pausa, alle 16:00, partenza per il safari fino al tramonto.<br>Rientro al campo alle 18:00 per la cena.<br>Alle ore <strong>20:30</strong> si esce per il game drive notturno.<br>Rientro al campo per il pernottamento 🛏 previsto per le 22:30.",
        "⏰ Sveglia alle <strong>06:00</strong>, colazione ☕️ e partenza per le 06:30 diretti al <strong>Parco Nazionale Amboseli</strong>.<br>Alle 12:30 è previsto l'arrivo al campo/lodge, assegnazione delle camere e consumazione del pranzo 🍽.<br>Alle 16:00 safari fino al tramonto - verso le 18:00 - per poi rientrare al campo per la cena e pernottamento 🛏.",
        "⏰ Sveglia alle <strong>06:00</strong>, colazione ☕️ e mezz'ora dopo ultimo safari prima del rientro.<br>Usciremo dal parco verso le 09:30 per iniziare il rientro.<br>Pausa pranzo 🍽 alle 12:30 e arrivo in hotel 🏬 verso le <strong>17:30</strong>."
      ],
      dailyPlace: ['Taita Hills','Amboseli','Amboseli'],
      included: [
        'Tutti i trasferimenti a bordo di fuoristrada con tetto panoramico apribile',
        "Biglietto d'ingresso al parco Amboseli",
        "Biglietto d'ingresso al parco Taita Hills",
        'Pernottamento in lodge/camp con pensione completa (escluse le bevande)',
        'Acqua minerale durante tutti i game drive',
        "Autista e/o guida (in italiano) con regolare licenza abilitati per safari (in periodo di alta stagione l'autista e la guida possono essere la stessa persona)"
      ],
      excluded: [
        'Bevande durante i pasti nei campi/lodge',
        'Mance ed eventuali extra personali'
      ]
    },
    {
      thumbnail: 'masai_mara_3.jpeg',
      imgFolder: '/assets/img/safaris/masai_mara/',
      title: 'MASAI MARA',
      duration: '3 giorni e 2 notti',
      price: '',
      place: 'Masai Mara',
      varName: 'masaiMara',
      imgsArray: ['masai_mara_1.jpeg','masai_mara_2.jpeg','masai_mara_3.jpeg','masai_mara_4.jpeg','masai_mara_5.jpeg'],
      programs: [
        "🚙 Partenza alle 07:30 dal vostro villaggio direzione ed arrivo all'aeroporto di Malindi per le 08:00 - l'orario del volo interno potrebbe variare a seconda del periodo - imbarco e volo 🛫 di 2 ore circa.<br>Arrivati all'aeroporto 🛬 del <strong>Masai Mara</strong>, si prende la jeep per il game drive fino alle 13:30, quando arriveremo al lodge/campo tendato. Check-in, pranzo 🍽 e relax fino alle 15:30.<br>Altro game drive fino al tramonto per poi rientrare al campo per cena e pernottamento 🛏.",
        "⏰ Sveglia alle <strong>06:00</strong>, colazione ☕️ e alle 07:00 partenza per un game drive.<br>Durante i mesi di Luglio, Agosto e Settembre di può ammirare il fenomeno delle migrazioni dal <strong>Parco Serengeti</strong> al <strong>Masai Mara</strong>, quindi è il periodo migliore per visitare questo Parco. Durante i mesi di Dicembre e Gennaio il fenomeno delle migrazioni è dal Masai Mara verso il Parco Serengeti. Chi deciderà di visitare questo parco durante questi mesi avrà la possibilità di vedere gli animali cacciare, essendo il periodo più ricco di animali - caccia dei coccodrilli e dei felini. Collegati alla caccia ci saranno anche branchi di iene e avvoltoi che si cibano dei resti lasciati dai grandi felini.<br>Alle 13.00 pranzeremo 🍽 in mezzo alla savana, sulle sponde del fiume <strong>Mara River</strong>. Dopo il pranzo un po' di relax e poi fino al tramonto altro game drive.<br>Rientro al campo, cena e pernottamento 🛏.",
        "⏰ Sveglia alle <strong>06:00</strong>, colazione ☕️ e poi partenza verso le 07:00 per il game drive.<br>Gireremo diverse zone del parco ricche di animali fino alle 12:00, quando torneremo al campo per il pranzo 🍽.<br>Ripartiremo alle 13:30 per raggiungere l'aeroporto, dove partiremo verso le 14:00 per Malindi.<br>Rientro ai rispettivi villaggi 🏬 verso le <strong>17:00</strong>"
      ],
      dailyPlace: ['Malindi aeroporto + Masai Mara','Masai Mara','Masai Mara + Malindi aeroporto'],
      included: [
        'Tutti i trasferimenti a bordo di fuoristrada con tetto panoramico apribile',
        "Biglietto aereo",
        'Assicurazione',
        "Biglietto d'ingresso al parco Masai Mara",
        'Macchina da/per aeroporto',
        'Pernottamento in lodge/camp con pensione completa (escluse le bevande)',
        'Acqua minerale durante tutti i game drive',
        "Autista e/o guida (in italiano) con regolare licenza abilitati per safari (in periodo di alta stagione l'autista e la guida possono essere la stessa persona)"
      ],
      excluded: [
        'Bevande durante i pasti nei campi/lodge',
        'Mance ed eventuali extra personali'
      ]
    },
    {
      thumbnail: 'mara_nakuru_2.jpg',
      imgFolder: '/assets/img/safaris/masai_mara_nakuru/',
      title: 'MASAI MARA + LAGO NAKURU',
      duration: '4 giorni e 3 notti',
      price: '',
      place: 'Masai Mara + lago Nakuru',
      varName: 'maraNakuru',
      imgsArray: ['mara_nakuru_1.jpeg','mara_nakuru_2.jpg','mara_nakuru_3.jpg','mara_nakuru_4.jpg','mara_nakuru_5.jpg','mara_nakuru_6.jpg','mara_nakuru_7.jpeg','mara_nakuru_8.jpg','mara_nakuru_9.jpg'],
      programs: [
        "🛫 Partenza dall'aeroporto di Nairobi verso il Masai Mara - volo di circa 2 ore. Nel recarsi verso il parco faremo sosta al <strong>GreatRift Valley</strong> per fare foto - la Rift Valley attraversa tutto il Kenya fino alla Tanzania.<br>Successiva sosta per il pranzo 🍽 nella cittadina di <strong>Narok</strong>, a metà strada tra il Masai Mara e Nairobi. Arrivo al Parco Masai Mara per iniziare il game drive.<br>Durante i mesi di Luglio, Agosto e Settembre di può ammirare il fenomeno delle migrazioni dal <strong>Parco Serengeti</strong> al <strong>Masai Mara</strong>, quindi è il periodo migliore per visitare questo Parco. Durante i mesi di Dicembre e Gennaio il fenomeno delle migrazioni è dal Masai Mara verso il Parco Serengeti. Chi deciderà di visitare questo parco durante questi mesi avrà la possibilità di vedere gli animali cacciare, essendo il periodo più ricco di animali - caccia dei coccodrilli e dei felini. Collegati alla caccia ci saranno anche branchi di iene e avvoltoi che si cibano dei resti lasciati dai grandi felini.<br>Arrivo al lodge/campo tendato per check-in, cena e pernottamento 🛏.",
        "⏰ Sveglia alle <strong>05:30</strong>, colazione ☕️ partenza per il game drive all'alba. Staremo tutto il giorno fuori, dall'alba al tramonto, per goderci i momenti più belli della vita nella savana.<br>Pranzeremo 🍽 verso le 13:00 in mezzo alla savana, sulle sponde del fiume <strong>Mara River</strong>. Dopo il pranzo un po' di relax e nuovo game drive fino al tramonto.<br>Rientro al campo, cena e pernottamento 🛏.",
        "⏰ Sveglia alle <strong>06:00</strong> e colazione ☕️ per dirigerci al <strong>lago Nakuru</strong>, conosciuto in tutto il mondo per l'infinità di fenicotteri rosa 🦩 e per le varietà di uccelli che lo popolano. Il lago è circondato da boschi e colline rocciose abitati da rinoceronti 🦏 - sia neri che bianchi, leoni 🦁, giraffe 🦒 e molti altri animali.<br>Verso pranzo arriveremo al campo tendato/lodge. Dopo le consuete operazioni di check in, pranzeremo 🍽 e potremo riposarci un pò fino alle 15:00.<br>Nel pomeriggio safari fotografico al lago Nakuru fino al tramonto. Rientro al campo per la cena ed il pernottamento 🛏.",
        "⏰ Sveglia alle <strong>06:00</strong>, colazione ☕️ e partenza per l'ultimo game drive.<br>Usciti dal parco ci dirigeremo verso la città di Nairobi, capitale del Kenya, per raggiungere l'aeroporto, per chi ha il volo, oppure l'hotel 🏬."
      ],
      dailyPlace: ['Malindi aeroporto + Masai Mara','Masai Mara','Masai Mara + lago Nakuru', 'Masai Mara + Malindi aeroporto'],
      included: [
        'Tutti i trasferimenti a bordo di fuoristrada con tetto panoramico apribile',
        'Assicurazione',
        "Biglietto d'ingresso al parco Masai Mara",
        "Biglietto d'ingresso al lago Nakuru",
        'Macchina da/per aeroporto',
        'Pernottamento in lodge/camp con pensione completa (escluse le bevande)',
        'Acqua minerale durante tutti i game drive',
        "Autista e/o guida (in italiano) con regolare licenza abilitati per safari (in periodo di alta stagione l'autista e la guida possono essere la stessa persona)"
      ],
      excluded: [
        'Bevande durante i pasti nei campi/lodge',
        'Mance ed eventuali extra personali'
      ]
    },
    {
      thumbnail: 'naku_mara_ambo_tza_we_2.jpeg',
      imgFolder: '/assets/img/safaris/nakuru_mara_ambo_tzawo_we/',
      title: 'LAGO NAKURU + MASAI MARA + AMBOSELI + TZAVO WEST + TZAVO EAST',
      duration: '7 giorni e 6 notti',
      price: '',
      place: 'Masai Mara + Amboseli + Tzavo West + Tzavo East',
      varName: 'maraNakuruAmboTzavoWE',
      imgsArray: ['naku_mara_ambo_tza_we_1.jpeg','naku_mara_ambo_tza_we_2.jpeg','naku_mara_ambo_tza_we_3.jpeg','naku_mara_ambo_tza_we_4.jpeg','naku_mara_ambo_tza_we_5.jpeg','naku_mara_ambo_tza_we_6.jpeg','naku_mara_ambo_tza_we_7.jpeg','naku_mara_ambo_tza_we_8.jpeg','naku_mara_ambo_tza_we_9.jpeg'],
      programs: [
        "🚙 Partenza per Nairobi, da qui si parte subito per il <strong>lago Naruku</strong> e si inizia il safari in jeep fino alle 13:00.<br>Si pranza 🍽 e ci si riposa fino alle 15:30, quando si riparte per il safari fino al tramonto.<br>Si rientra per la cena e pernottamento 🛏 presso il lodge.",
        "⏰ Sveglia alle <strong>06:00</strong>, colazione ☕️ e si parte per il parco nazionale del <strong>Masai Mara</strong>.<br>Arrivati si inzia con il safari fino a pranzo 🍽.<br>Successivamente ci si riposa e nel pomeriggio si riparte per il safari fino al tramonto.<br>Al rientro, cena e pernottamento 🛏 presso il lodge.",
        "Partiremo al mattino presto per un primo safari fotografico, rientro per la colazione ☕️ e poi si riparte per il secondo fotosafari.<br>Pranzeremo 🍽 nella zona attrezzata lungo il fiume <strong>Mara</strong> per poi ripartire con il safari fino al tramonto.<br>Al rientro, cena e pernottamento 🛏 presso il lodge.",
        "Dopo la colazione ☕️ si parte per l'<strong>Amboseli</strong>.<br>All'arrivo si pranza 🍽 e nel pomeriggio si parte con il safari fino la tramonto.<br>Al rientro, cena e pernottamento 🛏 presso il lodge.",
        "Partenza dall'Amboseli, dopo colazione ☕️, per raggiungere il parco nazionale <strong>Tzavo West</strong>. All'arrivo si parte con il safari fino a pranzo 🍽.<br>Nel pomeriggio secondo safari fino al tramonto, per poi rientrare per la cena e il pernottamento 🛏 presso il lodge.",
        "Dopo colazione ☕️ si parte per raggiungere il parco nazionale <strong>Tzavo East</strong>. All'arrivo si và direttamnte a pranzo 🍽.<br>Nel pomeriggio si parte per il safari fino al tramonto; si rientra per la cena e pernottamento 🛏 presso il lodge.",
        "Si parte dopo la prima colazione ☕️ per l'ultimo game drive fino alle 11:00.<br>Si ritorna al proprio resort 🏬 passando per diversi villaggi, arrivando alle <strong>13:00</strong> circa."
      ],
      dailyPlace: ['lago Nakuru','Masai Mara','Masai Mara','Amboseli','Tzavo West','Tzavo East','Tzavo East'],
      included: [
        'Tutti i trasferimenti a bordo di fuoristrada con tetto panoramico apribile',
        "Biglietto d'ingresso al parco Tsavo West",
        "Biglietto d'ingresso al parco Tsavo East",
        "Biglietto d'ingresso al parco Amboseli",
        "Biglietto d'ingresso al lago Nakuru",
        'Pernottamento in lodge/camp con pensione completa (escluse le bevande)',
        'Acqua minerale durante tutti i game drive',
        "Autista e/o guida (in italiano) con regolare licenza abilitati per safari (in periodo di alta stagione l'autista e la guida possono essere la stessa persona)"
      ],
      excluded: [
        'Bevande durante i pasti nei campi/lodge',
        'Mance ed eventuali extra personali'
      ]
    }
  ]

  safarisNairoby = [
    {
      thumbnail: 'masai_mara_4.jpeg',
      imgFolder: '/assets/img/safaris/masai_mara/',
      title: 'MASAI MARA',
      duration: '3 giorni e 2 notti',
      price: '',
      place: 'Masai Mara',
      varName: 'masaiMaraNairobi',
      imgsArray: ['masai_mara_1.jpeg','masai_mara_2.jpeg','masai_mara_3.jpeg','masai_mara_4.jpeg','masai_mara_5.jpeg'],
      programs: [
        "🚙 Partenza dal vostro villaggio alle ore <strong>07:30</strong> diretti all'aeroporto di Malindi, dove decolleremo 🛫 verso le 08:00 - l'orario potrebbe variare a seconda del periodo.<br>Dopo 2 ore circa di volo atterriamo 🛬 all'aeroporto del <strong>Masai Mara</strong>. Si prende la jeep per il game drive fino alle 13:30 quando arriveremo al lodge/campo tendato per le operazioni di check-in, il pranzo 🍽 e relax fino alle 15:30.<br>Altro game drive fino al tramonto.<br>Rientro al campo tendato/lodge, cena e pernottamento 🛏.",
        "⏰ Sveglia alle <strong>06:00</strong>, colazione ☕️ e partenza per il game drive.<br>Durante i mesi di Luglio, Agosto e Settembre di può ammirare il fenomeno delle migrazioni dal <strong>Parco Serengeti</strong> al <strong>Masai Mara</strong>, quindi è il periodo migliore per visitare questo Parco. Durante i mesi di Dicembre e Gennaio il fenomeno delle migrazioni è dal Masai Mara verso il Parco Serengeti. Chi deciderà di visitare questo parco durante questi mesi avrà la possibilità di vedere gli animali cacciare, essendo il periodo più ricco di animali - caccia dei coccodrilli e dei felini. Collegati alla caccia ci saranno anche branchi di iene e avvoltoi che si cibano dei resti lasciati dai grandi felini.<br>Alle 13.00 pranzeremo 🍽 in mezzo alla savana, sulle sponde del fiume <strong>Mara River</strong>. Dopo il pranzo un po' di relax e poi fino al tramonto altro game drive.<br>Rientro al campo tendato/lodge, cena e pernottamento 🛏.",
        "⏰ Sveglia alle <strong>06:00</strong> per la colazione ☕️ e poi partenza verso le 07:00 per il game drive.<br>Gireremo diverse zone del parco ricche di animali fino alle 12:00, quando torneremo al lodge/campo tendato per il pranzo 🍽. Ripartiremo alle 13:30 per raggiungere l'aeroporto, dove partiremo alle 14:00 per Malindi.<br>Arriveremo al villaggio 🏬 verso le <strong>17:00</strong>"
      ],
      dailyPlace: ['Malindi aeroporto + Masai Mara','Masai Mara','Masai Mara + Malindi aeroporto'],
      included: [
        'Tutti i trasferimenti a bordo di fuoristrada con tetto panoramico apribile',
        "Biglietto aereo",
        'Assicurazione',
        "Biglietto d'ingresso al parco Masai Mara",
        'Macchina da/per aeroporto',
        'Pernottamento in lodge/camp con pensione completa (escluse le bevande)',
        'Acqua minerale durante tutti i game drive',
        "Autista e/o guida (in italiano) con regolare licenza abilitati per safari (in periodo di alta stagione l'autista e la guida possono essere la stessa persona)"
      ],
      excluded: [
        'Bevande durante i pasti nei campi/lodge',
        'Mance ed eventuali extra personali'
      ]
    },
    {
      thumbnail: 'mara_ambo_tzawo_e_7.jpeg',
      imgFolder: '/assets/img/safaris/mara_ambo_tzavo_e/',
      title: 'MASAI MARA + NAIROBI + AMBOSELI + TSAVO EAST',
      duration: '6 giorni e 5 notti',
      price: '',
      place: 'Masai Mara + Nairobi + Amboseli + Tzavo East',
      varName: 'maraNaiAmboTzavo',
      imgsArray: ['mara_ambo_tzawo_e_1.jpeg','mara_ambo_tzawo_e_2.jpg','mara_ambo_tzawo_e_3.jpeg','mara_ambo_tzawo_e_4.jpg','mara_ambo_tzawo_e_5.jpeg','mara_ambo_tzawo_e_6.jpeg','mara_ambo_tzawo_e_7.jpeg','mara_ambo_tzawo_e_8.jpg'],
      programs: [
        "🚙 ci dirigiamo con il fuoristrada al parco <strong>Masai Mara</strong>, facendo sosta al <strong>GreatRift Valley</strong> per fotografare ippopotami 🦛 e coccodrilli 🐊 - la <i>Rift Valley</i> attraversa tutto il Kenya fino alla Tanzania.<br>Arrivo al lodge/campo tendato per le 13:00 per le operazioni di check-in, il pranzo 🍽 e via con un game drive fino alle 18:30.<br>Rientro al campo tendato/lodge, cena e pernottamento 🛏.",
        "⏰ Sveglia alle <strong>05:30</strong>, colazione ☕️ e partenza per il game drive.<br>Durante i mesi di Luglio, Agosto e Settembre di può ammirare il fenomeno delle migrazioni dal <strong>Parco Serengeti</strong> al <strong>Masai Mara</strong>, quindi è il periodo migliore per visitare questo Parco. Durante i mesi di Dicembre e Gennaio il fenomeno delle migrazioni è dal Masai Mara verso il Parco Serengeti. Chi deciderà di visitare questo parco durante questi mesi avrà la possibilità di vedere gli animali cacciare, essendo il periodo più ricco di animali - caccia dei coccodrilli e dei felini. Collegati alla caccia ci saranno anche branchi di iene e avvoltoi che si cibano dei resti lasciati dai grandi felini.<br>Staremo tutto il giorno fuori, dall'alba al tramonto, per goderci i momenti più belli della vita nella savana.<br>Pranzeremo 🍽 verso le 13:00 in mezzo alla savana, sulle sponde del fiume <strong>Mara River</strong>. Dopo il pranzo un po' di relax e nuovo game drive fino al tramonto.<br>Rientro al campo, cena e pernottamento 🛏.",
        "⏰ Sveglia alle <strong>06:00</strong>, colazione ☕️ e partenza per il game drive che durerà fino a pranzo 🍽 e ci condurrà all'esterno del parco, per dirigerci poi verso <strong>Nairobi</strong>, dove ceneremo e dormiremo 🛏 <i>- da decidere</i>.",
        "⏰ Sveglia alle <strong>06:30</strong>, colazione ☕️ e partenza verso il parco <strong>Amboseli</strong>, in direzione del Monte <strong>Kilimanjaro</strong>.<br>Arriveremo al campo tendato/lodge per il check-in, pranzo 🍽 ed un poco di meritato riposo fino alle 14:30.<br>Ripartiremo per il successivo game drive fino a sera quando torneremo per la cena e pernottamento 🛏 al <strong>Sentrim Amboseli</strong>.",
        "⏰ Sveglia alle <strong>06:00</strong>, colazione ☕️ e via per game drive che ci condurrà poi verso il parco <strong>Tsavo East</strong>, con arrivo previsto alle 12:30 al <strong>Sentrim Tarhi campper</strong> per le operazioni di check-in e pranzo 🍽.<br>Dopo pranzo altro game drive fino al tramonto per poi far rientro al campo tendato/lodge per la cena ed il pernottamento 🛏.",
        "⏰ Sveglia alle <strong>05:30</strong> e subito partenza per il game drive mattutino.<br>Alle 09:00 rientro per la colazione ☕️ per poi ripartire con un altro game drive - o eventuale sosta in piscina fino ad ora di pranzo.<br>Ci dirigeremo verso l'uscita del parco e sosteremo al <strong>Galana Crocodile</strong> camp per il pranzo 🍽.<br>Il fiume <strong>Galana</strong> attraversa tutta la savana fino a Malindi, e a seconda della zona che attraversa prende un nome diverso: <i>Galana</i>, <i>Sabaki</i> e <i>Athi River</i>. Seguendo il fiume potremmo ammirare ippopotami 🦛 e coccodrilli 🐊.<br>Tempo permettendo potremmo ammirare la <strong>Galana conservatory</strong>, per poi proseguire verso Watamu 🏬, dove arriveremo verso le 18:00."
      ],
      dailyPlace: ['Malindi + Masai Mara','Masai Mara','Masai Mara + Nairobi','Amboseli','Amboseli + Tzavo East','Tzavo East'],
      included: [
        'Tutti i trasferimenti a bordo di fuoristrada con tetto panoramico apribile',
        "Biglietto d'ingresso al parco Amboseli",
        "Biglietto d'ingresso al parco Masai Mara",
        "Biglietto d'ingresso al parco Tsavo East",
        'Pernottamento in lodge/camp con pensione completa (escluse le bevande)',
        'Acqua minerale durante tutti i game drive',
        "Autista e/o guida (in italiano) con regolare licenza abilitati per safari (in periodo di alta stagione l'autista e la guida possono essere la stessa persona)"
      ],
      excluded: [
        'Bevande durante i pasti nei campi/lodge',
        'Mance ed eventuali extra personali'
      ]
    },
    {
      thumbnail: 'mara_nakuru_ambo_1.jpeg',
      imgFolder: '/assets/img/safaris/mara_nakuru_ambo/',
      title: 'MASAI MARA + LAGO NAKURU + AMBOSELI ',
      duration: '5 giorni e 4 notti',
      price: '',
      place: 'Masai Mara + lago Nakuru + Amboseli',
      varName: 'maraNakuAmbo',
      imgsArray: ['mara_nakuru_ambo_1.jpeg','mara_nakuru_ambo_2.jpg','mara_nakuru_ambo_3.jpg','mara_nakuru_ambo_4.jpg','mara_nakuru_ambo_5.jpg','mara_nakuru_ambo_6.jpg'],
      programs: [
        "🚙 Ci dirigiamo con il fuoristrada al parco <strong>Masai Mara</strong>, facendo sosta al <strong>GreatRift Valley</strong> per fotografare ippopotami 🦛 e coccodrilli 🐊 - la <i>Rift Valley</i> attraversa tutto il Kenya fino alla Tanzania.<br>Arrivo al lodge/campo tendato per le 13:00 per le operazioni di check-in, il pranzo 🍽 e via con un game drive fino alle 18:30.<br>Rientro al campo tendato/lodge, cena e pernottamento 🛏.",
        "⏰ Sveglia alle <strong>05:30</strong>, colazione ☕️ e partenza per il game drive.<br>Durante i mesi di Luglio, Agosto e Settembre di può ammirare il fenomeno delle migrazioni dal <strong>Parco Serengeti</strong> al <strong>Masai Mara</strong>, quindi è il periodo migliore per visitare questo Parco. Durante i mesi di Dicembre e Gennaio il fenomeno delle migrazioni è dal Masai Mara verso il Parco Serengeti. Chi deciderà di visitare questo parco durante questi mesi avrà la possibilità di vedere gli animali cacciare, essendo il periodo più ricco di animali - caccia dei coccodrilli e dei felini. Collegati alla caccia ci saranno anche branchi di iene e avvoltoi che si cibano dei resti lasciati dai grandi felini.<br>Staremo tutto il giorno fuori, dall'alba al tramonto, per goderci i momenti più belli della vita nella savana.<br>Pranzeremo 🍽 verso le 13:00 in mezzo alla savana, sulle sponde del fiume <strong>Mara River</strong>. Dopo il pranzo un po' di relax e nuovo game drive fino al tramonto.<br>Rientro al campo, cena e pernottamento 🛏.",
        "⏰ Sveglia alle <strong>06:00</strong>, colazione ☕️ e partenza verso il <strong>lago Nakuru</strong>, conosciuto in tutto il mondo per l'infinità di fenicotteri rosa 🦩 e per le varietà di uccelli che lo popolano. Il lago è circondato da boschi e colline rocciose abitati da rinoceronti 🦏 sia neri che bianchi, leoni 🦁, giraffe 🦒 e molti altri animali.<br>Verso pranzo arriveremo al campo tendato/lodge per le consuete operazioni di check in, mangiare 🍽 e riposarci un pò fino alle 15:00.<br>Nel pomeriggio safari fotografico al lago Nakuru fino al tramonto.<br> Rientro al campo per la cena ed il pernottamento 🛏.",
        "⏰ Sveglia alle <strong>06:30</strong> e subito partenza per il game drive mattutino.<br>Alle 08:30 rientro per la colazione ☕️ per poi ripartire verso le 09:00 in direzione <strong>Nairobi</strong>, dove ci fermeremo per pranzo 🍽.<br>Dopo pranzo partiremo verso il parco <strong>Amboseli</strong>, dove arriveremo per le 16:00 e inizieremo il game drive.<br>Alle 18:30 arriveremo al lodge/campo tendato per cena e pernottamento 🛏.",
        "⏰ Sveglia alle <strong>06:00</strong>, colazione ☕️ e ultimo game drive fino all'ora di pranzo.<br>Rientro al campo per il pranzo 🍽 per poi partire verso Nairobi, dove arriveremo nel pomeriggio e vi riaccompagneremo al vostro hotel 🏬."
      ],
      dailyPlace: ['Nairobi + Masai Mara','Masai Mara','lago Nakuru','Masai Mara + Amboseli','Amboseli'],
      included: [
        'Tutti i trasferimenti a bordo di fuoristrada con tetto panoramico apribile',
        "Biglietto d'ingresso al parco Amboseli",
        "Biglietto d'ingresso al parco Masai Mara",
        "Biglietto d'ingresso al parco lago Nakuru",
        'Pernottamento in lodge/camp con pensione completa (escluse le bevande)',
        'Acqua minerale durante tutti i game drive',
        "Autista e/o guida (in italiano) con regolare licenza abilitati per safari (in periodo di alta stagione l'autista e la guida possono essere la stessa persona)"
      ],
      excluded: [
        'Bevande durante i pasti nei campi/lodge',
        'Mance ed eventuali extra personali'
      ]
    },
    {
      thumbnail: 'mara_nakuru_7.jpeg',
      imgFolder: '/assets/img/safaris/masai_mara_nakuru/',
      title: 'MASAI MARA + LAGO NAKURU',
      duration: '4 giorni e 3 notti',
      price: '',
      place: 'Masai Mara + lago Nakuru',
      varName: 'maraNakuruNairo',
      imgsArray: ['mara_nakuru_1.jpeg','mara_nakuru_2.jpg','mara_nakuru_3.jpg','mara_nakuru_4.jpg','mara_nakuru_5.jpg','mara_nakuru_6.jpg','mara_nakuru_7.jpeg','mara_nakuru_8.jpg','mara_nakuru_9.jpg'],
      programs: [
        "🛫 Partenza dall'aeroporto di Nairobi verso il <strong>Masai Mara</strong>. Nel tragitto faremo sosta al <strong>GreatRift Valley</strong> per fare foto - la Rift Valley attraversa tutto il Kenya fino alla Tanzania.<br>Successiva sosta per il pranzo 🍽 nella cittadina di <strong>Narok</strong>, a metà strada tra il Masai Mara e Nairobi. Arrivo al Parco Masai Mara per iniziare il game drive.<br>Durante i mesi di Luglio, Agosto e Settembre di può ammirare il fenomeno delle migrazioni dal <strong>Parco Serengeti</strong> al <strong>Masai Mara</strong>, quindi è il periodo migliore per visitare questo Parco. Durante i mesi di Dicembre e Gennaio il fenomeno delle migrazioni è dal Masai Mara verso il Parco Serengeti. Chi deciderà di visitare questo parco durante questi mesi avrà la possibilità di vedere gli animali cacciare, essendo il periodo più ricco di animali - caccia dei coccodrilli e dei felini. Collegati alla caccia ci saranno anche branchi di iene e avvoltoi che si cibano dei resti lasciati dai grandi felini.<br>Arrivo al lodge/campo tendato per check-in, cena e pernottamento 🛏.",
        "⏰ Sveglia alle <strong>05:30</strong>, colazione ☕️ partenza per il game drive all'alba. Staremo tutto il giorno fuori, dall'alba al tramonto, per goderci i momenti più belli della vita nella savana.<br>Pranzeremo 🍽 verso le 13:00 in mezzo alla savana, sulle sponde del fiume <strong>Mara River</strong>. Dopo il pranzo un po' di relax e nuovo game drive fino al tramonto.<br>Rientro al campo, cena e pernottamento 🛏.",
        "⏰ Sveglia alle <strong>06:00</strong> e colazione ☕️ per dirigerci al <strong>lago Nakuru</strong>, conosciuto in tutto il mondo per l'infinità di fenicotteri rosa 🦩 e per le varietà di uccelli che lo popolano. Il lago è circondato da boschi e colline rocciose abitati da rinoceronti 🦏 - sia neri che bianchi, leoni 🦁, giraffe 🦒 e molti altri animali.<br>Verso pranzo arriveremo al campo tendato/lodge. Dopo le consuete operazioni di check in, pranzeremo 🍽 e potremo riposarci un pò fino alle 15:00.<br>Nel pomeriggio safari fotografico al lago Nakuru fino al tramonto. Rientro al campo per la cena ed il pernottamento 🛏.",
        "⏰ Sveglia alle <strong>06:00</strong>, colazione ☕️ e partenza per l'ultimo game drive.<br>Usciti dal parco ci dirigeremo verso la città di Nairobi, capitale del Kenya, per raggiungere l'aeroporto, per chi ha il volo, oppure l'hotel 🏬."
      ],
      dailyPlace: ['Nairobi + Masai Mara','Masai Mara','lago Nakuru', 'Masai Mara'],
      included: [
        'Tutti i trasferimenti a bordo di fuoristrada con tetto panoramico apribile',
        'Assicurazione',
        "Biglietto d'ingresso al parco Masai Mara",
        "Biglietto d'ingresso al lago Nakuru",
        'Macchina da/per aeroporto',
        'Pernottamento in lodge/camp con pensione completa (escluse le bevande)',
        'Acqua minerale durante tutti i game drive',
        "Autista e/o guida (in italiano) con regolare licenza abilitati per safari (in periodo di alta stagione l'autista e la guida possono essere la stessa persona)"
      ],
      excluded: [
        'Bevande durante i pasti nei campi/lodge',
        'Mance ed eventuali extra personali'
      ]
    }
  ]

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.enableAllModalAllCarousel();
    if(this.modalNameFromOther != ''){
      this.openModal(this.modalNameFromOther)
    }
  }

  ngOnDestroy(): void {
    this.closeAllModal();
  }

  enableAllModalAllCarousel(): void{
    const modalOptions: ModalOptions = {
      placement: 'top-center',
      backdrop: 'dynamic',
      backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
      closable: true,
      onHide: () => { this.modalOpen = false },
      onShow: () => { this.modalOpen = true },
      onToggle: () => {}
    }
    this.safarisWatamu.concat(this.safarisNairoby).forEach( (safari) => {
      const element = <HTMLElement>document.getElementById(safari.varName + '-modal');
      const modalEl: ModalInterface = new Modal(element, modalOptions);
      this.modals.set(safari.varName+'Modal', modalEl);

      var items: CarouselItem[] = []
      var optionItem = []
      for(let i=1; i <= safari.imgsArray.length; i++){
        items.push({ position: i-1, el: <HTMLElement>document.getElementById('carousel-' + safari.varName + '-item-' + i) });
        optionItem.push({ position: i-1, el: <HTMLElement>document.getElementById('carousel-' + safari.varName + '-indicator-' + i) })
      }
      var options: CarouselOptions = {
        defaultPosition: 0,
        interval: 3000,
        indicators: {
          activeClasses: 'bg-white dark:bg-gray-800',
          inactiveClasses: 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
          items: optionItem
        },
        onNext: () => {},
        onPrev: () => {},
        onChange: () => {}
      }
      var carouselHtml: CarouselInterface = new Carousel(items, options);
      var prevButton = <HTMLElement>document.getElementById('carousel-' + safari.varName + '-prev');
      var nextButton = <HTMLElement>document.getElementById('carousel-' + safari.varName + '-next');
      prevButton.addEventListener('click', () => {
        carouselHtml.prev();
      });
      nextButton.addEventListener('click', () => {
        carouselHtml.next();
      });

      const accordionItems: AccordionItem[] = [];
      for (let index = 1; index <= safari.programs.length; index++) {
        accordionItems.push(
          {
            id: 'accordion-' + safari.varName + '-heading-' + (index),
            triggerEl: <HTMLElement>document.getElementById('accordion-' + safari.varName + '-heading-' + (index)),
            targetEl: <HTMLElement>document.getElementById('accordion-' + safari.varName + '-body-' + (index)),
            active: index == 1 ? true : false
          });
      }
      const optionsAccord: AccordionOptions = {
        alwaysOpen: false,
        activeClasses: 'bg-transparent dark:bg-transparent',
        inactiveClasses: 'bg-gray-300 dark:bg-gray-600',
        onOpen: (item) => {
          this.scroll(<HTMLElement>item._items.find( el => el.active)?.triggerEl)
        },
        onClose: (item) => { },
        onToggle: (item) => {
          item._items.forEach( (el) => {
            el.triggerEl.querySelectorAll('svg')[1].classList.remove('rotate-180')
          })
          item._items.find( el => el.active)?.triggerEl.querySelectorAll('svg')[1].classList.add('rotate-180')
        },
      };
      const accordion: AccordionInterface = new Accordion(accordionItems, optionsAccord);
      accordion.open('accordion-' + safari.varName + '-heading-1');
    })
  }

  closeAllModal(): void{
    this.safarisWatamu.concat(this.safarisNairoby).forEach( (modal) => {
      this.closeModal(modal.varName + 'Modal')
    })
    this.modalOpen = false
  }

  openModal(modalName: string): void{
    var modal = this.modals.get(modalName)
    if (modal){
      modal.show()
    }
  }

  closeModal(modalName: string): void{
    var modal = this.modals.get(modalName)
    if (modal && modal.isVisible()){
      modal.hide()
      if (this.modalNameFromOther != ''){
        this.modalNameFromOther = ''
        this.scroller?.scrollToAnchor('grid-'+modalName.replace('Modal',''))
      }
    }
  }

}
