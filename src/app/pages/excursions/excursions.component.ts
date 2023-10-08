import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Modal, Carousel } from 'flowbite';
import type { ModalOptions, ModalInterface, CarouselItem, CarouselOptions, CarouselInterface } from 'flowbite';
import { Observable } from 'rxjs';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-excursions',
  templateUrl: './excursions.component.html',
  styleUrls: ['./excursions.component.css']
})
export class ExcursionsComponent implements OnInit, OnDestroy, AfterViewInit{
  
  constructor(private modalService: DataService) { }

  fromOtherComp = false
  modalOpen = false

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
    el.scrollIntoView();
  }

  excurions =[
    { 
      thumbnail: 'safari_blue_5.jpg',
      imgFolder: '/assets/img/excursions/safari_blue/',
      title: 'SAFARI BLUE GARODA',
      duration: 'Giornata intera',
      price: '€60',
      place: 'Parco Marino & Mangrovie & Garoda',
      varName: 'safarBlue',
      imgsArray: ['safari_blue_1.jpeg', 'safari_blue_2.jpeg', 'safari_blue_3.jpeg', 'safari_blue_4.jpeg', 'safari_blue_5.jpg' ,'safari_blue_6.jpeg', 'safari_blue_7.jpg', 'safari_blue_8.jpeg', 'safari_blue_9.jpg', 'safari_blue_10.jpeg', 'safari_blue_11.jpeg', 'safari_blue_12.jpeg', 'safari_blue_13.jpeg'],
      programs: [
        'Partenza dal vostro villaggio alle <strong>08:00</strong> circa per andare 🚙 a prendere una barca con il fondo di vetro, equipaggiata di maschere, pinne e salvagenti.<br>Nel tragitto si potrà del sole dal tettuccio della barca stessa.', 
        'La prima tappa è il parco marino, dove si potrà ammirare il fondale spettacolare - con tantissimi <strong>pesci colorati</strong> 🪸 🐡 🐠 🐟 - e si potrà fare <strong>snorkeling</strong> 🤿.', 
        "La tappa successiva è la 🏖 spiaggia di <strong>Garoda</strong>, per fare un bagno nelle acque cristalline e abbronzarsi un po' al sole ☀️.", 
        "Si proseguire poi lungo il canale di mangrovie dell'oceano indiano, dove raggiungeremo il cuore della foresta per ammirare da vicino fenicotteri rosa, aironi bianchi e neri, cicogne,...", 
        "Sosta per il <strong>pranzo</strong> su un isoletta paradisiaca di nome 'SUDI' dove verrà allestito un ricco pranzo con riso al latte di cocco e sugo di polpo, grigliata di pesce, aragosta , gamberi, frutta e bevanda.<br>Qui ci sarà anche tempo di rilassarsi o  fare un giro in canoa all'interno delle mangrovie.", 
        '🛺 Rientro al villaggio verso le <strong>16:30</strong>.'],
      included: [
        'Barca con fondo di vetro, attrezzata per snorkeling e tettuccio soprelevato',
        'Guida turistica in lingua italiana',
        'Biglietto di ingresso al Parco Marino',
        'Pranzo a base di pesce - possibilità di carne o vegetariano - e bevande'
      ],
      excluded: []
    },
    { 
      thumbnail: 'sardegna_1.jpg',
      imgFolder: '/assets/img/excursions/sardegna/',
      title: 'SAFARI BLUE SARDEGNA 2',
      duration: 'Giornata intera',
      price: '€60',
      place: 'Parco Marino & Watamu',
      varName: 'safarSard',
      imgsArray: ['sardegna_1.jpg', 'sardegna_2.jpeg', 'sardegna_3.jpeg', 'sardegna_4.jpeg', 'sardegna_5.jpeg', 'sardegna_6.jpeg', 'sardegna_7.jpg', 'sardegna_8.jpeg'],
      programs: [
        'Partenza dal vostro villaggio alle <strong>08:00</strong> circa per andare 🚙 a prendere una barca con il fondo di vetro, equipaggiata di maschere, pinne e salvagenti.<br>Nel tragitto si potrà godere del sole dal tettuccio della barca stessa.',
        'La prima tappa è il parco marino, dove si potrà ammirare il fondale spettacolare - con tantissimi <strong>pesci colorati</strong> 🪸🐡🐠🐟 - e si potrà fare <strong>snorkeling</strong> 🤿.',
        "Se la stagione è giusta - tra Novembre e Febbraio - proseguiremo navigando all'esterno della barriera corallina alla ricerca dei delfini 🐬.",
        'Verso le 12:00 si raggiunge la 🏖 spiaggia di <strong>Sardegna 2</strong>, Watamu, dove tra spettacolari atolli si potranno ammirare stelle marine, pesci palla e molto altro 🐡 🦀 🐚.<br>Qui verrà allestito un ricco pranzo sulla barca con riso al latte di cocco e sugo di polpo 🐙, pesce alla griglia, aragosta 🦞, gamberi 🦐, frutta e una bevanda a testa - previa richiesta sono previste alterntive come pollo 🍗, carne alla griglia 🥓 o alternative vegetariane 🥑🫘.',
        'Relax time sugli atolli e tutto il tempo per nuotare.',
        'Alle ore 15:00 partenza 🛺 per il rientro a Watamu previsto per le <strong>16:00</strong> circa.'
      ],
      included: [
        'Barca con fondo di vetro, attrezzata per snorkeling e tettuccio soprelevato',
        'Guida turistica in lingua italiana',
        'Biglietto di ingresso al Parco Marino',
        'Pranzo a base di pesce - possibilità di carne o vegetariano - e bevande'
      ],
      excluded: []
    },
    { 
      thumbnail: 'gold_5.jpg',
      imgFolder: '/assets/img/excursions/golden_beach/',
      title: 'SPIAGGIA DORATA - CHE SHALE',
      duration: 'Mezza giornata',
      price: '€30',
      place: 'Che Shale',
      varName: 'goldBeach',
      imgsArray: ['gold_5.jpg','gold_1.jpeg','gold_2.jpeg','gold_3.jpg','gold_4.jpg','gold_5.jpg','gold_6.jpg','gold_7.jpg'],
      programs: [
        "Partenza dal vostro villaggio per dirigerci a nord ovest di Malindi verso l'incantevole spiaggia dorata  🏖, chiamata così per le pagliuzze dorate della sua sabbia, che luccicano con il riflesso del sole.",
        "L'orario di partenza 🛺 dipende dalla marea: <br>nel caso in cui la bassa marea fosse la mattina la partenza è prevista alle <strong>8:30</strong>, con rientro al villaggio verso le <strong>13:00</strong>; <br>nel caso in cui la bassa marea fosse il pomeriggio la partenza è prevista alle <strong>14:30</strong>, con rientro al villaggio verso le <strong>19:00</strong>.",
        'Nel caso in cui si volesse mangiare fuori si parte alle <strong>8:30</strong>, pranzo al ristorante di Che Shale e rientro al villaggio verso le <strong>16:00</strong>.'
      ],
      included: [
        'Trasporto andata e ritorno al resort'
      ],
      excluded: [
        'Pranzo al ristornate di Che Shale'
      ]
    },
    { 
      thumbnail: 'mgr_7.jpg',
      imgFolder: '/assets/img/excursions/marafa_gold_robinson/',
      title: 'SPIAGGIA DORATA - ISOLA DI ROBINSON - MARAFA',
      duration: 'Giornata intera',
      price: '€70',
      place: 'Malindi + Isola di Robinson + Marafa',
      varName: 'mgr',
      imgsArray: ['mgr_7.jpg','mgr_1.jpg','mgr_2.jpg','mgr_3.jpg','mgr_4.jpeg','mgr_5.jpg','mgr_6.jpg'],
      programs: [
        "🚙 Partenza dal vostro villaggio alle <strong>09:00</strong> direzione <strong>Spiaggia Dorata</strong>: pochi kilometri da Malindi, arriveremo al ponte sul fiume Sabaki - fiume che quando attraversa il parco Tsavo Est viene chiamato Galana - dove è possibile che vengano avvistati degli ippopotami.<br>Passato il villaggio di Mambrui, la strada continua tra palme e dune fion ad arrivare alla spiaggia.<br>La spiaggia ha questo nome per le pagliuzze dorate della sua sabbia, che luccicano con il riflesso del sole. Qui potrete fare il bagno nell'Oceano o passeggiare lungo la costa.",
        "Si prosegue verso l'<strong>isola di Robinson</strong>, passando in mezzo alle saline più grandi del Kenya dove si possono ammirare tantissimi fenicotteri 🦩.Caronte (di nome Safari) vi aiuterà ad attraversare un brevissimo tratto di mare con la sua canoa per arrivare sull'isolata spiaggia di Robinson.<br>Qui in un suggestivo ristorante verrà servito il pranzo a base del caratteristico granchio rosso di Robinson 🦀, aragosta 🦞, gamberoni 🦐, ostriche gratinate al cocco, pesce, riso al cocco 🍚, insalata, frutta fresca, caffè arabo con cannella - bibite da pagare a parte.",
        "Dopo pranzo e una piccola sosta, si riprenderà la via verso il Canyon <strong>Marafa - Hell's Kitchen (CUCINA DEL DIAVOLO)</strong>.<br>La cucina del diavolo era in origine un luogo caratterizzato da roccia arenaria che per effetto delle piogge nel corso dei millenni si è eroso dando vita da un canyon dove pinnacoli, burroni, guglie e imponenti strutture sinuose (alte anche 30 metri) si alternano creando uno spettacolo , con colorazioni che variano durante l'arco della giornata.<br>La visita al Canyon sarà accompagnata da una guida locale che racconterà gli aneddoti del posto.<br>Al calare del sole ci si fermerà sulla 'terrazza' ad attendere il tramonto dai colori mozzafiato 🌄.",
        '🛺 Dopo il tramonto si parte per tornare a Watamu, con arrivo previsto per le <strong>19:30</strong> circa.'
      ],
      included: [
        'Trasporto andata e ritorno al resort',
        "Biglietto d'ingresso a Marafa e guida specializzata che accompagnerà il tour",
        "Barca per l'isola",
        'Pranzo a base di pesce - possibilità di carne o vegetariano'
      ],
      excluded: [
        'Le bevande a pranzo non sono comprese'
      ]
    },
    { 
      thumbnail: 'marafa_1.jpeg',
      imgFolder: '/assets/img/excursions/marafa/',
      title: 'MARAFA - HELLS KITCHEN',
      duration: 'Mezza giornata',
      price: '€35',
      place: 'Marafa',
      varName: 'marafa',
      imgsArray: ['marafa_1.jpeg','marafa_1.jpeg','marafa_2.jpg','marafa_3.jpeg','marafa_4.jpg','marafa_5.jpeg','marafa_6.jpg','marafa_7.jpeg','marafa_8.jpg','marafa_9.jpeg','marafa_10.jpg','marafa_11.jpeg','marafa_12.jpeg'],
      programs: [
        '🚙 Partenza dal vostro villaggio alle <strong>14:30</strong> circa direzione <strong>Canyon di Marafa-Hells Kitchen</strong> percorrendo un tragitto suggestivo tra grandi radure, villaggi e boschi di acacie.',
        "Chiamata dai nativi 'Nyari' - che letteralmente si traduce 'il posto che si rompe da solo' - ma anche conosciuta come 'Cucina diavolo', era in origine un luogo caratterizzato da roccia arena, che per effetto della pioggia, si è erosa nel corso dei millenni dando vita ad un canyon dove pinnacoli, burroni, guglie ed imponenti strutture sinuose (alte anche 30 metri) si alternano creando uno spettacolo unico.",
        '🛺 Rientro al villaggio verso le <strong>19:30</strong>.'
      ],
      included: [
        'Trasporto andata e ritorno al resort',
        "Biglietto d'ingresso a Marafa e guida specializzata che accompagnerà il tour"
      ],
      excluded: []
    },
    { 
      thumbnail: 'gede_2.jpg',
      imgFolder: '/assets/img/excursions/gede/',
      title: 'ROVINE DI GEDE',
      duration: 'Mezza giornata',
      price: '€30',
      place: 'Gede',
      varName: 'gede',
      imgsArray: ['gede_2.jpg','gede_1.jpg','gede_2.jpg','gede_3.jpg','gede_4.jpeg','gede_5.jpeg'],
      programs: [
        "Poco lontano da Malindi, nella splendida cornice della foresta <strong>Arabuko Sokoke</strong>, ricca di Baobab secolari, sequoia e alberi di chinino, sorge <strong>Gede</strong>, un'imponente città islamica del XIII secolo.<br>La visita alle rovine di Gede permette di ammirare ciò che ne rimane: le mura concentriche a difesa della città, la grande moschea, i resti delle cisterne idriche e diversi edifici.",
        "Ancora non si conoscono le ragioni del suo abbandono nel XVIII secolo. In ogni caso oggi si presenta ai nostri occhi uno spettacolo carico di fascino: una città fantasma ricca di vegetazione e popolata da moltissime scimmie 🐒 che l'hanno scelta come dimora e non esiteranno di accogliervi in cambio di una banana 🍌."
      ],
      included: [
        'Trasporto andata e ritorno dal resort',
        "Biglietto d'ingresso al sito storico di Gede",
        "Guida specializzata che vi accompagnerà all'interno delle rovine spiegandone la storia"
      ],
      excluded: []
    },
    { 
      thumbnail: 'malindi_1.jpg',
      imgFolder: '/assets/img/excursions/malindi/',
      title: 'MALINDI TOUR',
      duration: 'Mezza giornata',
      price: '€25',
      place: 'Malindi',
      varName: 'malindi',
      imgsArray: ['malindi_1.jpg','malindi_1.jpg','malindi_2.jpg','malindi_3.jpg'],
      programs: [
        '🚙 Partenza dal vostro villaggio alle <strong>15:30</strong> e in circa 30 minuti saremo a <strong>Malindi</strong>.',
        'Alla scoperta di questa famosa località della costa orientale del Kenya, potrete osservare la straordinaria manualità delle tribù indigene nella lavorazione del legno 🪵, visitando una vera e propria fabbrica artigianale degli <strong>Akamaba</strong>.<br>Vedrete la produzione dei manufatti e sarà possibile, inoltre, acquistare il prodotto finito.',
        'La visita al mercato vecchio vi farà immergere nella vita e nei costumi locali: potrete trovare una vasta gamma di prodotti artigianali e osservare il ritmo e lo stile di vita della popolazione locale.',
        '🛺 Alle <strong>18:00</strong> rientro a Watamu.'
      ],
      included: [
        'Trasporto andata e ritorno dal resort'
      ],
      excluded: []
    },
    { 
      thumbnail: 'malindi_night_2.jpg',
      imgFolder: '/assets/img/excursions/malindi_night/',
      title: 'MALINDI BY NIGHT',
      duration: 'Mezza giornata',
      price: '€25',
      place: 'Malindi',
      varName: 'malindiNight',
      imgsArray: ['malindi_night_2.jpg','malindi_night_1.jpg','malindi_night_2.jpg','malindi_night_3.jpg'],
      programs: [
        'Notte di 🎉 divertimenti 🎊 a Malindi: visiteremo i locali più quotati e le discoteche 🪩 sulla spiaggia per vivere il Kenya anche di notte! 🌃',
        "🛺 L'orario di partenza e di rientro lo <strong>deciderete voi</strong>."
      ],
      included: [
        'Trasporto andata e ritorno dal resort'
      ],
      excluded: []
    },
    { 
      thumbnail: 'amore_1.jpg',
      imgFolder: '/assets/img/excursions/amore/',
      title: "ISOLA DELL'AMORE",
      duration: 'Mezza giornata',
      price: '€30',
      place: "Isola dell'Amore, Watamu",
      varName: 'amore',
      imgsArray: ['amore_1.jpg','amore_2.jpg','amore_3.jpg'],
      programs: [
        "L'<strong>Isola dell'Amore</strong> si trova di fronte la spiaggia di Watamu Bay e il suo nome è dato dal fatto che durante la bassa marea la spiaggia prende la forma di un cuore ❤️.",
        'È facile da raggiungere a piedi, utilizzando le apposite scarpette per camminare sui coralli 🪸.',
        "C'è la possibilità di fare pranzo, a base di aragosta 🦞, gamberi 🦐 e pesce freschissimo.",
        '🛺 Gli orari di partenza e rientro li <strong>deciderete voi</strong>.'
      ],
      included: [
        'Trasporto andata e ritorno dal resort'
      ],
      excluded: []
    },
    { 
      thumbnail: 'dabaso_3.jpeg',
      imgFolder: '/assets/img/excursions/dabaso/',
      title: 'DABASO COMMUNITY',
      duration: 'Mezza giornata',
      price: '€30',
      place: 'Mida Creek, Watamu',
      varName: 'dabaso',
      imgsArray: ['dabaso_3.jpeg','dabaso_1.jpeg','dabaso_2.jpeg','dabaso_3.jpeg','dabaso_4.jpeg'],
      programs: [
        "La <strong>Dabaso community</strong> è situata a Mida Creek, non lontano da Watamu.<br>Qui si potrà fare un giro in barca fra le mangrovie, dove si possono vedere fenicotteri rosa 🦩, e prendere l'aperitivo 🥂 al tramonto 🌅  degustando le samosa di granchio.",
        "C'è anche la possibilità di cenare a base di pesce in una location nel mezzo circondata dalle mangrovie.",
        "Si accede attraverso una passerella rialzata costruita sopra paludi di mangrovie, con una favolosa vista ed in una posizione perfetta per guardare il sole tramontare.<br>All'imbrunire verranno accese candele o lampade al cherosene.",
        "Le mangrovie costituiscono un servizio ecologico, le radici filtrano le acque pulite per l'oceano e aggiungono sostanze nutrienti, oltre che dare agli uccelli un posto per nidificare e essere l'habitat naturale di piccoli pesci e invertebrati."
      ],
      included: [
        'Trasporto andata e ritorno dal resort'
      ],
      excluded: []
    },
    { 
      thumbnail: 'garoda_1.jpg',
      imgFolder: '/assets/img/excursions/garoda/',
      title: 'GARODA',
      duration: 'Mezza giornata',
      price: '€25',
      place: 'Garoda, Watamu',
      varName: 'garoda',
      imgsArray: ['garoda_1.jpg', 'garoda_2.jpg'],
      programs: [
        "A Watamu, nei suoi 15 chilometri di costa, troverete le spiagge più coreografiche e spettacolari del Kenya, tra le più belle al mondo, dichiarate <strong>Riserva di Biosfera dall'UNESCO</strong> e parte del Parco Marino di Watamu - quindi protette e tutelate.",
        'La spiaggia di <strong>Garoda</strong>, a sud di Watamu, è una fra le più belle del Parco Nazionale Marino di Watamu - in cui è consentita la balneazione - con sabbia bianchissima e fine come il borotalco.',
        'Paradiso perfetto per la riproduzione delle tartarughe 🐢.',
        "C'è inoltre la possibilità di pranzare con grigliata di pesce (aragoste, gamberi, king fish,...).",
        "🛺 Mezza giornata all'insegna di relax che <strong>deciderete voi</strong> se fare la mattina o il pomeriggio."
      ],
      included: [
        'Trasporto andata e ritorno dal resort'
      ],
      excluded: []
    },
    { 
      thumbnail: 'jacaranda_1.jpg',
      imgFolder: '/assets/img/excursions/jacaranda/',
      title: 'JACARANDAA',
      duration: 'Mezza giornata',
      price: '€25',
      place: 'Jacaranda, Watamu',
      varName: 'jacaranda',
      imgsArray: ['jacaranda_1.jpg','jacaranda_2.jpg'],
      programs: [
        "A Watamu, nei suoi 15 chilometri di costa, troverete le spiagge più coreografiche e spettacolari del Kenya, tra le più belle al mondo, dichiarate <strong>Riserva di Biosfera dall'UNESCO</strong> e parte del Parco Marino di Watamu - quindi protette e tutelate.",
        'La spiaggia di <strong>Jacaranda</strong>, a Nord di Watamu, oltre che per la spiaggia lunghissima è conosciuta per la celebre Sardegna 2 o meglio Majungu, come la chiamano i locali, meta di escursioni e scorpacciate di pesce e aragoste 🦞.',
        "Il bianco accecante della sabbia e le mille sfumature del blu del mare interagiscono e come d'incanto emergono magiche lingue di sabbia corallina che si allargano, dando vita a piscine naturali dove ci si può immergere per una nuotata o per prendere il sole.<br>Oppure, con la bassa marea si può optare per una passeggiata tra gli atolli affiorati, da raggiungere a piedi utilizzando le apposite scarpette per poter camminare sui coralli 🪸.",
        "C'è inoltre la possibilità di pranzare con grigliata di pesce (aragoste, gamberi, king fish,...).",
        "🛺 Mezza giornata all'insegna di relax che <strong>deciderete voi</strong> se fare la mattina o il pomeriggio."
      ],
      included: [
        'Trasporto andata e ritorno dal resort'
      ],
      excluded: []
    },
    { 
      thumbnail: 'breeze_1.jpg',
      imgFolder: '/assets/img/excursions/breeze/',
      title: 'OCEAN BREEZE',
      duration: 'Mezza giornata',
      price: '€25',
      place: 'Ocean Breeze, Watamu',
      varName: 'breeze',
      imgsArray: ['breeze_1.jpg','breeze_2.jpeg'],
      programs: [
        "A Watamu, nei suoi 15 chilometri di costa, troverete le spiagge più coreografiche e spettacolari del Kenya, tra le più belle al mondo, dichiarate <strong>Riserva di Biosfera dall'UNESCO</strong> e parte del Parco Marino di Watamu - quindi protette e tutelate.",
        'A nord di Watamu si trova la spiaggia di <strong>Ocean Breeze</strong>.<br>Con la bassa marea affiorano atolli facili da raggiungere a piedi, utilizzando le apposite scarpette per camminare sui coralli 🪸.',
        "C'è inoltre la possibilità di pranzare con grigliata di pesce (aragoste, gamberi, king fish,...).",
        "🛺 Mezza giornata all'insegna di relax che <strong>deciderete voi</strong> se fare la mattina o il pomeriggio."
      ],
      included: [
        'Trasporto andata e ritorno dal resort'
      ],
      excluded: []
    },
    { 
      thumbnail: 'mida_creek_1.png',
      imgFolder: '/assets/img/excursions/mida_creek/',
      title: 'MIDA CREEK',
      duration: 'Mezza giornata',
      price: '€25',
      place: 'Mida Creek, Watamu',
      varName: 'midaCreek',
      imgsArray: ['mida_creek_1.png','mida_creek_1.png','mida_creek_2.jpg','mida_creek_3.jpg','mida_creek_4.jpg'],
      programs: [
        'Giornata esplorativa nella zona di Mida Creek, attraverseremo la sua laguna, attraverseremo il ponte sospeso, fra uccelli e mangrovie.',
        "🛺 Mezza giornata all'insegna di relax che <strong>deciderete voi</strong> se fare la mattina o il pomeriggio."
      ],
      included: [
        'Trasporto andata e ritorno dal resort'
      ],
      excluded: []
    },
    { 
      thumbnail: 'malindi_falconeria_1.jpg',
      imgFolder: '/assets/img/excursions/malindi_falconeria/',
      title: 'FALCONERIA DI MALINDI',
      duration: 'Mezza giornata',
      price: '€25',
      place: 'Malindi',
      varName: 'falconeria',
      imgsArray: ['malindi_falconeria_1.jpg','malindi_falconeria_2.jpg','malindi_falconeria_3.jpg'],
      programs: [
        'Escursione alla scoperta delle principali specie di serpenti e uccelli del Kenya 🐍🦅🦉.'
      ],
      included: [
        'Trasporto andata e ritorno dal resort'
      ],
      excluded: []
    },
    { 
      thumbnail: 'haller_park_1.jpg',
      imgFolder: '/assets/img/excursions/haller_park/',
      title: 'HALLER PARK + FORT JESUS',
      duration: 'Giornata intera',
      price: '€25',
      place: 'Mombasa',
      varName: 'hallerPark',
      imgsArray: ['haller_park_1.jpg','haller_park_1.jpg','haller_park_2.jpg','haller_park_3.jpg','haller_park_4.jpg','haller_park_5.jpg','haller_park_6.jpg'],
      programs: [
        'Giornata di escursioni ad <strong>Haller Park</strong>, parco naturale ricavato da una cava abbandonata e ora trasformata in una riserva privata di animali selvaggi e a <strong>Fort Jesus</strong> - forte costruito dai portoghesi allo scopo di proteggere Mombasa ed ora museo.'
      ],
      included: [
        'Trasporto andata e ritorno dal resort'
      ],
      excluded: []
    }
  ]
  private modals = new Map<string, ModalInterface>();

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.enableAllModalAllCarousel();
    if(this.modalService.getModalName()!=''){
      this.fromOtherComp = true
      this.openModal(this.modalService.getModalName())
      this.modalService.setModalName('')
    }
  }

  ngOnDestroy(): void {
    this.closeAllModal();
  }

  closeAllModal(): void{
    this.excurions.forEach( (modal) => {
      this.closeModal(modal.varName + 'Modal')
    })
    this.modalOpen = false
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
    this.excurions.forEach( (excur) => {
      const element = <HTMLElement>document.getElementById(excur.varName + '-modal');
      const modalEl: ModalInterface = new Modal(element, modalOptions);
      this.modals.set(excur.varName+'Modal', modalEl);

      var items: CarouselItem[] = []
      var optionItem = []
      for(let i=1; i <= excur.imgsArray.length; i++){
        items.push({ position: i-1, el: <HTMLElement>document.getElementById('carousel-' + excur.varName + '-item-' + i) });
        optionItem.push({ position: i-1, el: <HTMLElement>document.getElementById('carousel-' + excur.varName + '-indicator-' + i) })
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
      var prevButton = <HTMLElement>document.getElementById('carousel-' + excur.varName + '-prev');
      var nextButton = <HTMLElement>document.getElementById('carousel-' + excur.varName + '-next');
      prevButton.addEventListener('click', () => {
        carouselHtml.prev();
      });
      nextButton.addEventListener('click', () => {
        carouselHtml.next();
      });
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
    if (modal && modal.isVisible()){
      modal.hide()
      if (this.fromOtherComp){
        this.fromOtherComp = false
        this.scroll(<HTMLElement>document.getElementById('grid-'+modalName.replace('Modal','')))
      }
    }
  }

}
