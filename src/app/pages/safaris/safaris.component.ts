import { Component,  OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Modal, Carousel, Accordion } from 'flowbite';
import type { ModalOptions, ModalInterface, CarouselItem, CarouselOptions, CarouselInterface, 
              AccordionOptions, AccordionItem, AccordionInterface } from 'flowbite'

@Component({
  selector: 'app-safaris',
  templateUrl: './safaris.component.html',
  styleUrls: ['./safaris.component.css']
})
export class SafarisComponent implements OnInit, OnDestroy, AfterViewInit {

  scroll(el: HTMLElement) {
    el.scrollIntoView();
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
      title: 'TZAWO EAST + TAITA HILLS',
      duration: '3 giorni e 2 notti',
      price: '',
      place: 'Tzawo East + Taita Hills',
      varName: 'tzawoEastTaita',
      imgsArray: ['tzavo_east_taita_1.jpeg','tzavo_east_taita_2.jpg','tzavo_east_taita_3.jpeg','tzavo_east_taita_4.jpg','tzavo_east_taita_5.jpeg','tzavo_east_taita_6.jpeg','tzavo_east_taita_7.jpeg','tzavo_east_taita_8.jpg','tzavo_east_taita_9.jpg','tzavo_east_taita_10.jpg'],
      programs: [
        "🚙 Partenza dal villaggio alle <strong>06:00</strong> del mattino direzione <strong>Tzavo East National Park</strong>.<br>Ci fermeremo per una sosta al <strong>Crocodile Point</strong> sulla riva del fiume <strong>Galana</strong> alle 09:30 per camminare sulle sponde del fiume alla ricerca di coccodrilli 🐊, ippopotami 🦛, scimmie 🐵🐒 e cicogne marabou.<br>L'arrivo al Parco è previsto per le <strong>10:00</strong> - il biglietto del Parco ha validità per 24 ore dall'ingresso).<br>Dopo il fotosafari ci receremo al lodge/campo tendato - 12:30 - per l'assegnazione delle stanze/tende e fare pranzo 🍽. Pausa fino alle ore 16:00 circa quando poi partiremo per il secondo game drive fino al tramonto.<br>Verso le 18:00 rientro al lodge o campo tendato ⛺️ per la cena e il pernottamento 🛏.",
        "⏰ Sveglia alle <strong>06:00</strong> per la colazione ☕️ e partenza alle 06:30 per <strong>Riserva Taita Hills</strong>.<br>L'arrivo è previsto 4 ore dopo - 12:30 - al lodge/campo tendato, dove verranno assegnate le stanze, si mangerà 🍽 e ci sarà il tempo per un po' di relax.<br>Dalle 16:00 fino a tramonto - circa 18:00 - faremo il game drive pomeridiano per poi rientrare al campo per la cena.<br>Alle <strong>20:30</strong> ultimo game drive della giornata in notturna 🎆 con rientro previsto per le <strong>22:30</strong> per il pernottamento 🛏.",
        "⏰ Sveglia alle <strong>06:00</strong> per la colazione ☕️ e partenza alle 06:30.<br>Un ultimo safari prima di partire per il rientro.<br>Faremo una sosta per il pranzo verso le 12:30 per poi continuare il rientro, con arrivo previsto alle <strong>17:30</strong>."
      ],
      dailyPlace: ['Tzawo East','Taita Hills','Taita Hills'],
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
      thumbnail: 'tzawo_east_ambo_west_2.jpg',
      imgFolder: '/assets/img/safaris/tzawo_east_ambo_west/',
      title: 'TZAWO WEST + AMBOSELI + TZAWO EAST da Mombasa',
      duration: '4 giorni e 3 notti',
      price: '',
      place: 'Tzawo West + Amboseli + Tzawo East',
      varName: 'tzawoEastWestAmboFromMom',
      imgsArray: ['tzawo_east_ambo_west_1.jpeg','tzawo_east_ambo_west_2.jpg','tzawo_east_ambo_west_3.jpeg','tzawo_east_ambo_west_4.jpg','tzawo_east_ambo_west_5.jpg','tzawo_east_ambo_west_6.jpg','tzawo_east_ambo_west_7.jpg','tzawo_east_ambo_west_8.jpg'],
      programs: [
        "🛬Dall'aeroporto di Mombasa percorreremo la statale Mombasa/Nairobi e ci dirigeremo verso lo <strong>Tsavo West</strong> e, in base all'orario di arrivo, si potrà iniziare con il safari.<br>Arriveremo poi al campo tendato o lodge per il check-in, pranzare 🍽 e riposare un poco.<br>Ripartiremo per il game drive verso le <strong>15:00</strong> dirigendoci verso il <strong>Rhino Santuary</strong>, così chiamato perché è un facile punto di avvistamento dei rinoceronti 🦏. Rientro al lodge o al campo tendato verso le 18:30 per la cena ed il pernottamento 🛏.",
        "⏰ Sveglia alle <strong>07:00</strong> per la colazione ☕️ e poi partenza verso il parco di Amboseli.<br>Game drive fino alle 09:00 verso il <strong>Mzima Spring</strong>, dove si trovano le sorgenti del fiume <strong>Tsavo</strong>, popolate da ippopotami 🦛 e coccodrilli 🐊. Qui scenderemo per una passeggita di mezz'ora per poi giungere alle nere colate laviche - le più lunghe al mondo - denominata <strong>Yatta Plateau</strong>.<br>Arrivo al <strong>Parco Amboseli</strong> verso le <strong>12:00</strong> all'entrata <i>'Kimana Gate'</i>.<br>Il logde/campo tendato <strong>'Sentrim Amboseli'</strong> si trova vicino l'ingresso del parco: check-in, pranzo 🍽 ed un poco di riposo fino alle 14:30.<br>Partiremo quidni per il game drive alla ricerca degli animali che popolano la savana.<br>Verso le <strong>18:30</strong> torneremo al campo tendato/lodge per la cena ed il pernottamento 🛏.",
        "⏰ Sveglia alle <strong>06:00</strong>, la colazione ☕️, partenza alle 07:00 verso l'altro ingresso del parco di Amboseli - <strong>'Irimito'</strong> per il game drive.<br>Successivamente ci dirigeremo verso il <strong>Parco Tsavo Est</strong> e arriveremo verso le <strong>13:00</strong> al campo tendato/lodge per il consueto check-in, pranzo 🍽 e riposo.<br>Alle 15:00 ripartiremo per il game drive verso le zone migliori del parco - lago <strong>Aruba</strong> e <strong>Kanderi Swamp</strong> - fino al tramonto per poi far rientro al campo per la cena ed il pernottamento 🛏.<br>Vicino alla sala ristornate ci sono delle pozze di acqua dove molti animali vengono a giocare ed abbeverarsi.",
        "⏰ Sveglia alle <strong>05:45</strong> per un game drive speciale in cerca di felini molto propensi alla caccia 🦁🐆.<br>Alle 09:00 rientro per la colazione ☕️ e subito dopo ripartiremo per un altro game drive - o eventualmente si potrà optare per una sosta in piscina fino all'ora di pranzo.<br>Ci dirigeremo verso l'uscita del parco, vicino al fiume <strong>Galana</strong>, che attraversa tutta la savana fino a Malindi e a seconda della zona che attraversa prende un nome diverso: <i>Galana</i>, <i>Sabaki</i> e <i>Athi River</i>. Seguendo il fiume potremmo ammirare ippopotami 🦛 e coccodrilli 🐊.<br>Faremo anche un piccolo giro a piedi per vedere più da vicino coccodrilli, scimmie e vari tipi di uccelli.<br>Pranzo 🍽 verso le 13:30 per poi ripartire verso i rispettivi resort a Watamu 🏬, dove arriveremo alle 18:00 circa"
      ],
      dailyPlace: ['Tzawo West','Amboseli','Amboseli + Tzawo East', 'Tzawo East'],
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
      title: 'TZAWO WEST + AMBOSELI + TZAWO EAST da Watamu',
      duration: '4 giorni e 3 notti',
      price: '',
      place: 'Tzawo West + Amboseli + Tzawo East',
      varName: 'tzawoEastWestAmboFromWat',
      imgsArray: ['tzawo_east_ambo_west_1.jpeg','tzawo_east_ambo_west_2.jpg','tzawo_east_ambo_west_3.jpeg','tzawo_east_ambo_west_4.jpg','tzawo_east_ambo_west_5.jpg','tzawo_east_ambo_west_6.jpg','tzawo_east_ambo_west_7.jpg','tzawo_east_ambo_west_8.jpg'],
      programs: [
        "🚙 Partenza alle 04:00 dal vostro villaggio.<br>Faremo colazione ☕️ tutti insieme per poi procedere, percorrendo la strada principale che porta da Malindi fino al raccordo per Mombasa, fino alla città di <strong>Voi</strong>, quindi arriveremo all'entrata dello <strong>Tsawo Ovest (Tsavo Riva)</strong> verso le <strong>09:00</strong> circa.<br>Questo è il parco più caratteristico per la presenza di montagne, laghi e fiumi, dove risiedono le famiglie più numerose di animali ed in particolare di felini 🦁, data la presenza di tanti alberi.<br>Inizieremo il safari per vedere gli animali della savana - elefanti 🐘, zebre 🦓, giraffe 🦒, leoni 🦁, ghepardi 🐆, leopardi. Verso le 13:30 arriveremo al campo tendato/lodge per il check-in, pranzare 🍽 e riposare un poco. Ripartiremo per il game drive verso le 15:30 dirigendoci verso il <strong>Rhino Santuary</strong>, così chiamato perché è un facile punto di avvistamento dei rinoceronti 🦏. Rientro al lodge/campo verso le 18:30 per la cena ed il pernottamento 🛏.",
        "⏰ Sveglia alle <strong>06:00</strong>, colazione ☕️ e partenza verso le 07:00 per il game drive fino alle 09:00. Ci dirigeremo verso il <strong>Mzima Spring</strong>, dove si trovano le sorgenti del fiume <strong>Tsavo</strong>, popolate da ippopotami 🦛 e coccodrilli 🐊. Uscendo dal parco, prenderemo la strada che attraversa il Parco Tsavo East e Tsavo West in direzione del Monte Kilimanjaro e del <strong>Parco Amboseli</strong>, dove arriveremo verso le <strong>12:00</strong> all'entrata <i>'Irimito'</i>. Altro game drive fino alle 13:30, quando arriveremo al campo tendato/lodge per il check-in, pranzo 🍽 ed un poco di meritato riposo fino alle 15:30.<br>Ripartiremo per il successivo game drive verso il lago <strong>Amboseli</strong> per vedere ippopotami 🦛 e bufali 🐃 salendo verso l'Amboseli Hill per ammirare il panorama fino al tramonto. Verso le 18:30 torneremo al campo/lodge per la cena ed il pernottamento 🛏.",
        "⏰ Sveglia alle <strong>06:00</strong>, colazione ☕️ e partenza verso le 07:00 per il game drive fino alle 09:00 per poi dirigerci verso il <strong>Parco Tsavo East</strong> all'entrata <i>'Manyani Gate'</i> che arriveremo verso le 11:00.<br>Inizieremo subito il game drive fino alle 13:30 quando arriveremo al campo tendato/lodge per il consuento check-in, pranzo 🍽 e riposo.<br>Alle 15:30 ripartiremo per il game drive alla ricerca degli animali verso le zone migliori del parco - lago <i>Aruba</i> e <i>Kanderi Swamp</i> - fino al tramonto per poi far rientro al campo tendato/lodge per la cena ed il pernottamento 🛏.",
        "⏰ Sveglia alle <strong>06:00</strong>, colazione ☕️ e partenza alle 07:00 per il game drive nel parco, verso le cascate <strong>Lugards Falls</strong> che si trovano nel fiume <strong>Galana</strong> che attraversa tutta la savana fino a Malindi e, a seconda della zona che attraversa, prende un nome diverso. Lo stesso fiume viene chiamato infatti in 3 modi diversi: <i>Galana</i>, <i>Sabaki</i> e <i>Athi River</i>. Il giro continuerà fino alle 10:30/11:00 seguendo il fiume nei diversi punti di avvistamento degli animali come ippopotami 🦛, coccodrilli 🐊.<br>Faremo anche un piccolo giro a piedi per vedere coccodrilli 🐊, scimmie 🐒 e vari tipi di uccelli.<br>Pranzo 🍽 e verso le 14:00 ripartiremo verso Watamu, dove arriveremo verso le <strong>16:30</strong> circa."
      ],
      dailyPlace: ['Tzawo West','Amboseli','Amboseli + Tzawo East', 'Tzawo East'],
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
      thumbnail: '',
      imgFolder: '',
      title: '',
      duration: '',
      price: '',
      place: '',
      varName: '',
      imgsArray: [],
      programs: [],
      dailyPlace: [],
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
    }
  ]

  safarisNairoby = [
    {
      thumbnail: '',
      imgFolder: '',
      title: '',
      duration: '',
      price: '',
      place: '',
      varName: '',
      imgsArray: [],
      programs: [],
      dailyPlace: [],
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
      thumbnail: '',
      imgFolder: '',
      title: '',
      duration: '',
      price: '',
      place: '',
      varName: '',
      imgsArray: [],
      programs: [],
      dailyPlace: [],
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
      thumbnail: '',
      imgFolder: '',
      title: '',
      duration: '',
      price: '',
      place: '',
      varName: '',
      imgsArray: [],
      programs: [],
      dailyPlace: [],
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
      thumbnail: '',
      imgFolder: '',
      title: '',
      duration: '',
      price: '',
      place: '',
      varName: '',
      imgsArray: [],
      programs: [],
      dailyPlace: [],
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
      thumbnail: '',
      imgFolder: '',
      title: '',
      duration: '',
      price: '',
      place: '',
      varName: '',
      imgsArray: [],
      programs: [],
      dailyPlace: [],
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
      thumbnail: '',
      imgFolder: '',
      title: '',
      duration: '',
      price: '',
      place: '',
      varName: '',
      imgsArray: [],
      programs: [],
      dailyPlace: [],
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
    }
  ]

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.enableAllModalAllCarousel();
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
      onHide: () => {},
      onShow: () => {},
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
        defaultPosition: 1,
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
  }

  openModal(modalName: string): void{
    var modal = this.modals.get(modalName)
    if (modal){
      modal.show()
    }
  }

  closeModal(modalName: string): void{
    var modal = this.modals.get(modalName)
    if (modal){
      modal.hide()
    }
  }

}
