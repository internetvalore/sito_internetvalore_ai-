export interface VideoSpot {
  id: string;
  title: string;
  theme: string;
  seoPain: string;
  youtubeId: string;
  pain: string;
  agitate: string;
  relief: string;
  script: string;
  question: string;
  linkedin: string;
  facebook: string;
  en?: VideoSpotText;
}

/** Fields of a video card that are shown on the site and have an English version. */
export interface VideoSpotText {
  title: string;
  theme: string;
  seoPain: string;
  pain: string;
  agitate: string;
  relief: string;
  script: string;
  question: string;
}

/**
 * Returns the card with its displayed fields in the requested language.
 * Falls back to the Italian fields when no English block is available.
 * `theme` is localized too; use `v.theme` (Italian) as a stable grouping key.
 */
export function localizedVideo(v: VideoSpot, lang: string): VideoSpot {
  if (lang === 'en' && v.en) {
    return { ...v, ...v.en };
  }
  return v;
}

export const videoList: VideoSpot[] = [
  {
    id: "v01",
    youtubeId: "Wxs7oweKq6k",
    title: "V01 — Si sono rotti gli occhi, non le gambe",
    theme: "Gli occhi prima delle gambe",
    seoPain: "crollo conversioni ads tag rotto",
    pain: "Le conversioni del tuo e-commerce crollano a zero all'improvviso, scatenando il panico del lunedì mattina.",
    agitate: "Pensi subito a un crollo del mercato o a campagne difettose. Riunioni d'urgenza, budget tagliati all'istante, quando magari le vendite reali a gestionale continuano ad andare benissimo ed è solo caduto il pixel di tracciamento.",
    relief: "Il nostro sistema distingue all'istante un crollo delle vendite da un tag di tracciamento disattivato, verificando se clic e carrelli tengono. Ripariamo la misura invece di distruggere campagne sane.",
    script: "Lunedì mattina: apri il pannello e le conversioni sono sparite. Panico, riunione d'urgenza, e qualcuno propone già di tagliare le campagne. E se non fosse crollato niente? A volte si rompe solo il misuratore: il tag, quel piccolo contatore che registra gli acquisti sul sito, cade con un aggiornamento e da quel giorno tace. Le vendite continuano, ma il pannello dice zero. Oggi si può distinguere, prima di ogni giudizio, un crollo vero da un dato rotto: si verifica che il numero sia sano, poi giudica. Se l'acquisto tace mentre i clic e i carrelli reggono, il verdetto è chiaro: ripara la misura, non toccare le campagne che vendono. E non devi fidarti sulla parola: apri i tuoi pannelli e lo vedi coi tuoi occhi. Da quella data le conversioni spariscono, i clic no, e gli ordini nel tuo gestionale non sono calati. Questa sentinella è nata da un episodio successo davvero, trasformato in un controllo automatico. Perché il danno peggiore non è il falso allarme: è spegnere una campagna sana per colpa di un numero falso. Alla prossima riunione fai una domanda semplice alla tua agenzia: se le conversioni crollano, sapete dirmi se si sono rotte le vendite o il misuratore? Se cala il silenzio, forse è il momento di parlarne con chi lo fa già.",
    question: "Se le mie conversioni crollano, sai dirmi se si sono rotte le vendite o solo il misuratore — prima di toccare le campagne?",
    en: {
      title: "V01 — The eyes broke, not the legs",
      theme: "Eyes before legs",
      seoPain: "ads conversions drop broken tag",
      pain: "Your e-commerce conversions suddenly drop to zero, setting off Monday-morning panic.",
      agitate: "Your first thought is a market collapse or faulty campaigns. Emergency meetings, budgets cut on the spot, when the real sales in your back office may still be doing great and all that happened is the tracking pixel went down.",
      relief: "Our system instantly tells a sales collapse apart from a disabled tracking tag by checking whether clicks and carts are holding up. We fix the measurement instead of destroying healthy campaigns.",
      script: "Monday morning: you open the dashboard and the conversions are gone. Panic, an emergency meeting, and someone is already proposing to cut the campaigns. What if nothing actually collapsed? Sometimes only the measuring tool breaks: the tag, that small counter that records purchases on your site, goes down with an update and from that day on it stays silent. Sales keep coming in, but the dashboard says zero. Today you can tell a real collapse from broken data before passing any judgment: first you check that the number is healthy, then you judge. If purchases go silent while clicks and carts hold up, the verdict is clear: fix the measurement, don't touch the campaigns that are selling. And you don't have to take anyone's word for it: open your own dashboards and see it with your own eyes. From that date the conversions disappear, the clicks don't, and the orders in your back office haven't dropped. This sentinel was born from an episode that really happened, turned into an automatic check. Because the worst damage isn't the false alarm: it's switching off a healthy campaign because of a false number. At your next meeting, ask your agency a simple question: if conversions collapse, can you tell me whether it's sales that broke or the measuring tool? If the room goes quiet, maybe it's time to talk to someone who already does this.",
      question: "If my conversions collapse, can you tell me whether it's sales that broke or just the measuring tool — before touching the campaigns?"
    },
    linkedin: "Le conversioni a picco non sempre significano vendite a picco.\n\nA volte si è rotto solo il misuratore: un tag caduto con l'ultimo aggiornamento del sito, e da quel giorno il pannello dice zero mentre gli ordini continuano.\n\nIl copione classico: panico del lunedì, si taglia un canale sano, e settimane dopo si scopre che era un falso allarme. Doppio danno.\n\nOgi si può fare diversamente: prima di ogni verdetto, verificare che il dato sia sano. Se l'acquisto tace ma clic e carrelli reggono, la diagnosi è «ripara la misura», non «spegni la campagna».\n\nE il cliente lo verifica nei propri pannelli.\n\nLa domanda da fare alla vostra agenzia: sapreste distinguere un crollo vero da un tag rotto?",
    facebook: "Lunedì mattina apri i numeri e sembra crollato tutto. Prima di farti prendere dal panico (o di spegnere le campagne), c'è una domanda da farsi: è crollato il negozio o si è rotto il contatore? Perché a volte le vendite vanno benissimo — è solo il misuratore che ha smesso di contare. E accorgersene prima di decidere cambia tutto."
  },
  {
    id: "v02",
    youtubeId: "QDNf-Wi4-yQ",
    title: "V02 — Gli ordini invisibili",
    theme: "Gli occhi prima delle gambe",
    seoPain: "ordini e-commerce non tracciati analytics",
    pain: "Una fetta consistente dei tuoi ordini reali non viene registrata nei report di Google Analytics.",
    agitate: "Cookie banner rifiutati, browser con adblocker e restrizioni dei telefoni oscurano fino al 40% delle transazioni. Stai prendendo decisioni di scala dei budget basandoti su report monchi, rischiando di spegnere inserzioni in attivo.",
    relief: "Il nostro riconciliatore confronta gli ordini reali del tuo gestionale (Shopify) con quelli visti da GA4. Calcoliamo la percentuale esatta di copertura del dato, dicendoti quanto vale davvero il tuo ritorno.",
    script: "Ogni giorno una parte dei tuoi ordini sparisce dai report: non dalla cassa, dai dati su cui decidi il budget. Tra cookie rifiutati e telefoni che bloccano i tracciamenti, ogni e-commerce è in parte cieco — ma nessuno ti dice quanto. Oggi si può misurare. Si prendono gli ordini veri del tuo gestionale, giorno per giorno, e si confrontano con quelli che gli strumenti di marketing riescono a vedere. Ne esce un numero solo: la copertura, cioè quanta parte del tuo business i dati vedono davvero. In un caso reale il tracciamento vedeva circa la metà degli ordini. Il ritorno vero era circa il doppio di quello misurato. Con un buco così, una campagna può sembrare in perdita mentre sta guadagnando. E la verifica la fai tu, coi tuoi occhi: apri il pannello del tuo negozio, conti gli ordini di ieri, li confronti col report. Cinque minuti. Serve una cosa sola: i tuoi ordini veri. E se quel dato non c'è, un sistema serio lo dichiara, non lo inventa. Alla prossima riunione fai una domanda semplice alla tua agenzia: quanti dei miei ordini vedete davvero? Se la risposta è vaga, adesso sai cosa significa. Decidere sul dato vero si può. E si dorme meglio.",
    question: "Quanti dei miei ordini veri vede il vostro tracciamento — e sapreste darmi un numero che posso verificare da solo, in cinque minuti?",
    en: {
      title: "V02 — The invisible orders",
      theme: "Eyes before legs",
      seoPain: "e-commerce orders not tracked in analytics",
      pain: "A substantial share of your real orders never shows up in your Google Analytics reports.",
      agitate: "Rejected cookie banners, browsers with ad blockers and phone restrictions hide up to 40% of transactions. You are making budget-scaling decisions based on incomplete reports, at the risk of switching off ads that are actually profitable.",
      relief: "Our reconciler compares the real orders in your back office (Shopify) with the ones GA4 sees. We calculate the exact coverage percentage of your data, telling you what your return is really worth.",
      script: "Every day some of your orders disappear from your reports: not from the till, but from the data you base your budget on. Between rejected cookies and phones that block tracking, every e-commerce store is partly blind — but nobody tells you how blind. Today it can be measured. You take the real orders from your back office, day by day, and compare them with the ones your marketing tools manage to see. The result is a single number: coverage, meaning how much of your business the data actually sees. In one real case, tracking saw about half of the orders. The real return was about double the measured one. With a gap like that, a campaign can look like it's losing money while it's actually making money. And you do the check yourself, with your own eyes: open your store's dashboard, count yesterday's orders, compare them with the report. Five minutes. It takes just one thing: your real orders. And if that data isn't there, a serious system says so; it doesn't make it up. At your next meeting, ask your agency a simple question: how many of my orders do you actually see? If the answer is vague, now you know what that means. Deciding on real data is possible. And you sleep better.",
      question: "How many of my real orders does your tracking see — and could you give me a number I can check myself, in five minutes?"
    },
    linkedin: "Quanta parte dei tuoi ordini è invisibile ai tuoi report? In un caso reale era circa la metà. E nessuno l'aveva mai misurato.\n\nCookie rifiutati, telefoni che bloccano i tracciamenti: ogni e-commerce è in parte cieco.\n\nIl punto non è la cecità. È che nessuno la misura.\n\nOggi si può: confrontare gli ordini veri del gestionale con quelli che gli strumenti vedono. Ne esce un numero: la copertura.\n\nE il ritorno vero? Circa il doppio di quello misurato: una campagna può sembrare \"in perdita\" mentre guadagna.\n\nLa verifica? La fai tu: conti gli ordini nel tuo pannello, li confronti col report. Cinque minuti.\n\nDomanda per la tua agenzia: quanti dei miei ordini vedete davvero?",
    facebook: "Ti fidi dei numeri che vedi nei report delle campagne? Guarda che una fetta dei tuoi ordini lì dentro non c'è mai entrata. Non è colpa di nessuno: cookie rifiutati, telefoni che bloccano tutto. Il vero problema è che nessuno ti ha mai detto quanto è grande il buco."
  },
  {
    id: "v03",
    youtubeId: "rA6njGfAANM",
    title: "V03 — L'arbitro che mancava",
    theme: "Gli occhi prima delle gambe",
    seoPain: "discrepanza dati conversioni google meta facebook ads",
    pain: "A fine mese, le piattaforme pubblicitarie si auto-incensano e la somma delle vendite dichiarate supera le vendite reali.",
    agitate: "Meta Ads dichiara 100 conversioni, Google Ads dice 80, e il tuo conto in banca ne conta solo 90. Chi ha venduto cosa? L'agenzia tende a mostrarti la campana più conveniente pur di difendere il proprio lavoro.",
    relief: "Affianchiamo in una singola vista la spesa e le vendite di ciascuna sorgente contro il dato reale riconciliato, calcolando l'effetto della sovrapposizione per darti un numero pulito su cui basare le riunioni.",
    script: "Fine mese: tre pannelli, tre verità. Meta dice cento, Google dice ottanta, il tuo sito ne conta novanta — e l'agenzia cita il numero che la fa più bella. Oggi questa guerra si può chiudere. Si mettono in fila, sullo stesso periodo, tutti i conteggi: quello dichiarato da ogni piattaforma, che spesso reclama la stessa vendita, e quello riconciliato col dato reale. Il sovra-conteggio si misura, nero su bianco. E lo scarto che resta inspiegato viene dichiarato tale, non spazzato sotto il tappeto. C'è di più. Prima di raddoppiare il budget su una campagna «vincente», si verifica se quel merito regge cambiando la finestra di attribuzione, cioè le regole con cui una piattaforma si prende il merito di una vendita. Se al cambiare delle regole il verdetto balla, quel merito è sabbia: meglio un esperimento, prima di scalare. E lo controlli coi tuoi occhi: quei tre numeri sono già nei tuoi pannelli. Il report li affianca e spiega la differenza, invece di nasconderla. Se cerchi contatti e non vendite, vale lo stesso: prima si contano i contatti veri, poi si parla di costo per contatto. Alla prossima riunione porta una sola domanda alla tua agenzia: sapresti dirmi quale numero usare, e perché? Se la risposta è il pannello che le conviene, adesso sai cosa manca: un arbitro.",
    question: "Sapresti mettermi in fila, sullo stesso periodo, il numero di Meta, quello di Google e quello del mio sito — e dirmi quale usare in riunione, e perché?",
    en: {
      title: "V03 — The missing referee",
      theme: "Eyes before legs",
      seoPain: "conversion data discrepancy google meta facebook ads",
      pain: "At the end of the month, the ad platforms pat themselves on the back and the sales they claim add up to more than your real sales.",
      agitate: "Meta Ads claims 100 conversions, Google Ads says 80, and your bank account counts only 90. Who sold what? The agency tends to show you whichever version suits it best, just to defend its own work.",
      relief: "We put each source's spend and sales side by side in a single view against the reconciled real data, calculating the effect of the overlap to give you one clean number to base your meetings on.",
      script: "End of the month: three dashboards, three truths. Meta says a hundred, Google says eighty, your site counts ninety — and the agency quotes whichever number makes it look best. Today this war can be ended. You line up all the counts over the same period: the one each platform claims, often claiming the same sale, and the one reconciled with real data. The over-counting is measured, in black and white. And whatever gap remains unexplained is declared as such, not swept under the rug. There's more. Before doubling the budget on a “winning” campaign, you check whether that credit holds up when you change the attribution window, meaning the rules a platform uses to take credit for a sale. If the verdict shifts when the rules change, that credit is built on sand: better to run an experiment before scaling. And you check it with your own eyes: those three numbers are already in your dashboards. The report puts them side by side and explains the difference, instead of hiding it. If you're after leads rather than sales, the same applies: first you count the real leads, then you talk about cost per lead. At your next meeting, bring just one question for your agency: can you tell me which number to use, and why? If the answer is whichever dashboard suits them, now you know what's missing: a referee.",
      question: "Could you line up, over the same period, Meta's number, Google's number and my site's number — and tell me which one to use in the meeting, and why?"
    },
    linkedin: "Meta dice 100. Google dice 80. Il sito dice 90.\n\nQuale porti in riunione?\n\nA fine mese ogni piattaforma reclama la stessa vendita, e ogni pannello racconta la sua verità. Troppe agenzie citano il numero che le fa più belle.\n\nOggi si può fare diversamente: mettere in fila i tre conteggi sullo stesso periodo, misurare quanto le piattaforme si auto-incensano, dichiarare lo scarto che resta inspiegato — invece di nasconderlo.\n\nE prima di scalare una campagna «vincente», verificare se il suo merito regge quando cambiano le regole del conteggio. Se balla, è sabbia, non roccia.\n\nIl numero difendibile esiste. Serve solo qualcuno che arbitri, invece di tifare.\n\nChiedilo alla tua agenzia: sapresti farmi questo?",
    facebook: "Ti è mai capitato? Fine mese, apri i pannelli e ogni piattaforma ti racconta una storia diversa sulla stessa vendita. E tu lì a chiederti: ma a chi devo credere? La verità è che nessuno mente per forza: contano cose diverse, con regole diverse. E oggi si può finalmente mettere ordine."
  },
  {
    id: "v04",
    youtubeId: "QvcrLhd3CPc",
    title: "V04 — Numeri veri o niente",
    theme: "Gli occhi prima delle gambe",
    seoPain: "affidabilita report marketing agenzia",
    pain: "Ricevere report pieni di stime arbitrarie o metriche di vanità che non hanno senso per la tua modalità di business.",
    agitate: "Se raccogli lead per vendere contratti complessi, farti vedere il ROAS stimato è un inganno. Pagine di dati poco coerenti compilate pur di mostrare attività creano sfiducia e ti spingono a decidere sulla base di sensazioni.",
    relief: "La nostra suite si rifiuta di produrre verdetti in euro se i dati del periodo non superano i severi controlli di consistenza. Inoltre, per i business di lead generation eliminiamo del tutto il ROAS per parlare unicamente di costo per lead reale.",
    script: "Ti è mai capitato di ricevere un report bellissimo e di non fidarti fino in fondo? Hai ragione: nel nostro settore troppi numeri sono fatti per fare bella figura, non per farti decidere. Oggi esiste un'alternativa. Un sistema dove l'onestà non è una promessa: è una regola che nemmeno noi possiamo aggirare. Prima di ogni analisi, controlla se i dati coprono davvero il periodo che chiedi. Se la misurazione è compromessa, non ricevi verdetti in euro: ricevi un giudizio prudente, dichiarato nero su bianco. E ogni business viene giudicato col suo metro. Se vendi preventivi, nel tuo report il ROAS — il ritorno sulla spesa pubblicitaria, una metrica da e-commerce — semplicemente non c'è. C'è il costo per ogni contatto vero. Come lo verifichi? Coi tuoi occhi. Prendi un periodo che sai essere misurato male e chiedi un verdetto. Un sistema onesto si rifiuta. Ti dice cosa non può dire, e perché. Perché quando un numero arriva sul tuo tavolo, deve reggere. E quando il dato non basta, meriti di sentirtelo dire in faccia: la prudenza è protezione, non timidezza. Alla prossima riunione fai una domanda semplice alla tua agenzia: quando i dati non bastano, il vostro report sa dirmelo da solo? Ascolta bene la risposta. E se ti lascia un dubbio, sai dove trovarci.",
    question: "Quando i dati non bastano per un verdetto, il vostro report sa dirmelo da solo — o il numero me lo date comunque?",
    en: {
      title: "V04 — Real numbers or nothing",
      theme: "Eyes before legs",
      seoPain: "marketing agency report reliability",
      pain: "Getting reports full of arbitrary estimates or vanity metrics that make no sense for your business model.",
      agitate: "If you collect leads to sell complex contracts, showing you an estimated ROAS is misleading. Pages of inconsistent data compiled just to show activity breed distrust and push you to decide on gut feeling.",
      relief: "Our suite refuses to produce verdicts in euros if the data for the period fails strict consistency checks. And for lead generation businesses we drop ROAS entirely and talk only about the real cost per lead.",
      script: "Have you ever received a beautiful report and not quite trusted it? You're right: in our industry too many numbers are made to look good, not to help you decide. Today there's an alternative. A system where honesty isn't a promise: it's a rule that not even we can get around. Before any analysis, it checks whether the data really covers the period you're asking about. If the measurement is compromised, you don't get verdicts in euros: you get a cautious assessment, stated in black and white. And every business is judged by its own yardstick. If you sell quotes, ROAS — return on ad spend, an e-commerce metric — simply isn't in your report. What's there is the cost of every real lead. How do you verify it? With your own eyes. Take a period you know was poorly measured and ask for a verdict. An honest system refuses. It tells you what it can't say, and why. Because when a number lands on your desk, it has to hold up. And when the data isn't enough, you deserve to be told so to your face: caution is protection, not timidity. At your next meeting, ask your agency a simple question: when the data isn't enough, can your report tell me so on its own? Listen carefully to the answer. And if it leaves you in doubt, you know where to find us.",
      question: "When the data isn't enough for a verdict, can your report tell me so on its own — or do you give me the number anyway?"
    },
    linkedin: "Il report più onesto della tua vita contiene una frase scomoda: «questo periodo non è giudicabile».\n\nNel nostro settore i numeri si vestono a festa.\nRitorni pubblicitari sventolati a chi vende preventivi. Crescite brillanti costruite su dati pieni di buchi mai dichiarati.\n\nNoi abbiamo scelto un'altra strada.\nUn sistema dove l'onestà è una regola meccanica, non una slide.\nSe i dati non coprono il periodo, il verdetto in euro non esce.\nSe vendi contatti e non prodotti, il ROAS nel tuo report semplicemente non c'è: c'è il costo per contatto.\n\nLa prova? Chiedi un verdetto su un periodo che sai essere misurato male. Il sistema si rifiuta.\n\nPoi chiedi alla tua agenzia: «se i dati non bastano, me lo dite?»",
    facebook: "Quanti report hai ricevuto che sembravano perfetti… ma qualcosa non ti tornava? Numeri belli, sensazione strana. Noi abbiamo costruito un sistema che preferisce dirti «non lo so» piuttosto che inventare un numero. E non è gentilezza: è che proprio non può farlo."
  },
  {
    id: "v05",
    youtubeId: "8CZk2VTcvic",
    title: "V05 — Il silenzio che significa «va tutto bene»",
    theme: "Gli occhi prima delle gambe",
    seoPain: "allarme tracking e-commerce interrotto",
    pain: "I tracciamenti si rompono all'improvviso o le campagne spendono oltre i limiti, e te ne accorgi solo al report di fine mese.",
    agitate: "Nel frattempo, per settimane le tue campagne girano a vuoto o bruciano budget per lead spazzatura o a causa di link rotti sul sito, lasciandoti con enormi danni economici irrecuperabili.",
    relief: "Attiviamo un monitoraggio continuo (sentinelle attive) che scansiona i flussi e invia un unico allarme critico, chiaro e tempestivo, dicendoti cosa riparare ed evitando decine di email di rumore.",
    script: "C'è un guasto che non fa rumore: il modulo contatti che smette di registrare le richieste, un'autorizzazione che scade, un indirizzo scritto male che fa sparire visite dai conteggi. E lo scopri a fine mese, dopo settimane di decisioni prese alla cieca. Oggi si può fare diversamente. Una sentinella veglia su ciò che conta: le conversioni — cioè i contatti e le vendite registrate — che vanno a zero in silenzio, la spesa che corre troppo o troppo piano, il ritorno sotto il punto di pareggio, i numeri che non si aggiornano da giorni. Quando qualcosa non torna, non ti arrivano cento avvisi: ne arriva uno, quello giusto, che dice quale segnale si è rotto, da quando, quanto pesa, e la mossa per rimediare. E lo verifichi coi tuoi occhi: apri i tuoi strumenti, cerchi quel segnale in quelle date. Il buco si vede in un minuto. Quando è tutto a posto, la risposta è esplicita: tutto tranquillo. Non è assenza di controllo. È qualcuno che fa la guardia ai tuoi soldi anche quando non ci pensi. Alla prossima riunione, chiedi alla tua agenzia: se domani il mio modulo smette di registrare le richieste, in quanti giorni ve ne accorgete? Ascolta la risposta. Se cala il silenzio sbagliato, parlane con chi una risposta ce l'ha.",
    question: "Se domani il mio modulo contatti smette di registrare le richieste, voi in quanti giorni ve ne accorgete?",
    en: {
      title: "V05 — The silence that means “everything's fine”",
      theme: "Eyes before legs",
      seoPain: "e-commerce tracking interrupted alert",
      pain: "Tracking breaks without warning or campaigns overspend their limits, and you only find out from the end-of-month report.",
      agitate: "Meanwhile, for weeks your campaigns run on empty or burn budget on junk leads or broken links on your site, leaving you with huge, unrecoverable financial damage.",
      relief: "We switch on continuous monitoring (active sentinels) that scans the data flows and sends a single critical alert, clear and timely, telling you what to fix and sparing you dozens of noisy emails.",
      script: "There's a kind of failure that makes no noise: the contact form that stops recording requests, an authorization that expires, a mistyped address that makes visits vanish from the counts. And you find out at the end of the month, after weeks of decisions made blind. Today it can be done differently. A sentinel watches over what matters: conversions — meaning the leads and sales being recorded — silently dropping to zero, spend running too fast or too slow, return falling below break-even, numbers that haven't updated in days. When something doesn't add up, you don't get a hundred alerts: you get one, the right one, telling you which signal broke, since when, how much it weighs, and the move that fixes it. And you check it with your own eyes: open your tools and look for that signal on those dates. The gap shows up in a minute. When everything is fine, the answer is explicit: all quiet. That's not a lack of oversight. It's someone guarding your money even when you're not thinking about it. At your next meeting, ask your agency: if my form stops recording requests tomorrow, how many days will it take you to notice? Listen to the answer. If you get the wrong kind of silence, talk to someone who has an answer.",
      question: "If my contact form stops recording requests tomorrow, how many days will it take you to notice?"
    },
    linkedin: "Il guasto peggiore è quello che non fa rumore.\n\nUn modulo che smette di registrare le richieste. Un'autorizzazione che scade. Un indirizzo scritto male che fa sparire le visite dai conteggi.\n\nNessun errore a schermo. Solo settimane di decisioni prese su numeri sbagliati — scoperte a fine mese.\n\nOggi esiste un'alternativa: una sentinella che sorveglia ciò che conta e parla solo quando c'è qualcosa. Un avviso, non cento. Con il segnale esatto, da quando, e il rimedio — verificabile in un minuto.\n\nE quando tace? Non è distrazione. È un «tutto tranquillo» detto per esteso.\n\nDomanda per la tua agenzia: se domani i contatti e le vendite smettono di essere registrati, chi se ne accorge — e quando?",
    facebook: "Ti è mai capitato di scoprire solo a fine mese che il modulo contatti del sito aveva smesso di funzionare? Settimane di richieste perse, e nessuno se n'era accorto. Sono i guasti silenziosi: non fanno rumore, ma costano. La buona notizia è che oggi qualcuno può fare la guardia al posto tuo."
  },
  {
    id: "v06",
    youtubeId: "f63mqaNu72Q",
    title: "V06 — Il fatturato non paga le bollette",
    theme: "I soldi veri",
    seoPain: "calcolare poas profitto reale ecommerce ads",
    pain: "Il report dell'agenzia mostra crescite di ROAS, ma il conto in banca aziendale stagna o decresce.",
    agitate: "Il ROAS calcola le entrate lorde. Se vendi prodotti con margini bassi, o se una fetta delle vendite viene annullata da resi e rimborsi successivi, potresti stare accumulando vendite in perdita mentre l'agenzia festeggia.",
    relief: "Importiamo i margini industriali del tuo catalogo e correggiamo le entrate pubblicitarie al netto dei resi storici reali, ottimizzando le campagne Google e Meta sul POAS (profitto netto sulle ads) invece che sul fatturato fittizio.",
    script: "Il tuo report dice che la pubblicità va alla grande. E allora perché, a fine mese, in banca non se ne vede traccia? Quasi tutti i report festeggiano il ROAS: quanto fatturato torna per ogni euro speso in pubblicità. Ma il fatturato non paga le bollette. Se un prodotto ha un margine basso, puoi vendere tanto e perdere soldi mentre brindi. E se vendi moda o arredo, il best seller che torna indietro un reso dopo l'altro sembra un campione — e intanto ti brucia margine due volte. Oggi si può fare diversamente: giudicare ogni campagna sul profitto che genera per euro speso, con il fatturato corretto per resi e rimborsi. Conta quello che resta, non quello che transita e poi torna indietro. Con questo metro la classifica cambia, e il budget va dove guadagni davvero. E quando il margine non è disponibile, si dice chiaramente, senza inventare. La cosa più bella? Il conto puoi rifarlo tu, a mano, con i tuoi margini e i tuoi resi: li conosci meglio di chiunque. Se torna, ti fidi. Se non torna, hai scoperto qualcosa. Se hai un e-commerce, alla prossima riunione fai una domanda semplice alla tua agenzia: la classifica delle mie campagne, sapresti rifarmela sul margine, resi inclusi? Poi guarda la faccia di chi ti risponde.",
    question: "Le mie campagne sapresti giudicarle sul margine che mi resta, resi inclusi, invece che sul fatturato?",
    en: {
      title: "V06 — Revenue doesn't pay the bills",
      theme: "Real money",
      seoPain: "calculate poas real profit ecommerce ads",
      pain: "The agency's report shows ROAS growing, but the company bank account is flat or shrinking.",
      agitate: "ROAS measures gross revenue. If you sell low-margin products, or if part of your sales is later canceled by returns and refunds, you could be piling up loss-making sales while the agency celebrates.",
      relief: "We import the real product margins of your catalog and correct ad revenue net of actual historical returns, optimizing Google and Meta campaigns on POAS (net profit on ad spend) instead of on illusory revenue.",
      script: "Your report says advertising is going great. So why, at the end of the month, is there no sign of it in the bank? Almost every report celebrates ROAS: how much revenue comes back for every euro spent on advertising. But revenue doesn't pay the bills. If a product has a low margin, you can sell a lot and lose money while you're raising a toast. And if you sell fashion or furniture, the best seller that keeps coming back, one return after another, looks like a champion — and meanwhile it burns your margin twice. Today it can be done differently: judge every campaign on the profit it generates per euro spent, with revenue corrected for returns and refunds. What counts is what stays, not what passes through and then comes back. With this yardstick the ranking changes, and the budget goes where you actually make money. And when the margin isn't available, that's stated clearly, without making anything up. The best part? You can redo the math yourself, by hand, with your own margins and your own returns: you know them better than anyone. If it adds up, you can trust it. If it doesn't, you've discovered something. If you run an e-commerce store, at your next meeting ask your agency a simple question: could you redo the ranking of my campaigns on margin, returns included? Then watch the face of whoever answers.",
      question: "Could you judge my campaigns on the margin I'm left with, returns included, instead of on revenue?"
    },
    linkedin: "Un ritorno «da festeggiare» su prodotti a basso margine può essere una perdita.\n\nEppure nei report si festeggia.\n\nIl fatturato non paga le bollette. Il margine sì.\n\nQuando il cliente fornisce i suoi margini, ogni campagna si giudica sul profitto che genera per euro speso. E il fatturato viene corretto per resi e rimborsi: conta quello che resta, non quello che transita e torna indietro.\n\nCon questo metro, la classifica di cosa scalare cambia. E i resi maturano col tempo: si dichiara anche questo.\n\nIl conto? Si rifà a mano, coi margini e i resi del cliente — che li conosce meglio di chiunque.\n\nLe tue campagne, oggi, su cosa vengono giudicate?",
    facebook: "Hai presente quando il report dice «mese record» ma il conto in banca racconta un'altra storia? Succede quando si festeggia il fatturato invece di quello che ti resta in tasca. Se hai un e-commerce — soprattutto moda o arredo, dove i resi sono di casa — questa cosa ti riguarda da vicino."
  },
  {
    id: "v07",
    youtubeId: "q4b9JkLwEZM",
    title: "V07 — Stai ricomprando i tuoi clienti",
    theme: "I soldi veri",
    seoPain: "cannibalizzazione brand google ads",
    pain: "Spendi budget considerevole su Google Ads per posizionarti sul tuo stesso nome (branded keywords).",
    agitate: "Questi utenti ti conoscono già e cliccherebbero comunque sul tuo risultato organico gratuito in prima posizione. Stai pagando Google per portarti contatti che avevi già in tasca, riducendo le risorse destinate alla vera acquisizione.",
    relief: "Il nostro rilevatore di cannibalizzazione analizza se sei stabile al primo posto in organico e spegne le inserzioni branded ridondanti, monitorando che la tua quota non venga attaccata dai concorrenti.",
    script: "C'è un paradosso che nessuno ti spiega: la campagna col costo più basso, quella che nel report sembra la migliore, è spesso la più inutile. Perché raccoglie clienti che ti avrebbero trovato comunque, cercando il tuo nome. Oggi quella scatola si può aprire. Si incrociano i risultati gratuiti di Google con le campagne a pagamento e si vede quanta spesa va su ricerche del tuo brand per cui sei già primo senza pagare. Anche dentro Performance Max, la campagna automatica che decide da sola dove mostrare i tuoi annunci. Così distingui chi ti porta clienti nuovi da chi ricompra i tuoi. Attenzione: difendere il tuo nome a volte serve davvero. Per questo, prima di togliere qualsiasi cosa, si verifica che il tuo posizionamento regga: escludere alla cieca è rischioso quanto pagare per niente. Ma una regola resta scritta nel software: il tuo brand non si spaccia per crescita. Nemmeno quando il consiglio arriva da Google. La prova puoi fartela da solo: apri Google in incognito, cerca la tua azienda e guarda cosa c'è sopra il tuo risultato. Quel clic lo stai pagando tu. Alla tua agenzia chiedi solo questo: sapete misurarlo e fermarlo? Se la risposta ti convince, tienili stretti. Se resta il silenzio, noi lo facciamo vedere ogni giorno.",
    question: "Sapresti mostrarmi quanta della mia spesa su Google compra clic che il mio posizionamento mi porterebbe gratis — e fermarla?",
    en: {
      title: "V07 — You're buying back your own customers",
      theme: "Real money",
      seoPain: "google ads brand cannibalization",
      pain: "You spend a considerable budget on Google Ads to rank for your own name (branded keywords).",
      agitate: "These users already know you and would click on your free organic result in first position anyway. You're paying Google to bring you leads you already had in your pocket, shrinking the resources left for real acquisition.",
      relief: "Our cannibalization detector checks whether you hold a stable first place in organic results and switches off redundant branded ads, while monitoring that your share isn't being attacked by competitors.",
      script: "There's a paradox nobody explains to you: the campaign with the lowest cost, the one that looks best in the report, is often the most useless. Because it collects customers who would have found you anyway, by searching for your name. Today that box can be opened. Google's free results are cross-checked against the paid campaigns, and you see how much spend goes on searches for your brand where you're already first without paying. Even inside Performance Max, the automated campaign that decides on its own where to show your ads. That way you can tell who brings you new customers from who is buying back the ones you already have. A word of caution: defending your name is sometimes genuinely necessary. That's why, before removing anything, we check that your ranking holds up: excluding blindly is as risky as paying for nothing. But one rule stays written into the software: your brand is never passed off as growth. Not even when the advice comes from Google. You can test it yourself: open Google in incognito mode, search for your company and look at what sits above your result. You're paying for that click. Ask your agency just this: can you measure it and stop it? If the answer convinces you, hold on to them. If there's silence, we show it every day.",
      question: "Could you show me how much of my Google spend is buying clicks that my ranking would bring me for free — and stop it?"
    },
    linkedin: "La campagna col costo più basso del tuo report è spesso la più inutile.\n\nRaccoglie clienti che ti avrebbero trovato comunque, cercando il tuo nome su Google.\nTu paghi il clic. Il report festeggia.\nE il budget che dovrebbe comprare crescita ricompra clienti che avevi già.\n\nOggi si può misurare: incrociare i risultati organici con le campagne a pagamento — anche quelle automatiche — e vedere quanta spesa va su ricerche per cui sei già primo gratis.\n\nCon una regola scritta nel software: il brand non si spaccia per crescita.\nNemmeno quando è Google a suggerirlo.\n\nLa prova? Cerca il tuo brand in incognito. Guarda cosa c'è sopra il tuo risultato.\n\nPoi chiedi alla tua agenzia: sapreste mostrarmelo?",
    facebook: "Prova una cosa adesso: apri Google in incognito e cerca il nome della tua azienda. C'è il tuo annuncio a pagamento sopra il tuo sito? Allora stai pagando per clienti che erano già tuoi. E nel report, quella spesa sembra la cosa che funziona meglio di tutte."
  },
  {
    id: "v08",
    youtubeId: "tJejrvR0BCc",
    title: "V08 — La risposta che a nessuno conviene darti",
    theme: "I soldi veri",
    seoPain: "impression share persa rank budget google ads",
    pain: "L'agenzia ti chiede continuamente aumenti di budget per scalare i risultati delle campagne.",
    agitate: "Tuttavia, se le inserzioni perdono visibilità per scarsa qualità degli annunci (Rank) e non per mancanza di fondi, versare altri soldi servirà solo ad arricchire Google acquistando visualizzazioni inefficienti.",
    relief: "Analizziamo i dati d'asta e separiamo matematicamente la visibilità persa per Rank da quella persa per Budget. Ti indichiamo quando ottimizzare i copy e le pagine invece di sborsare denaro extra.",
    script: "«Serve più budget.» Quante volte te lo sei sentito dire — e quante volte ti è rimasto il dubbio: lo dicono perché serve a me, o perché conviene a loro? Oggi quel dubbio si può sciogliere. Ogni volta che qualcuno cerca su Google si tiene un'asta invisibile tra chi vuole comparire: se tu non compari, i motivi possibili sono due. O il tuo budget è finito, o i tuoi annunci e le tue pagine non reggono il confronto. Sono due malattie diverse: la prima si cura coi soldi, la seconda no — lì altri soldi comprerebbero solo sconfitte più care. Il nostro metodo separa le due cause e traduce la parte curabile col budget in una forchetta onesta di risultati attesi. Non una promessa: una stima che puoi verificare tu stesso, dopo, confrontandola coi numeri veri. E parte sempre da dati che Google mostra anche a te, nel tuo pannello. Prima di chiederti un euro in più, poi, simuliamo l'effetto di spostare la spesa che hai già, a totale fermo. A volte la risposta giusta è «non aumentare». E vale doppio quando la dice chi non ci guadagna. La prossima volta che ti chiedono più budget, rispondi con una domanda: sapresti dimostrarmi quanto perdo per soldi e quanto per qualità? Se cala il silenzio, parliamone.",
    question: "Prima di chiedermi più budget, sapresti dimostrarmi — dati alla mano — quanto sto perdendo per soldi e quanto per qualità?",
    en: {
      title: "V08 — The answer nobody has an interest in giving you",
      theme: "Real money",
      seoPain: "google ads lost impression share rank budget",
      pain: "Your agency keeps asking for budget increases to scale campaign results.",
      agitate: "But if your ads are losing visibility because of poor ad quality (Rank) rather than a lack of funds, pouring in more money will only make Google richer by buying inefficient impressions.",
      relief: "We analyze auction data and mathematically separate the visibility lost to Rank from the visibility lost to Budget. We tell you when to improve your copy and landing pages instead of paying out extra money.",
      script: "“We need more budget.” How many times have you heard that — and how many times have you been left wondering: are they saying it because I need it, or because it suits them? Today that doubt can be cleared up. Every time someone searches on Google, an invisible auction is held among everyone who wants to appear: if you don't appear, there are two possible reasons. Either your budget ran out, or your ads and your pages can't compete. They're two different illnesses: the first is cured with money, the second isn't — there, more money would only buy more expensive defeats. Our method separates the two causes and translates the part that budget can fix into an honest range of expected results. Not a promise: an estimate you can check yourself, afterwards, against the real numbers. And it always starts from data that Google shows you too, in your own dashboard. Then, before asking you for one more euro, we simulate the effect of shifting the spend you already have, with the total unchanged. Sometimes the right answer is “don't increase.” And it counts double when it comes from someone who doesn't profit from it. Next time they ask you for more budget, answer with a question: can you show me how much I'm losing for lack of money and how much for lack of quality? If there's silence, let's talk.",
      question: "Before asking me for more budget, could you show me — with the data in hand — how much I'm losing for lack of money and how much for lack of quality?"
    },
    linkedin: "«Serve più budget.»\nLa frase più pronunciata del marketing digitale. E quella che conviene sempre a chi la dice.\n\nEppure, quando le tue campagne perdono visibilità su Google, le cause possibili sono due.\nUna si cura con i soldi.\nL'altra con la qualità di annunci e pagine — e lì spendere di più significa solo pagare più caro lo stesso problema.\n\nOggi le due cause si possono separare, partendo dai dati d'asta che Google mostra anche a te.\nE si può stimare in modo onesto — una forchetta, non una promessa — cosa porterebbe davvero un aumento.\n\nA volte il verdetto è: non aumentare. Ricolloca quello che hai.\n\nChiedilo alla tua agenzia: sa dirti quanto perdi per budget e quanto per qualità?",
    facebook: "Te l'hanno mai detto, «serve più budget»? E tu, sotto sotto, un dubbio ce l'hai sempre avuto: lo dicono per me o per loro? Ecco: oggi quella domanda ha finalmente una risposta, scritta nei dati. E a volte la risposta è che di soldi in più non ne servono affatto."
  },
  {
    id: "v09",
    youtubeId: "nMczOzc0lgU",
    title: "V09 — A metà mese sai già dove atterri",
    theme: "I soldi veri",
    seoPain: "proiezione budget spesa fine mese ads",
    pain: "Scoprire che il budget pubblicitario è andato fuori controllo o che i risultati sono crollati solo alla consegna del report mensile.",
    agitate: "A quel punto il danno è fatto e fatturato. Non puoi più ridistribuire le risorse o sospendere le campagne inefficienti per limitare le perdite.",
    relief: "Calcoliamo proiezioni dinamiche a metà mese basate sulle traiettorie attuali di spesa e conversione. Ti mostriamo l'atterraggio stimato per darti tempo di sterzare e correggere la rotta.",
    script: "Il report di fine mese arriva quando il mese è già finito e già pagato. Puoi leggerlo, puoi commentarlo, ma non puoi più correggere niente. Oggi si può fare diversamente. A metà mese puoi sapere dove sta atterrando il tuo mese: vendite, contatti, spesa, proiettati sulla traiettoria corrente. Non è una previsione certa, è una traiettoria, dichiarata come tale. Ma ti dice in tempo se qualcosa non torna: una campagna che spende troppo in fretta, una che spende regolare ma non porta risultati. Ed è lì che si corregge, quando il tempo c'è ancora. C'è anche un controllo che quasi nessuno fa: verificare se le piattaforme hanno speso più dei budget impostati. Si chiama overdelivery: è previsto dalle loro regole, ma i soldi sono i tuoi, e qualcuno dovrebbe misurarlo per te. E come fai a fidarti? Semplice: la proiezione è un numero scritto e datato. A fine mese la confronti col risultato vero e giudichi da solo quanto era affidabile. Budget impostato e spesa reale sono nel tuo pannello, riga per riga. Allora fai una prova. Chiedi alla tua agenzia: sapresti dirmi al quindici del mese dove sto atterrando, per iscritto? Ascolta bene la risposta. E se ti resta la curiosità, siamo qui.",
    question: "Sapresti dirmi al quindici del mese dove sto atterrando — con un numero scritto che a fine mese verifichiamo insieme?",
    en: {
      title: "V09 — By mid-month you already know where you'll land",
      theme: "Real money",
      seoPain: "end-of-month ad spend budget projection",
      pain: "Finding out that your ad budget has gone out of control, or that results have collapsed, only when the monthly report arrives.",
      agitate: "By then the damage is done and billed. You can no longer reallocate resources or pause inefficient campaigns to limit the losses.",
      relief: "We calculate dynamic mid-month projections based on current spend and conversion trajectories. We show you the estimated landing point so you have time to steer and correct course.",
      script: "The end-of-month report arrives when the month is already over and already paid for. You can read it, you can comment on it, but you can no longer fix anything. Today it can be done differently. By mid-month you can know where your month is landing: sales, leads, spend, projected along the current trajectory. It's not a certain forecast, it's a trajectory, and it's stated as such. But it tells you in time if something is off: a campaign spending too fast, another one spending steadily but bringing no results. And that's when you correct it, while there's still time. There's also a check almost nobody does: verifying whether the platforms spent more than the budgets you set. It's called overdelivery: their rules allow for it, but it's your money, and someone should be measuring it for you. And how can you trust the projection? Simple: it's a written, dated number. At the end of the month you compare it with the real result and judge for yourself how reliable it was. Budget set and actual spend are in your dashboard, line by line. So run a test. Ask your agency: could you tell me on the fifteenth of the month where I'm landing, in writing? Listen carefully to the answer. And if you're still curious, we're here.",
      question: "Could you tell me on the fifteenth of the month where I'm landing — with a written number that we check together at the end of the month?"
    },
    linkedin: "Il report di fine mese arriva sempre troppo tardi.\n\nIl mese è chiuso, i soldi spesi. Puoi solo prenderne atto.\n\nA metà mese, invece, correggere è ancora possibile.\n\nOggi si può proiettare dove atterrerà il mese e vedere in tempo le campagne che spendono troppo in fretta, troppo piano, o regolari ma senza risultati.\n\nE c'è un controllo che quasi nessuno fa: confrontare la spesa reale con i budget impostati, per capire se le piattaforme hanno consegnato — e fatturato — oltre il previsto.\n\nLa proiezione is un numero scritto e datato. A fine mese si confronta col consuntivo: chi la fa, accetta di farsi giudicare.\n\nDomanda per la tua agenzia: mi sai dire al quindici dove sto atterrando?",
    facebook: "Ti è mai successo? Leggi il report del mese e pensi: ok, ma ormai è andata. Il mese è chiuso, il budget è speso, e tu lo scopri solo adesso. E se invece potessi saperlo al quindici, quando sei ancora in tempo per cambiare rotta?"
  },
  {
    id: "v10",
    youtubeId: "mzQY4U9JL-k",
    title: "V10 — La fine dell'alzata di spalle",
    theme: "Il perché, non le scuse",
    seoPain: "decomposizione algebrica lmdi variazioni marketing",
    pain: "Quando le conversioni o le vendite calano, la risposta dell'agenzia è generica: 'è colpa del mercato o dell'algoritmo'.",
    agitate: "Non sapere il motivo esatto del calo ti spinge a fare scelte d'impulso errate (come cambiare la landing page o rifare il sito) quando magari la causa era solo l'aumento dei CPC o una contrazione temporanea del traffico.",
    relief: "Applichiamo il metodo matematico LMDI per scomporre algebricamente qualsiasi calo. Dividiamo l'impatto dei tre driver essenziali: traffico, scontrino medio e conversione interna (sito), fornendo pesi esatti che sommano precisamente al 100% della variazione.",
    script: "Le vendite calano e la risposta è sempre la stessa: è il mercato, è la stagionalità, è l'algoritmo. Frasi che non puoi verificare, e che spesso portano alla cura sbagliata: rifai il sito quando il problema era altrove. Oggi si può fare di meglio. Quando un numero peggiora — il fatturato, i contatti, il costo per contatto — si può scomporre matematicamente nelle sue cause: quante persone sono arrivate, quante hanno comprato, quanto hanno speso in media. E ogni causa ha il suo peso esatto. Il sistema distingue perfino se a calare è stato il tuo sito o solo il mix di traffico: più visitatori freddi, che non ti conoscono ancora, a parità di sito. La prova? I pesi sommano esattamente al tuo calo. Prendi la calcolatrice: o il conto torna, o non torna. Non è l'opinione di un consulente, è un calcolo che puoi ripetere su ogni periodo. E quando la causa è fuori dai numeri — un concorrente, un prezzo — viene dichiarata per quello che è: un'ipotesi, separata dai fatti. Alla prossima riunione, fai una domanda alla tua agenzia: sapresti dirmi quanto pesa ogni causa di questo calo, con numeri che sommano al cento per cento? Ascolta la risposta. Se l'alzata di spalle non ti basta più, la risposta esiste.",
    question: "Sapresti scompormi questo calo nelle sue cause, ognuna col suo peso esatto, con numeri che sommano al cento per cento della variazione?",
    en: {
      title: "V10 — The end of the shrug",
      theme: "The why, not excuses",
      seoPain: "lmdi algebraic decomposition of marketing changes",
      pain: "When conversions or sales drop, the agency's answer is generic: “it's the market” or “it's the algorithm.”",
      agitate: "Not knowing the exact reason for the drop pushes you into wrong, impulsive choices (like changing the landing page or rebuilding the site) when the cause may simply have been rising CPCs or a temporary dip in traffic.",
      relief: "We apply the LMDI mathematical method to break down any drop algebraically. We separate the impact of the three essential drivers: traffic, average order value and on-site conversion, with exact weights that add up to precisely 100% of the change.",
      script: "Sales drop and the answer is always the same: it's the market, it's seasonality, it's the algorithm. Statements you can't verify, and that often lead to the wrong cure: you rebuild the site when the problem was somewhere else. Today you can do better. When a number gets worse — revenue, leads, cost per lead — it can be broken down mathematically into its causes: how many people arrived, how many bought, how much they spent on average. And each cause has its exact weight. The system can even tell whether it was your site that got worse or just the traffic mix: more cold visitors, who don't know you yet, with the site unchanged. The proof? The weights add up exactly to your drop. Grab a calculator: either the math adds up, or it doesn't. It's not a consultant's opinion, it's a calculation you can repeat on any period. And when the cause lies outside the numbers — a competitor, a price — it's declared for what it is: a hypothesis, kept separate from the facts. At your next meeting, ask your agency one question: can you tell me how much each cause of this drop weighs, with numbers that add up to one hundred percent? Listen to the answer. If a shrug is no longer enough for you, the answer exists.",
      question: "Could you break this drop down into its causes, each with its exact weight, with numbers that add up to one hundred percent of the change?"
    },
    linkedin: "«È il mercato.»\nLa frase più costosa del marketing.\n\nPerché non è verificabile. E porta alla cura sbagliata: settimane a rifare il sito, quando il problema era il costo dei clic. Annunci che funzionavano messi in pausa, quando il problema era chi arrivava sul sito.\n\nOggi un calo si può scomporre matematicamente nelle sue cause, ognuna con il suo peso esatto. E i pesi sommano al 100% della variazione: la verifica si fa con la calcolatrice.\n\nNon un'opinione: un calcolo, ripetibile su ogni periodo.\n\nLa prossima volta che senti «è andata peggio», chiedi: quanto pesa ogni causa?\n\nSe la risposta è un'alzata di spalle, non accontentarti: quei numeri oggi si possono avere. Pretendili dalla tua agenzia.",
    facebook: "Quando le vendite calano, la risposta che ti danno è sempre la stessa: «è il mercato», «è la stagionalità». Ti è mai capitato? Il punto è che quelle frasi non si possono verificare — e intanto si spendono tempo e soldi sulla cura sbagliata. Oggi invece un calo si può scomporre in cause precise, e il conto lo puoi rifare tu con la calcolatrice."
  },
  {
    id: "v11",
    youtubeId: "H4Eblfb8FJ8",
    title: "V11 — Il crollo che non c'era",
    theme: "Il perché, non le scuse",
    seoPain: "test significativita statistica conversioni ads",
    pain: "Prendere decisioni affrettate o farsi prendere dal panico per via delle normali fluttuazioni giornaliere delle vendite.",
    agitate: "Un fine settimana fiacco ti spinge ad azzerare i budget delle ads proprio mentre l'algoritmo stava raccogliendo dati utili. Interrompere i tracciamenti per rumore casuale danneggia le prestazioni future delle campagne.",
    relief: "Utilizziamo test statistici di Poisson per confrontare ciascun giorno con lo storico omologo (es. sabato contro sabato). Etichettiamo ogni calo come 'Rumore', 'Significativo' o 'Dati insufficienti' per evitare falsi allarmi.",
    script: "Lunedì mattina, riunione d'urgenza: «domenica è crollata!». Poi guardi lo storico e scopri che domenica è fatta così, da sempre. Oggi puoi smettere di pagare interventi per problemi che non esistono. Ogni giorno viene confrontato con i suoi pari: il sabato con gli altri sabati, non col venerdì. E ogni variazione, prima di diventare un verdetto, passa un controllo: è un cambiamento vero, è probabile rumore — cioè un'oscillazione casuale che sembra un segnale — oppure i dati sono troppi pochi per dirlo. Vale per tutto: dispositivi, fasce d'età, dove appaiono gli annunci. Un «il mobile non vende» nato da quaranta clic viene etichettato come rumore, non trasformato in un progetto di rifacimento del sito. E lo verifichi coi tuoi occhi: ogni verdetto porta la sua etichetta scritta accanto al numero. Quando le prove non bastano, il sistema lo ammette. Chi ti vende interventi, lo ammette mai? E il confronto lo controlli da solo: apri Google Analytics e guarda dove si piazza questa domenica tra le ultime otto. Alla prossima riunione, chiedi alla tua agenzia: «quando mi segnali un calo, sai dimostrarmi che è reale e non rumore?». Se la risposta è un giro di parole, forse il crollo non era della domenica.",
    question: "Quando mi segnali un calo, sapresti dirmi — e dimostrarmi — se è un cambiamento vero o solo rumore?",
    en: {
      title: "V11 — The collapse that wasn't",
      theme: "The why, not excuses",
      seoPain: "ads conversions statistical significance test",
      pain: "Making hasty decisions or panicking over normal day-to-day fluctuations in sales.",
      agitate: "A slow weekend pushes you to zero out your ad budgets just when the algorithm was collecting useful data. Interrupting tracking because of random noise damages the future performance of your campaigns.",
      relief: "We use Poisson statistical tests to compare each day with its historical counterpart (e.g. Saturday against Saturday). We label every drop as “Noise,” “Significant” or “Insufficient data” to avoid false alarms.",
      script: "Monday morning, emergency meeting: “Sunday collapsed!” Then you look at the history and discover that Sunday is just like that, and always has been. Today you can stop paying for fixes to problems that don't exist. Every day is compared with its peers: Saturday with the other Saturdays, not with Friday. And every change, before it becomes a verdict, goes through a check: is it a real change, is it probably noise — meaning a random fluctuation that looks like a signal — or is there too little data to tell? It applies to everything: devices, age groups, where the ads appear. A “mobile doesn't sell” based on forty clicks gets labeled as noise, not turned into a site redesign project. And you check it with your own eyes: every verdict carries its label, written next to the number. When the evidence isn't enough, the system admits it. Does anyone who sells you fixes ever admit that? And you can check the comparison yourself: open Google Analytics and see where this Sunday ranks among the last eight. At your next meeting, ask your agency: “when you flag a drop, can you prove to me that it's real and not noise?” If the answer goes around in circles, maybe it wasn't Sunday that collapsed.",
      question: "When you flag a drop, could you tell me — and prove to me — whether it's a real change or just noise?"
    },
    linkedin: "«Domenica è crollata!»\nNo. Domenica è sempre andata così.\n\nQuanti lunedì di panico nascono da oscillazioni casuali?\nBudget rimescolati, riunioni d'urgenza, lavori fatturati per sistemare problemi che non esistevano.\n\nOggi si può pretendere di più: ogni giorno confrontato con i suoi pari (il sabato con gli altri sabati, non col venerdì), e ogni variazione con un'etichetta visibile — significativa, probabile rumore, dati insufficienti.\n\nUn sistema che ammette quando non può concludere. L'opposto dell'interesse di chi vende interventi.\n\nE si verifica: apri il tuo Analytics e conta dove si piazza questa domenica tra le ultime otto.\n\nLa prossima volta che ti segnalano un crollo, chiedi: «è reale o è rumore? Dimostramelo».",
    facebook: "Ti è mai successo? Lunedì mattina, messaggio allarmato: «le vendite di domenica sono crollate». Poi guardi indietro e scopri che domenica va così da mesi. Tanto panico nel marketing nasce da oscillazioni normalissime — e qualcuno quel panico te lo fa pure pagare."
  },
  {
    id: "v12",
    youtubeId: "ZZtJTYTnlRY",
    title: "V12 — La memoria che nessuno ha",
    theme: "Il perché, non le scuse",
    seoPain: "registro modifiche ads landing page e-commerce",
    pain: "Un crollo delle conversioni iniziato all'improvviso, e nessuno in agenzia si ricorda cosa sia stato modificato in quei giorni.",
    agitate: "Si rincorrono ipotesi, si sprecano ore in riunioni e si fanno modifiche ad altri elementi intatti, allungando il periodo di inattività delle campagne per non aver documentato le modifiche di codice o di ads.",
    relief: "Registriamo automaticamente ogni variazione delle ads, aggiornamenti della landing page e modifiche automatiche imposte da Google in una timeline unificata per identificare subito la correlazione con il calo.",
    script: "Le conversioni calano da giorni e in riunione gira sempre la stessa domanda: \"ma cosa avevamo toccato?\". Nessuno lo sa più. E intanto il budget continua a girare. Oggi si può fare diversamente. Esiste un modo di seguire i tuoi conti che conserva la memoria di com'erano le tue pagine, le tue creatività, le tue campagne, giorno per giorno. Quando un numero scarta, non parte la caccia alle ipotesi: si guarda cosa era cambiato in quei giorni, con le date allineate al grafico. Comprese le modifiche che Google applica da solo al tuo account, quelle che nessuno ha mai autorizzato davvero. Niente più \"forse è il mercato\": piuttosto \"il calo è iniziato quando è cambiato il checkout, sei giorni fa\". E il rimedio diventa chirurgico: si corregge quel punto, invece di rifare tutto alla cieca. E puoi verificarlo coi tuoi occhi. Tu sai quando hai toccato la tua pagina, e i cambi sul tuo account Google sono scritti nero su bianco, a quella data. Con un'onestà precisa: una coincidenza di date è un indizio, non ancora una sentenza. Va confermata. Ma è tutta un'altra cosa rispetto a un'alzata di spalle. Alla prossima riunione fai una domanda semplice alla tua agenzia: \"se un numero crolla, sapete dirmi cosa era cambiato proprio quel giorno?\". Se cala il silenzio, sai dove trovarci.",
    question: "Se un numero crolla, sapete dirmi cosa era cambiato proprio quel giorno?",
    en: {
      title: "V12 — The memory nobody has",
      theme: "The why, not excuses",
      seoPain: "e-commerce ads landing page change log",
      pain: "Conversions suddenly start collapsing, and nobody at the agency remembers what was changed in those days.",
      agitate: "Hypotheses get chased, hours are wasted in meetings and other elements that were working fine get changed, dragging out the campaigns' downtime because nobody documented the code or ad changes.",
      relief: "We automatically log every ad change, landing page update and automatic change applied by Google in a single timeline, so the link with the drop can be spotted immediately.",
      script: "Conversions have been dropping for days and the same question keeps going around the meeting: “so what did we touch?” Nobody remembers anymore. And meanwhile the budget keeps running. Today it can be done differently. There's a way of following your accounts that keeps a memory of what your pages, your creatives and your campaigns looked like, day by day. When a number swerves, there's no hunt for hypotheses: you look at what had changed on those days, with the dates lined up against the chart. Including the changes Google applies to your account on its own, the ones nobody ever really authorized. No more “maybe it's the market”: instead, “the drop started when the checkout changed, six days ago.” And the fix becomes surgical: you correct that one point, instead of redoing everything blindly. And you can check it with your own eyes. You know when you touched your page, and the changes to your Google account are written in black and white, on that date. With one precise point of honesty: a coincidence of dates is a clue, not yet a verdict. It needs to be confirmed. But it's a world away from a shrug. At your next meeting, ask your agency a simple question: “if a number collapses, can you tell me what had changed on that very day?” If the room goes quiet, you know where to find us.",
      question: "If a number collapses, can you tell me what had changed on that very day?"
    },
    linkedin: "«Ma cosa avevamo toccato?»\n\nÈ la domanda che parte in ogni riunione quando le conversioni calano.\nE la risposta è il silenzio.\n\nPerché nessuno conserva la memoria di com'erano le pagine, le creatività, le campagne. E le modifiche che Google applica da solo passano inosservate.\n\nOggi si può fare diversamente: quando un numero scarta, si guarda cosa era cambiato in quei giorni, con le date allineate al grafico. Il rimedio diventa chirurgico: un intervento mirato invece di mesi di rifacimenti alla cieca.\n\nUna coincidenza di date non è una prova. Ma è un indizio verificabile: tu sai quando hai toccato la tua pagina.\n\nChiedi alla tua agenzia: se un numero crolla, sapete dirmi cosa era cambiato quel giorno?",
    facebook: "Ti è mai capitato? I risultati calano, chiedi cos'è successo e nessuno sa risponderti. «Avremo toccato qualcosa… ma cosa?» Intanto il budget continua a girare — e il colpevole silenzioso non si trova mai."
  },
  {
    id: "v13",
    youtubeId: "JmyvBBGWe3M",
    title: "V13 — Il coraggio di dire «aspetta»",
    theme: "Il perché, non le scuse",
    seoPain: "ritardo conversione google ads data lag",
    pain: "Spegnere o penalizzare campagne ads appena nate solo perché non registrano conversioni immediate.",
    agitate: "Google Ads impiega giorni a consolidare l'attribuzione delle conversioni (data lag). Spegnere una campagna dopo 7 giorni significa interrompere la fase di apprendimento dell'algoritmo e sprecare il budget speso per addestrarla.",
    relief: "Analizziamo lo storico dei tempi di conversione del tuo account per stimare quanti acquisti o contatti sono già in viaggio anche se non registrati. Proteggiamo le nuove campagne da modifiche precoci.",
    script: "Hai lanciato una campagna nuova. Sette giorni dopo: zero conversioni, e qualcuno propone già di spegnerla. È l'errore che brucia più budget di tutti. Perché le conversioni di Google Ads non appaiono subito: arrivano con giorni di ritardo. Quella campagna che sembra morta può avere risultati già in viaggio. Oggi è possibile saperlo. Non con una media di settore, ma studiando quanto ci mettono, di solito, le conversioni del tuo account ad apparire. Da lì si stima quante sono già maturate anche se ancora invisibili, e in che forbice si assesterà il costo vero di ogni nuovo cliente o contatto. E il freno è automatico: il sistema si rifiuta, per costruzione, di tagliare una campagna troppo giovane per essere giudicata. Su Meta, stesso principio: se un gruppo di annunci è in fase di apprendimento — il periodo in cui l'algoritmo sta ancora capendo chi cercare per te — ogni ritocco impulsivo diventa un «aspetta, e ti dico quanto». Perché a volte la mossa migliore è quella che nessuno, pagato per «fare cose», propone volentieri. La verifica è tua: riapri quella stessa campagna tre settimane dopo. Le conversioni arrivate col ritardo sono lì, dentro la forbice anticipata. Alla prossima riunione chiedi alla tua agenzia: prima di spegnere una campagna giovane, sapete dirmi quante conversioni sono già in viaggio? Ascolta bene la risposta.",
    question: "Prima di spegnere una campagna giovane, sapresti dirmi quante conversioni sono già in viaggio — e quando sarà il momento giusto per giudicarla?",
    en: {
      title: "V13 — The courage to say “wait”",
      theme: "The why, not excuses",
      seoPain: "google ads conversion delay data lag",
      pain: "Switching off or penalizing brand-new ad campaigns just because they don't record conversions right away.",
      agitate: "Google Ads takes days to consolidate conversion attribution (data lag). Switching off a campaign after 7 days means interrupting the algorithm's learning phase and wasting the budget spent to train it.",
      relief: "We analyze your account's historical conversion times to estimate how many purchases or leads are already on their way, even if not yet recorded. We protect new campaigns from premature changes.",
      script: "You've launched a new campaign. Seven days later: zero conversions, and someone is already proposing to switch it off. It's the mistake that burns more budget than any other. Because Google Ads conversions don't show up right away: they arrive days late. That campaign that looks dead may already have results on the way. Today it's possible to know. Not with an industry average, but by studying how long your own account's conversions usually take to show up. From there you estimate how many have already happened even if they're still invisible, and within what range the real cost of each new customer or lead will settle. And the brake is automatic: by design, the system refuses to cut a campaign that's too young to be judged. On Meta, same principle: if an ad set is in the learning phase — the period when the algorithm is still figuring out who to look for on your behalf — every impulsive tweak becomes a “wait, and I'll tell you how long.” Because sometimes the best move is the one that nobody paid to “do stuff” is keen to suggest. The check is yours: reopen that same campaign three weeks later. The conversions that arrived late are there, inside the range predicted in advance. At your next meeting, ask your agency: before switching off a young campaign, can you tell me how many conversions are already on the way? Listen carefully to the answer.",
      question: "Before switching off a young campaign, could you tell me how many conversions are already on the way — and when the right time to judge it will be?"
    },
    linkedin: "La campagna «che non converte» forse sta già convertendo. Tu ancora non lo vedi.\n\nLe conversioni di Google Ads arrivano con giorni di ritardo. Eppure la scena si ripete: settimo giorno, zero risultati, campagna spenta.\n\nBudget di apprendimento buttato. Senza sapere se stava per funzionare.\n\nOggi si può stimare quante conversioni sono già maturate ma non ancora visibili — sul comportamento storico del TUO account, non su una media di settore — e bloccare il taglio finché il dato non è maturo.\n\nLa verifica è semplice: rivedi la stessa campagna tre settimane dopo. Le conversioni «apparse in ritardo» sono lì, nella forbice anticipata.\n\nPrima di spegnere una campagna giovane, la tua agenzia sa dirti quante sono già in viaggio?",
    facebook: "Ti è mai capitato? Lanci una campagna, dopo una settimana «non converte», e via, spenta. Peccato che le conversioni di Google Ads arrivino con giorni di ritardo: magari stavano proprio arrivando. Oggi si può sapere quante sono già in viaggio — prima di premere il grilletto."
  },
  {
    id: "v14",
    youtubeId: "bcUpNImR2wM",
    title: "V14 — Sarebbe successo comunque?",
    theme: "Prove, non promesse",
    seoPain: "misurare incrementalita vendite ads controfattuale",
    pain: "L'agenzia rivendica il merito di una crescita del fatturato, ma ti rimane il dubbio che quelle vendite sarebbero arrivate lo stesso.",
    agitate: "Natale, sconti stagionali, passaparola naturale: ci sono dozzine di cause esterne. Se paghi per clic che sarebbero arrivati comunque per via organica, stai diluendo il ROI senza saperlo.",
    relief: "Strutturiamo test geografici (Difference-in-Differences) in cui un'area geografica esclusa dalle ads serve come gruppo di controllo (controfattuale). Misuriamo solo l'incremento di margine reale generato a parità di stagionalità.",
    script: "Le vendite salgono dopo il lancio, e l'agenzia si prende il merito. Ma quella crescita sarebbe arrivata comunque? Oggi esiste un modo onesto per saperlo. Se vendi in più paesi, i mercati dove la campagna non è partita diventano il tuo testimone: mostrano esattamente cosa sarebbe successo da solo. Se i paesi dove hai investti crescono più di quelli lasciati fermi, la differenza è merito vero. Il resto è marea di mercato: stagione, tendenza, fortuna. Si chiama controfattuale: la fotografia di cosa sarebbe accaduto senza toccare nulla. E funziona anche dove i normali strumenti di tracciamento non arrivano, perché usa le vendite vere, paese per paese. Non solo. Prima di investire in un test, un calcolo sui tuoi dati reali ti dice se quel test potrà dimostrare qualcosa e quanto dovrà durare. Nero su bianco, prima di autorizzare un euro. Se non può provare nulla, non si fa. Tu verifichi tutto con i tuoi occhi: i numeri per paese sono nei tuoi dati, li controlli quando vuoi. E se l'effetto non c'è, ti viene detto chiaro. Così scali la spesa solo quando il merito è reale, e decidi sereno, sul dato vero. Alla prossima riunione fai una domanda semplice alla tua agenzia: sapresti farmi questo? Sapresti mostrarmi cosa sarebbe successo comunque? Ascolta bene la risposta.",
    question: "Prima di dirmi che la campagna ha funzionato, sapresti farmi questo: mostrarmi cosa sarebbe successo comunque, nei miei dati, paese per paese?",
    en: {
      title: "V14 — Would it have happened anyway?",
      theme: "Proof, not promises",
      seoPain: "measure ads sales incrementality counterfactual",
      pain: "The agency claims credit for revenue growth, but you're left wondering whether those sales would have come in anyway.",
      agitate: "Christmas, seasonal sales, natural word of mouth: there are dozens of external causes. If you pay for clicks that would have come in organically anyway, you're diluting your ROI without knowing it.",
      relief: "We set up geographic tests (Difference-in-Differences) in which a geographic area excluded from the ads serves as the control group (the counterfactual). We measure only the real margin increase generated, with seasonality held equal.",
      script: "Sales go up after the launch, and the agency takes the credit. But would that growth have come anyway? Today there's an honest way to find out. If you sell in several countries, the markets where the campaign didn't run become your witness: they show exactly what would have happened on its own. If the countries where you invested grow more than the ones left untouched, the difference is real credit. The rest is the market tide: season, trend, luck. It's called a counterfactual: a snapshot of what would have happened without touching anything. And it works even where normal tracking tools can't reach, because it uses real sales, country by country. And that's not all. Before investing in a test, a calculation on your real data tells you whether that test will be able to prove anything and how long it will need to run. In black and white, before you authorize a single euro. If it can't prove anything, it isn't run. You check everything with your own eyes: the numbers by country are in your data, and you can check them whenever you like. And if there's no effect, you're told so clearly. That way you scale spend only when the credit is real, and you decide calmly, on real data. At your next meeting, ask your agency a simple question: could you do this for me? Could you show me what would have happened anyway? Listen carefully to the answer.",
      question: "Before telling me the campaign worked, could you do this for me: show me what would have happened anyway, in my data, country by country?"
    },
    linkedin: "Ogni crescita dopo un lancio ha due padri possibili: la campagna, o la stagione.\n\nIl confronto prima/dopo non li distingue. Premia sempre la campagna, anche quando il merito è della marea.\n\nC'è un modo più onesto: se vendi in più paesi, i mercati non toccati raccontano cosa sarebbe successo comunque. La differenza — solo quella — è merito reale. Funziona anche senza tracciamento, perché usa le vendite vere.\n\nPrima di spendere in un test, un calcolo sui dati reali dice se potrà dimostrare qualcosa e quanto dovrà durare. Se non può, non si fa.\n\nAnche il verdetto «nessun effetto» viene consegnato. Soprattutto quello.\n\nLa domanda da fare alla tua agenzia: «sapresti farmi questo, nei miei dati?»",
    facebook: "Le vendite salgono e tutti si prendono il merito. Ma se quella crescita arrivava lo stesso? C'è un modo per scoprirlo davvero: guardare i mercati dove non hai mosso un dito. Quello che succede lì è la verità che nessuno ti fa vedere."
  },
  {
    id: "v15",
    youtubeId: "rWAm2-mjgDE",
    title: "V15 — La torta che non torna",
    theme: "Prove, non promesse",
    seoPain: "sovrapposizione conversioni meta google ads",
    pain: "La somma delle conversioni dichiarate dalle singole piattaforme supera il fatturato reale del tuo business.",
    agitate: "Google Analytics dice che hai guadagnato 10.000€, ma Meta dice di averne generati 6.000€ e Google Ads altri 7.000€. Stai scalando budget basandoti su dati duplicati che non corrispondono a soldi veri sul conto.",
    relief: "Applichiamo algoritmi di de-duplicazione che analizzano il percorso d'acquisto dell'utente ed assegnano a ciascuna piattaforma solo la quota di merito effettiva, garantendo che la somma dei report equivalga al 100% delle vendite reali.",
    script: "Prova a sommare i risultati di Google e Meta del tuo ultimo mese: spesso la somma delle conversioni fa più del totale degli ordini scritti sul tuo gestionale. Entrambe le piattaforme reclamano la paternità della stessa transazione. Oggi questa torta che non torna può essere tagliata con precisione: la nostra suite analizza il percorso dell'utente (il customer journey), rimuove le attribuzioni duplicate, e assegna a ciascuna sorgente solo il merito reale. Nessuna magia: semplicemente, se un utente ha cliccato su Meta ed ha acquistato su Google Search, il sistema divide il peso in modo contabile. E tu lo vedi nei tuoi dati aggregate-EUR: le vendite tornano al centesimo con la cassa di Shopify. La prossima volta che in riunione vedi report di conversione gonfiati, fai questa domanda: se sommo le vendite di Meta e Google, superano il totale del mio gestionale? E se sì, chi sta rimuovendo i doppioni?",
    question: "Se sommo le conversioni di Meta e Google, superano le vendite del mio gestionale? E se sì, chi sta rimuovendo le conversioni duplicate?",
    en: {
      title: "V15 — The pie that doesn't add up",
      theme: "Proof, not promises",
      seoPain: "meta google ads conversion overlap",
      pain: "The conversions claimed by the individual platforms add up to more than your business's real revenue.",
      agitate: "Google Analytics says you earned €10,000, but Meta says it generated €6,000 and Google Ads another €7,000. You're scaling budgets based on duplicated data that doesn't match real money in the bank.",
      relief: "We apply de-duplication algorithms that analyze the user's purchase path and give each platform only its actual share of the credit, ensuring that the reports add up to 100% of real sales.",
      script: "Try adding up the Google and Meta results for your last month: the conversions often add up to more than the total orders recorded in your back office. Both platforms claim ownership of the same transaction. Today this pie that doesn't add up can be sliced precisely: our suite analyzes the user's path (the customer journey), removes duplicate attributions, and gives each source only its real credit. No magic: simply put, if a user clicked on Meta and bought through Google Search, the system splits the weight the way an accountant would. And you see it in your aggregate-EUR data: sales match Shopify's till down to the cent. Next time you see inflated conversion reports in a meeting, ask this question: if I add up Meta's and Google's sales, do they exceed the total in my back office? And if so, who is removing the duplicates?",
      question: "If I add up Meta's and Google's conversions, do they exceed the sales in my back office? And if so, who is removing the duplicate conversions?"
    },
    linkedin: "La somma dei report di Google e Meta fa più delle vendite reali a gestionale?\n\nNon è magia, è sovrapposizione d'attribuzione: ciascun canale si prende il 100% del merito se l'utente ha toccato entrambi gli annunci.\n\nOggi si può risolvere con un'analisi contabile del customer journey che assegna il merito reale senza duplicati.\n\nChiedi alla tua agenzia come stanno correggendo le sovrapposizioni dei report.",
    facebook: "Se sommi le vendite dichiarate da Facebook e Google e il totale supera gli incassi veri del tuo negozio online, c'è un problema di attribuzione duplicata. Stai pagando due volte per lo stesso cliente senza accorgertene."
  },
  {
    id: "v16",
    youtubeId: "NcbO-rSndeY",
    title: "V16 — È crollato solo per te, o per tutti?",
    theme: "Prove, non promesse",
    seoPain: "benchmark vendite e-commerce mercato concorrenza",
    pain: "Subire un calo improvviso di fatturato senza capire se sia una carenza del tuo marketing o un rallentamento generale del settore.",
    agitate: "Passi giornate a smontare le campagne, a cambiare i prezzi e a penalizzare gli annunci, ignorando che magari è l'intero mercato italiano a subire un calo di domanda del 15% in quella settimana.",
    relief: "Incrociamo i dati di andamento del mercato e i volumi di ricerca aggregati, confrontando il tuo andamento con i benchmark di settore per capire se il calo sia locale (sito/campagne) o macroeconomico (mercato).",
    script: "Calo delle vendite questa settimana: riunione urgente, ansia e decisioni drastiche sul sito. Ma sei sicuro che sia un problema solo tuo? Oggi puoi confrontare il tuo andamento con i benchmark aggregati del tuo mercato in tempo reale. Se cala l'intero settore, la cura non è rifare le ads: è proteggere il margine. Se invece il mercato cresce e tu cali, allora la diagnosi è interna ed interveniamo subito sui tag, sul pricing o sulle landing page. Ti diamo un quadro oggettivo per non agire basandoti solo sulla paura di perdere clic. Chiedi alla tua agenzia in call: questo calo di visite è isolato al mio account o sta colpendo anche il resto dei negozi del settore?",
    question: "Questo calo di visite è isolato al mio account o sta colpendo anche il resto dei negozi del nostro settore?",
    en: {
      title: "V16 — Did it collapse just for you, or for everyone?",
      theme: "Proof, not promises",
      seoPain: "e-commerce sales market competition benchmark",
      pain: "Suffering a sudden drop in revenue without knowing whether it's a shortcoming of your marketing or a general slowdown in the industry.",
      agitate: "You spend days taking campaigns apart, changing prices and penalizing ads, unaware that the entire Italian market may be going through a 15% drop in demand that week.",
      relief: "We cross-reference market trend data and aggregated search volumes, comparing your performance with industry benchmarks to understand whether the drop is local (site/campaigns) or macroeconomic (market).",
      script: "Sales are down this week: urgent meeting, anxiety and drastic decisions about the site. But are you sure the problem is yours alone? Today you can compare your performance with the aggregated benchmarks of your market in real time. If the whole industry is dropping, the cure isn't redoing the ads: it's protecting your margin. If instead the market is growing and you're dropping, then the diagnosis is internal and we act immediately on tags, pricing or landing pages. We give you an objective picture so you don't act purely out of fear of losing clicks. Ask your agency on your next call: is this drop in visits isolated to my account, or is it also hitting the rest of the stores in the industry?",
      question: "Is this drop in visits isolated to my account, or is it also hitting the rest of the stores in our industry?"
    },
    linkedin: "Un calo del fatturato non è sempre colpa delle tue campagne.\n\nA volte è l'intero settore a rallentare. Intervenire con modifiche drastiche sulle ads in questi momenti rischia solo di distruggere l'apprendimento degli algoritmi.\n\nNoi confrontiamo le vendite locali con il trend del mercato aggregato per darti risposte oggettive.\n\nAlla tua agenzia chiedi: questo calo è solo nostro?",
    facebook: "Prima di smontare il sito o cambiare le campagne pubblicitarie durante una settimana no, chiediti: sta succedendo solo a me o a tutti? Capire se è un calo di mercato o un errore interno ti evita errori di gestione costosi."
  },
  {
    id: "v17",
    youtubeId: "AGVRP9iz6U4",
    title: "V17 — La porta che tutti dicevano chiusa",
    theme: "Prove, non promesse",
    seoPain: "ottimizzare ads amazon marketplace marketing mix modeling",
    pain: "L'impossibilità di tracciare e ottimizzare le campagne dirette su Amazon, KDP o negozi fisici per mancanza di pixel proprietari.",
    agitate: "Spendi budget su Facebook o Google ma non sai se gli acquisti avvengono sul marketplace o se stai solo regalando soldi. Le piattaforme chiuse non ti consentono di installare script e sei costretto a ottimizzare alla cieca.",
    relief: "Applichiamo modelli di Marketing Mix Modeling (MMM) ad stock che incrociano i dati di spesa aggregati con le vendite complessive del canale terzo, isolando l'impatto indiretto delle campagne a livello matematico.",
    script: "Vendere su Amazon o canali fisici senza pixel sembra una condanna a procedere al buio. Quasi tutte le agenzie dicono che non si può misurare. Ma non è vero. La porta si può aprire con i modelli econometrici di Marketing Mix Modeling (MMM). Correlando le curve temporali di spesa con le vendite aggregate del canale terzo, ed applicando parametri di decadimento Adstock, isoliamo l'incremento di valore generato. Nessuna telemetria diretta, solo sana statistica che restituisce report precisi ed evita spese a fondo perduto. Chiedi alla tua agenzia: come misurate l'impatto reale delle ads sulle mie vendite Amazon o nei negozi fisici?",
    question: "Come misurate l'impatto reale delle ads sulle mie vendite Amazon o nei negozi fisici, dove non possiamo mettere pixel?",
    en: {
      title: "V17 — The door everyone said was closed",
      theme: "Proof, not promises",
      seoPain: "optimize amazon marketplace ads marketing mix modeling",
      pain: "Being unable to track and optimize campaigns aimed at Amazon, KDP or physical stores because you can't install your own pixels.",
      agitate: "You spend budget on Facebook or Google but don't know whether purchases are happening on the marketplace or you're just giving money away. Closed platforms don't let you install scripts, so you're forced to optimize blindly.",
      relief: "We apply adstock Marketing Mix Modeling (MMM) models that cross-reference aggregated spend data with the total sales of the third-party channel, isolating the indirect impact of the campaigns mathematically.",
      script: "Selling on Amazon or through physical channels without a pixel feels like being condemned to work in the dark. Almost every agency says it can't be measured. But that's not true. The door can be opened with Marketing Mix Modeling (MMM) econometric models. By correlating spend over time with the aggregated sales of the third-party channel, and applying Adstock decay parameters, we isolate the incremental value generated. No direct tracking, just sound statistics that deliver precise reports and keep you from pouring money down the drain. Ask your agency: how do you measure the real impact of ads on my Amazon sales or in physical stores?",
      question: "How do you measure the real impact of ads on my Amazon sales or in physical stores, where we can't install a pixel?"
    },
    linkedin: "Non puoi mettere il pixel di tracciamento su Amazon o nei negozi fisici?\n\nNon significa che devi spendere al buio. I modelli econometrici MMM (Marketing Mix Modeling) incrociano le curve di spesa con i dati storici delle vendite aggregate per calcolare il ritorno indiretto.\n\nLa matematica supera i blocchi tecnici dei cookie.\n\nChiedi alla tua agenzia se sanno misurare i canali senza pixel.",
    facebook: "Pensi che sia impossibile misurare l'efficacia della pubblicità se vendi su Amazon o KDP? Sbagliato. Con i modelli matematici MMM puoi scoprire esattamente quanto ogni euro speso su Google o Facebook stia spingendo le tue vendite sul marketplace."
  },
  {
    id: "v18",
    youtubeId: "jYqZQMQlygQ",
    title: "V18 — Niente si muove senza la tua firma",
    theme: "Tu firmi, noi rispondiamo",
    seoPain: "controllo modifiche agenzia marketing approval mode",
    pain: "Campagne pubblicitarie modificate o pubblicate online dall'agenzia con testi errati, promozioni scadute o errori strutturali.",
    agitate: "Ti accorgi degli errori a cose fatte, quando hai già speso soldi o mostrato annunci errati ai clienti, rovinando l'immagine del brand. L'agenzia agisce direttamente in scrittura sul tuo account senza chiederti autorizzazione scritta.",
    relief: "Le nostre campagne nascono sempre in PAUSA. Inoltre, attiviamo la modalità di approvazione (approval_mode) a doppia firma: prima dell'invio ricevi un PDF Lean con le modifiche da autorizzare ed un PDF Valore separato per le stime.",
    script: "Campagne pubblicate piene di errori di battitura, offerte scadute rimaste attive nel weekend, modifiche strutturali fatte senza il tuo consenso. I tuoi soldi corrono, e tu lo scopri quando è tardi. Con il nostro metodo niente va online da solo. Attiviamo l'approval_mode: ogni azione correttiva viene preparata in staging, validata in dry-run ed entra in una coda di approvazione. Ricevi due PDF: firmi gli interventi, non le proiezioni di valore (che teniamo separate per onestà). E le campagne nascono sempre in PAUSA. Chiedi alla tua agenzia: potete garantirmi che nessuna modifica andrà online senza la mia approvazione scritta?",
    question: "Potete assicurarmi che nessuna campagna o annuncio andrà live sul mio account senza la mia approvazione scritta?",
    en: {
      title: "V18 — Nothing moves without your signature",
      theme: "You sign, we answer for it",
      seoPain: "marketing agency change control approval mode",
      pain: "Ad campaigns changed or published by the agency with wrong copy, expired promotions or structural errors.",
      agitate: "You notice the mistakes after the fact, when you've already spent money or shown the wrong ads to customers, damaging your brand image. The agency makes changes directly in your account without asking for your written authorization.",
      relief: "Our campaigns are always created PAUSED. We also enable a two-signature approval mode (approval_mode): before anything is sent, you receive a Lean PDF with the changes to authorize and a separate Value PDF for the estimates.",
      script: "Campaigns published full of typos, expired offers left running over the weekend, structural changes made without your consent. Your money is running, and you find out when it's too late. With our method nothing goes live on its own. We enable approval_mode: every corrective action is prepared in staging, validated in a dry-run and placed in an approval queue. You receive two PDFs: you sign off on the actions, not on the value projections (which we keep separate, for honesty's sake). And campaigns are always created PAUSED. Ask your agency: can you guarantee that no change will go live without my written approval?",
      question: "Can you assure me that no campaign or ad will go live on my account without my written approval?"
    },
    linkedin: "Se la tua agenzia fa modifiche sul tuo account senza chiederti conferma, non hai il controllo dei tuoi soldi.\n\nCon il nostro approval_mode, ogni modifica viene validata in staging e richiede la tua approvazione tramite firma su un report chiaro. E le nuove campagne nascono sempre in PAUSA.\n\nLa governance è protezione del budget.\n\nLa tua agenzia ti fa firmare prima di pubblicare?",
    facebook: "Vuoi evitare la sorpresa di trovare annunci pubblicitari errati o budget modificati a tua insaputa? Richiedi il blocco delle scritture: ogni campagna deve nascere in pausa e richiedere la tua autorizzazione esplicita prima di essere attivata."
  },
  {
    id: "v19",
    youtubeId: "ltvy4tcTRkY",
    title: "V19 — L'avvocato che difende solo te",
    theme: "Tu firmi, noi rispondiamo",
    seoPain: "revisione proposte budget agenzia marketing",
    pain: "Le proposte di aumento budget o cambio strategia dell'agenzia sembrano scritte solo per far guadagnare loro o le piattaforme.",
    agitate: "Ti viene proposto di scalare i budget su base fiduciaria o basandoti su slide ottimistiche preparate dal commerciale, che svaniscono al primo consuntivo.",
    relief: "Ogni proposta commerciale viene analizzata preventivamente da un revisore interno (Giudice Avversariale) che ha il compito di evidenziare i punti deboli della manovra, tutelando il tuo portafoglio.",
    script: "Un'agenzia ti propone di alzare il budget del 30% perché 'ci sono opportunità'. Chi controlla quella proposta prima che arrivi a te? Nel nostro flusso, ogni ActionPlan passa dal Giudice Avversariale: un revisore interno che mette a nudo i punti deboli, verifica che le esclusioni siano attive, e bussa al media buyer se ci sono conflitti. Ti presentiamo proposte pronte per la firma solo se superano questo filtro protettivo. Chiedi alla tua agenzia: chi fa l'avvocato del diavolo sulle vostre proposte prima di mandarle a me?",
    question: "Chi controlla e mette in discussione le proposte di aumento budget del vostro team prima che arrivino a me?",
    en: {
      title: "V19 — The lawyer who defends only you",
      theme: "You sign, we answer for it",
      seoPain: "marketing agency budget proposal review",
      pain: "The agency's proposals to increase the budget or change strategy seem written only to make money for the agency or for the platforms.",
      agitate: "You're asked to scale budgets on trust, or on the strength of optimistic slides put together by the sales team, which vanish as soon as the actual results come in.",
      relief: "Every commercial proposal is reviewed in advance by an internal reviewer (the Adversarial Judge) whose job is to expose the weak points of the move, protecting your wallet.",
      script: "An agency proposes raising your budget by 30% because “there are opportunities.” Who checks that proposal before it reaches you? In our workflow, every ActionPlan goes through the Adversarial Judge: an internal reviewer that lays bare the weak points, checks that exclusions are active, and knocks on the media buyer's door if there are conflicts. We present you with proposals ready for signature only if they get through this protective filter. Ask your agency: who plays devil's advocate on your proposals before sending them to me?",
      question: "Who checks and challenges your team's budget increase proposals before they reach me?"
    },
    linkedin: "Quando un'agenzia ti propone di spendere di più, chi sta tutelando i tuoi interessi?\n\nNoi abbiamo introdotto il Giudice Avversariale: un revisore interno al nostro team che smonta e testa ogni ActionPlan in staging prima di presentarlo al cliente, eliminando gli errori alla radice.\n\nChiedi alla tua agenzia se hanno un processo di revisione interno indipendente.",
    facebook: "Prima di firmare un aumento di budget pubblicitario, assicurati che la proposta sia stata messa alla prova. Il nostro revisore interno contesta ogni piano d'azione per verificare che non ci siano sprechi, difendendo le tue finanze."
  },
  {
    id: "v20",
    youtubeId: "6Bd7O6Z1fXg",
    title: "V20 — Il coraggio della pagella",
    theme: "Tu firmi, noi rispondiamo",
    seoPain: "calibration report previsioni marketing ads",
    pain: "Le stime ed i risultati promessi in call o in fase di offerta non vengono mai verificati a posteriori.",
    agitate: "Le agenzie tendono a dimenticare le promesse fatte nei pitch, limitandosi a fare report descrittivi mese dopo mese senza ammettere quando le stime erano errate.",
    relief: "Generiamo un report di calibrazione periodico che confronta le previsioni formulate dalla nostra suite con i risultati effettivi registrati, misurando il nostro tasso di precisione.",
    script: "È facile fare stime in fase di pitch: 'faremo questo, otterremo quello'. Ma chi controlla, sei mesi dopo, quante di quelle stime si sono avverate? Noi pubblichiamo mensilmente il calibration_report. Mettiamo a confronto le previsioni di fatturato o lead prodotte dal nostro sistema con i dati reali registrati. Se l'hit-rate cala, ricalibriamo la macchina in tempo. Accettiamo il controllo di realtà. Chiedi alla tua agenzia: una volta al mese possiamo fare un controllo delle vostre stime passate rispetto ai risultati veri?",
    question: "Una volta al mese possiamo fare un controllo di realtà e verificare quante delle vostre previsioni si sono avverate?",
    en: {
      title: "V20 — The courage of the report card",
      theme: "You sign, we answer for it",
      seoPain: "marketing ads forecast calibration report",
      pain: "The estimates and results promised on calls or at the proposal stage are never checked afterwards.",
      agitate: "Agencies tend to forget the promises made in their pitches, sticking to descriptive reports month after month without ever admitting when the estimates were wrong.",
      relief: "We generate a periodic calibration report that compares the forecasts made by our suite with the actual results recorded, measuring our accuracy rate.",
      script: "It's easy to make estimates at the pitch stage: “we'll do this, we'll get that.” But who checks, six months later, how many of those estimates came true? We publish the calibration_report every month. We compare the revenue or lead forecasts produced by our system with the real data recorded. If the hit rate drops, we recalibrate the machine in time. We accept the reality check. Ask your agency: once a month, can we check your past estimates against the real results?",
      question: "Once a month, can we do a reality check and see how many of your forecasts came true?"
    },
    linkedin: "Le stime facili in fase di pitch sono una piaga del nostro settore.\n\nNoi crediamo nella calibrazione: ogni mese confrontiamo le nostre previsioni passate con i risultati reali ed emettiamo un report di precisione. Se la macchina sbaglia, si corregge, senza scuse.\n\nIl controllo di realtà è il primo passo per un marketing serio.\n\nCome valuti l'accuratezza delle stime della tua agenzia?",
    facebook: "Tutti promettono crescite incredibili prima di firmare il contratto. Ma quanti fanno un report di confronto mesi dopo per verificare se quelle promesse si sono avverate? Il nostro report di calibrazione serve a questo: trasparenza totale."
  },
  {
    id: "v21",
    youtubeId: "zuwrPnq8H_8",
    title: "V21 — L'analista sempre in linea",
    theme: "Tu firmi, noi rispondiamo",
    seoPain: "chat live dati ads google facebook analytics",
    pain: "Dover aspettare giorni o programmare lunghe call con l'account per conoscere dati banali di spesa o conversioni.",
    agitate: "Mentre aspetti la risposta dell'agenzia, devi prendere decisioni urgenti di business o presentare dati in CDA, procedendo con informazioni parziali o obsolete.",
    relief: "Le nostre chat scoped (GA4, Google Ads, Meta) rispondono h24 estraendo i dati in tempo reale via API, fornendoti risposte e report in pochi secondi senza attese.",
    script: "Hai una riunione con i soci tra venti minuti e hai bisogno di sapere la spesa Meta di ieri e il costo per lead aggiornato. Mandi un'e-mail all'account, sperando risponda. Con la nostra suite, interroghi direttamente le chat scoped (GA4, Google Ads, Meta) o la Chat Globale. L'LLM interroga le API in tempo reale e ti risponde in secondi con dati certificati e storici. Chiedi alla tua agenzia: posso accedere ai dati delle mie campagne via chat in tempo reale h24?",
    question: "Posso interrogare i dati delle mie campagne in tempo reale tramite una chat dedicata h24?",
    en: {
      title: "V21 — The analyst who's always on call",
      theme: "You sign, we answer for it",
      seoPain: "live chat ads data google facebook analytics",
      pain: "Having to wait days or schedule long calls with your account manager just to get basic spend or conversion figures.",
      agitate: "While you wait for the agency to reply, you have to make urgent business decisions or present data to the board, going ahead with partial or outdated information.",
      relief: "Our scoped chats (GA4, Google Ads, Meta) answer 24/7 by pulling data in real time via API, giving you answers and reports in a few seconds, with no waiting.",
      script: "You have a meeting with your partners in twenty minutes and you need to know yesterday's Meta spend and the updated cost per lead. You email your account manager and hope they reply. With our suite, you query the scoped chats (GA4, Google Ads, Meta) or the Global Chat directly. The LLM queries the APIs in real time and answers you in seconds with certified, historical data. Ask your agency: can I access my campaign data via chat, in real time, 24/7?",
      question: "Can I query my campaign data in real time through a dedicated chat, 24/7?"
    },
    linkedin: "Le attese per ricevere un dato sulle campagne sono un costo sommerso per l'azienda.\n\nAbbiamo collegato le chat scoped alle API dei canali pubblicitari: puoi chiedere in chat spesa, conversioni e andamento h24, ricevendo risposte istantanee validate.\n\nL'informazione deve essere democratica e accessibile.\n\nQuanto tempo aspetti per un dato dalla tua agenzia?",
    facebook: "Hai bisogno di sapere quanto hai speso in ads oggi o quante conversioni hai registrato ieri? Non aspettare l'e-mail dell'account del lunedì. Con le nostre chat intelligenti hai i dati delle campagne sempre a portata di clic, h24."
  },
  {
    id: "v22",
    youtubeId: "xo7AOcJsnLI",
    title: "V22 — La luce verde che mente",
    theme: "Dentro la vetrina",
    seoPain: "google merchant center errori silenziosi prodotti",
    pain: "Pensare che il tuo feed di Google Shopping sia perfetto perché la dashboard di Merchant Center mostra semaforo verde.",
    agitate: "In realtà, molti dei tuoi prodotti bestseller potrebbero essere disapprovati o esclusi da Google per piccoli errori di formattazione o policy, bloccando le vendite a tua insaputa.",
    relief: "Il nostro audit automatico Merchant Center analizza quotidianamente i singoli prodotti del catalogo, inviando allarmi se un articolo chiave esce dall'asta pubblicitaria.",
    script: "Apri il Merchant Center: tutto verde, nessun allarme evidente. Ma sei sicuro che tutti i tuoi prodotti stiano partecipando alle aste di Google Shopping? Spesso, singoli articoli ad alto margine vengono bloccati silenziosamente per discrepanze di prezzo tra feed e sito o per problemi di classificazione. Il nostro sistema monitora a livello di singolo prodotto (SKU) la presenza nelle aste e segnala le anomalie in tempo reale. Chiedi alla tua agenzia: quanti dei miei prodotti bestseller sono bloccati su Google Shopping in questo momento?",
    question: "Quanti dei prodotti del mio catalogo sono attualmente bloccati o non mostrati in Google Shopping?",
    en: {
      title: "V22 — The green light that lies",
      theme: "Inside the shop window",
      seoPain: "google merchant center silent product errors",
      pain: "Thinking your Google Shopping feed is perfect because the Merchant Center dashboard shows a green light.",
      agitate: "In reality, many of your best-selling products could be disapproved or excluded by Google because of small formatting or policy errors, blocking sales without you knowing.",
      relief: "Our automatic Merchant Center audit analyzes every single product in the catalog daily, sending alerts if a key item drops out of the ad auction.",
      script: "You open Merchant Center: all green, no obvious alerts. But are you sure all your products are taking part in the Google Shopping auctions? Individual high-margin items are often silently blocked because of price mismatches between the feed and the site, or because of classification problems. Our system monitors auction presence at the individual product (SKU) level and flags anomalies in real time. Ask your agency: how many of my best-selling products are blocked on Google Shopping right now?",
      question: "How many of the products in my catalog are currently blocked or not shown on Google Shopping?"
    },
    linkedin: "Un feed di Google Shopping 'verde' non significa che tutti i tuoi prodotti stiano vendendo.\n\nI blocchi silenziosi di singoli SKU sono frequenti e Merchant Center non invia notifiche per ciascuno. Noi monitoriamo la presenza attiva delle singole varianti di prodotto per evitare magazzini bloccati.\n\nLa salute del catalogo è salute finanziaria.\n\nCome controllate i blocchi silenziosi dei prodotti?",
    facebook: "Pensi che le tue campagne Shopping stiano mostrando tutto il tuo catalogo? A volte Google blocca i prodotti migliori per piccoli dettagli nel prezzo o nelle descrizioni, senza farsi sentire. Con il nostro controllo SKU eviti brutte sorprese."
  },
  {
    id: "v23",
    youtubeId: "5ISJ2I-hPKI",
    title: "V23 — Il best seller invisibile",
    theme: "Dentro la vetrina",
    seoPain: "ottimizzare catalogo google shopping budget ads",
    pain: "Google Shopping spende l'80% del budget pubblicitario su pochi prodotti, lasciando gli altri articoli del catalogo senza visibilità.",
    agitate: "Questo squilibrio ti impedisce di vendere gli articoli bestseller in magazzino o ti costringe ad accumulare rimanenze invendute, gonfiando la spesa ads su prodotti a basso margine.",
    relief: "Rileviamo la concentrazione della spesa sulle singole schede e riordiniamo il budget forzando l'esposizione dei bestseller invisibili tramite strutture ad-group dedicate.",
    script: "Google Shopping tende a concentrare la spesa su pochissimi prodotti storici, lasciando il resto del catalogo al buio. Anche se hai prodotti migliori in magazzino, non riceveranno mai clic. La nostra suite mappa la distribuzione del budget sul catalogo ed evidenzia i bestseller invisibili. Creiamo strutture ad group ristrette per forzare la visibilità degli articoli non ancora esplorati da Google. Chiedi alla tua agenzia: come state distribuendo il budget pubblicitario sul mio catalogo? C'è un prodotto bestseller invisibile?",
    question: "Come state distribuendo il budget pubblicitario sul mio catalogo? C'è un prodotto bestseller invisibile?",
    en: {
      title: "V23 — The invisible best seller",
      theme: "Inside the shop window",
      seoPain: "optimize google shopping catalog ad budget",
      pain: "Google Shopping spends 80% of the ad budget on a handful of products, leaving the other items in the catalog with no visibility.",
      agitate: "This imbalance keeps you from selling the best sellers sitting in your warehouse or forces you to pile up unsold stock, inflating ad spend on low-margin products.",
      relief: "We detect how spend is concentrated across individual product listings and rebalance the budget, forcing exposure for the invisible best sellers through dedicated ad group structures.",
      script: "Google Shopping tends to concentrate spend on a very few long-established products, leaving the rest of the catalog in the dark. Even if you have better products in stock, they'll never get clicks. Our suite maps how the budget is distributed across the catalog and highlights the invisible best sellers. We create tight ad group structures to force visibility for the items Google hasn't explored yet. Ask your agency: how are you distributing the ad budget across my catalog? Is there an invisible best seller?",
      question: "How are you distributing the ad budget across my catalog? Is there an invisible best seller?"
    },
    linkedin: "Google Shopping soffre di un problema di monopolio interno: spende il budget solo su pochi prodotti che hanno già storico.\n\nSe hai nuovi articoli o bestseller fermi in magazzino, non avranno mai chance. Noi forziamo la visibilità degli SKU trascurati tramite campagne granulari e monitoraggio delle impression.\n\nFai respirare il tuo catalogo.\n\nQuanti dei tuoi prodotti ricevono meno di 10 impression al mese?",
    facebook: "Hai il magazzino pieno di prodotti ottimi ma Google Shopping continua a spendere tutto il budget ads sempre sulle stesse tre cose? Non è sfortuna: è l'algoritmo che si pigrifica. C'è un metodo per costringerlo a mostrare anche il resto."
  },
  {
    id: "v24",
    youtubeId: "wgxlgXfoYi8",
    title: "V24 — Non è il budget. È il prezzo.",
    theme: "Dentro la vetrina",
    seoPain: "elasticita prezzo concorrenza google shopping",
    pain: "Aumentare il budget pubblicitario su Google Shopping senza ottenere un aumento delle vendite.",
    agitate: "Pensi che le ads non funzionino, ignorando che sulla SERP di Google Shopping il tuo concorrente offre lo stesso identico prodotto a un prezzo inferiore, rendendo inutile ogni tuo aumento di offerta.",
    relief: "Incrociamo i dati di prezzo dei rivali sulla SERP con i clic delle tue campagne Shopping, identificando quando la scarsa performance è dovuta al pricing e non alle impostazioni delle ads.",
    script: "Aumenti le offerte, alzi il budget delle PMax, ma le vendite su Google Shopping restano al palo. Ti dicono che serve ancora più budget. E se invece fossi semplicemente fuori prezzo? Gli utenti su Shopping confrontano i prezzi al centesimo: se sei più caro del rivale accanto, nessun aumento di budget ti porterà conversioni sane. Il nostro modulo analizza i prezzi dei concorrenti e correla il tasso di conversione con l'elasticità del pricing. Chiedi alla tua agenzia: questa campagna Shopping performa male per colpa delle ads o perché siamo fuori prezzo rispetto ai competitor?",
    question: "Sapete dirmi se una campagna Shopping sta performando male per colpa del budget o perché siamo fuori prezzo rispetto ai rivali?",
    en: {
      title: "V24 — It's not the budget. It's the price.",
      theme: "Inside the shop window",
      seoPain: "google shopping competitor price elasticity",
      pain: "Increasing your Google Shopping ad budget without getting any increase in sales.",
      agitate: "You think the ads don't work, unaware that on the Google Shopping results page your competitor is offering the exact same product at a lower price, making every bid increase of yours pointless.",
      relief: "We cross-reference rivals' price data on the results page with the clicks on your Shopping campaigns, identifying when poor performance is due to pricing and not to the ad settings.",
      script: "You raise your bids, increase your PMax budget, but sales on Google Shopping stay stuck. You're told you need even more budget. What if you were simply priced out? Shoppers on Shopping compare prices down to the cent: if you're more expensive than the rival next to you, no budget increase will bring you healthy conversions. Our module analyzes competitors' prices and correlates the conversion rate with price elasticity. Ask your agency: is this Shopping campaign underperforming because of the ads, or because we're priced out compared with our competitors?",
      question: "Can you tell me whether a Shopping campaign is underperforming because of the budget or because we're priced out compared with our rivals?"
    },
    linkedin: "Google Shopping è un comparatore di prezzo spietato.\n\nSpendere di più in ads per promuovere un prodotto fuori mercato rispetto alla concorrenza è un suicidio finanziario. Noi monitoriamo la competitività del pricing on-site dei tuoi rivali prima di toccare i bid delle campagne.\n\nIl prezzo è la prima metrica di marketing.\n\nLa tua agenzia analizza il prezzo dei concorrenti prima di chiederti budget?",
    facebook: "Se un prodotto su Google Shopping costa più dei concorrenti, gli utenti non lo compreranno, punto. Prima di buttare soldi aumentando il budget pubblicitario, chiedi un'analisi competitiva dei prezzi: a volte basta ribassare di 1€ per sbloccare le vendite."
  },
  {
    id: "v25",
    youtubeId: "WG4sIFbhYa8",
    title: "V25 — Il tesoro che hai già in casa",
    theme: "La domanda che non vedi",
    seoPain: "ottimizzare keyword striking distance seo posizioni 4-10",
    pain: "Spendere risorse per creare nuovi articoli di blog ignorando le pagine che si trovano già in seconda pagina su Google.",
    agitate: "Questo sforzo continuo produce risultati lenti e scarsi, mentre hai decine di URL bloccate in posizione 7 o 8 che potrebbero portarti traffico e vendite immediate con piccoli aggiornamenti mirati.",
    relief: "Scansioniamo Search Console e filtriamo le query in 'striking distance' (posizioni 4-10) con alto volume ed conversion rate storico, ottimizzandole per spingerle in Top 3 ed incrementare il traffico organico in poche settimane.",
    script: "Si pensa sempre a scrivere nuovi articoli, nuovi contenuti, nuove pagine per la SEO. Ma il vero tesoro è quello che hai già posizionato... quasi bene. Le pagine in seconda pagina o in fondo alla prima (posizioni 4-10) sono vicinissime a generare traffico vero. Noi estraiamo la lista Striking Distance: ottimizzando i testi, aggiungendo FAQ strutturate o curando i link interni di queste pagine esistenti, le portiamo in Top 3 in settimane, non mesi. Chiedi alla tua agenzia: quali pagine sono in striking distance e come le stiamo spingendo in Top 3?",
    question: "Quali pagine del mio sito sono in 'striking distance' (posizioni 4-10) e come le stiamo ottimizzando per portarle in Top 3?",
    en: {
      title: "V25 — The treasure you already have at home",
      theme: "The demand you can't see",
      seoPain: "optimize striking distance seo keywords positions 4-10",
      pain: "Spending resources on new blog posts while ignoring the pages that are already on Google's second page.",
      agitate: "This constant effort produces slow, meager results, while you have dozens of URLs stuck in position 7 or 8 that could bring you traffic and sales right away with small, targeted updates.",
      relief: "We scan Search Console and filter the queries in 'striking distance' (positions 4-10) with high volume and a strong historical conversion rate, optimizing them to push them into the Top 3 and increase organic traffic within a few weeks.",
      script: "People always think about writing new articles, new content, new pages for SEO. But the real treasure is what you've already ranked... almost well. Pages on the second page or at the bottom of the first (positions 4-10) are very close to generating real traffic. We pull out the Striking Distance list: by optimizing the copy, adding structured FAQs or improving the internal links of these existing pages, we bring them into the Top 3 in weeks, not months. Ask your agency: which pages are in striking distance, and how are we pushing them into the Top 3?",
      question: "Which pages on my site are in 'striking distance' (positions 4-10), and how are we optimizing them to bring them into the Top 3?"
    },
    linkedin: "Smetti di scrivere nuovi articoli se non hai ancora ottimizzato la seconda pagina.\n\nLe keyword in posizione 4-10 (Striking Distance) sono miniere d'oro inutilizzate: con piccoli ritocchi e FAQ mirate possono scalare in Top 3, portando traffico transazionale immediato.\n\nOttimizza l'esistente prima di creare il nuovo.\n\nLa tua agenzia ti ha mai mostrato la lista delle tue keyword striking distance?",
    facebook: "Hai articoli sul sito che si posizionano al settimo o ottavo posto su Google? Significa che sei a un passo dal successo ma non ricevi clic. Aggiornando quei contenuti con le informazioni giuste puoi portarli in Top 3 rapidamente, senza spendere in pubblicità."
  },
  {
    id: "v26",
    youtubeId: "AWAq1rom5x8",
    title: "V26 — Quando l'AI risponde, il tuo nome c'è?",
    theme: "La domanda che non vedi",
    seoPain: "generative engine optimization geo seo ai",
    pain: "I tuoi clienti si spostano sui motori di ricerca AI (ChatGPT, Gemini) e il tuo brand non compare mai nelle risposte.",
    agitate: "Il traffico dai motori tradizionali rallenta e tu perdi quote di mercato a favore di concorrenti sconosciuti che vengono regolarmente consigliati dai motori di ricerca generativi come migliori opzioni d'acquisto.",
    relief: "Applichiamo tecniche di Generative Engine Optimization (GEO) per monitorare la visibilità del tuo brand nelle risposte dell'AI su query non-brand e ottimizziamo la tua presenza online per essere menzionati dai modelli linguistici.",
    script: "Gli utenti cercano sempre meno su Google e sempre più su ChatGPT o Gemini: 'consigliami il miglior e-commerce di arredamento italiano'. Se il tuo brand non compare in quella risposta, sei invisibile a una nuova generazione di acquirenti. Noi studiamo la visibilità generativa (GEO) del tuo brand, analizzando le fonti citate dall'AI e ottimizzando le tue PR digitali per inserirti nei consigli dei modelli. Chiedi alla tua agenzia: come stiamo ottimizzando la nostra presenza per le ricerche guidate dall'AI?",
    question: "Il nostro brand compare nelle risposte dell'AI (Gemini, ChatGPT) sulle query di acquisto del nostro settore?",
    en: {
      title: "V26 — When AI answers, is your name there?",
      theme: "The demand you can't see",
      seoPain: "generative engine optimization geo ai seo",
      pain: "Your customers are moving to AI search engines (ChatGPT, Gemini) and your brand never shows up in the answers.",
      agitate: "Traffic from traditional search engines is slowing down and you're losing market share to unknown competitors that generative search engines regularly recommend as the best buying options.",
      relief: "We apply Generative Engine Optimization (GEO) techniques to monitor your brand's visibility in AI answers to non-brand queries, and we optimize your online presence so that language models mention you.",
      script: "Users search less and less on Google and more and more on ChatGPT or Gemini: “recommend the best Italian furniture e-commerce store.” If your brand doesn't appear in that answer, you're invisible to a new generation of buyers. We study your brand's generative visibility (GEO), analyzing the sources the AI cites and optimizing your digital PR to get you into the models' recommendations. Ask your agency: how are we optimizing our presence for AI-driven searches?",
      question: "Does our brand show up in AI answers (Gemini, ChatGPT) to purchase queries in our industry?"
    },
    linkedin: "La SEO tradizionale sta cambiando: i motori generativi stanno sostituendo i clic classici.\n\nLa Generative Engine Optimization (GEO) è il nuovo standard per assicurarsi che i modelli AI consiglino il tuo prodotto quando gli utenti chiedono consigli d'acquisto strutturati.\n\nPrepara il tuo brand per l'era delle AI.\n\nAvete una strategia per comparire nelle risposte di ChatGPT e Gemini?",
    facebook: "Cosa succede se un utente chiede a ChatGPT: 'quali sono i migliori e-commerce per acquistare utensileria B2B in Italia?' Se il tuo nome non c'è, stai perdendo vendite in silenzio. Noi ottimizziamo i tuoi testi per farti consigliare dall'AI."
  },
  {
    id: "v27",
    youtubeId: "XH8FYKy9qNg",
    title: "V27 — Accendi la luce: chi ti porta via clienti, e cosa gli promette",
    theme: "La domanda che non vedi",
    seoPain: "monitoraggio competitor claim landing page ads",
    pain: "I tuoi tassi di conversione calano perché un concorrente ha lanciato un'offerta migliore o modificato i suoi annunci senza che tu lo sappia.",
    agitate: "Navighi al buio mentre i concorrenti erodono la tua Impression Share o copiano le tue offerte commerciali più efficaci, lasciandoti con ads inefficienti e costi di acquisizione crescenti.",
    relief: "Scansioniamo periodicamente i siti e gli annunci attivi dei tuoi rivali, mappiamo i loro claim (es. 'consegna in 24h') e ti segnaliamo le variazioni dell'offerta competitiva sulla SERP.",
    script: "Un concorrente cambia offerta, taglia i prezzi o promette una consegna più veloce: improvvisamente le tue ads non convertono più. Come te ne accorgi? Il nostro sistema esegue scansioni continue sulla SERP dei competitor. Mappiamo i claim reali dei concorrenti e calcoliamo il threat_score. Se un rivale lancia una promozione aggressiva sulle tue stesse chiavi, ti avvisiamo subito per adeguare l'offerta. Chiedi alla tua agenzia: chi sta monitorando i claim dei competitor sulle nostre stesse parole chiave?",
    question: "Chi sono i competitor che stanno acquistando le mie parole chiave e quali offerte stanno mostrando ai miei clienti?",
    en: {
      title: "V27 — Turn on the light: who's taking your customers, and what they're promising them",
      theme: "The demand you can't see",
      seoPain: "competitor claims landing page ads monitoring",
      pain: "Your conversion rates are dropping because a competitor has launched a better offer or changed its ads without you knowing.",
      agitate: "You're navigating in the dark while competitors erode your Impression Share or copy your most effective commercial offers, leaving you with inefficient ads and rising acquisition costs.",
      relief: "We periodically scan your rivals' websites and active ads, map their claims (e.g. “24-hour delivery”) and alert you to changes in the competitive offer on the results page.",
      script: "A competitor changes its offer, cuts prices or promises faster delivery: suddenly your ads stop converting. How do you notice? Our system continuously scans competitors on the results page. We map competitors' real claims and calculate the threat_score. If a rival launches an aggressive promotion on your same keywords, we alert you right away so you can adjust your offer. Ask your agency: who is monitoring competitors' claims on our own keywords?",
      question: "Which competitors are buying my keywords, and what offers are they showing my customers?"
    },
    linkedin: "Le tue campagne non performano in un vuoto: concorrono con quelle dei tuoi rivali.\n\nSe un concorrente modifica la sua landing page offrendo la spedizione gratuita, il tuo tasso di conversione calerà all'istante. Noi scansioniamo e confrontiamo i claim dei competitor per darti contromisure reali.\n\nAccendi la luce sulla concorrenza.\n\nLa tua agenzia monitora i testi delle landing dei tuoi rivali?",
    facebook: "Mentre tu spendi in ads, i tuoi concorrenti studiano le tue offerte e le migliorano di nascosto. Con il nostro monitoraggio competitivo automatico scopri in tempo reale cosa promettono i tuoi rivali sulle tue stesse ricerche per non farti rubare clienti."
  },
  {
    id: "v28",
    youtubeId: "6EsZZClrLXE",
    title: "V28 — Le pagine che muoiono piano",
    theme: "La domanda che non vedi",
    seoPain: "decadimento traffico organico pagine orfane",
    pain: "Pagine web storiche che in passato portavano clienti organici perdono posizioni su Google in modo lento e invisibile.",
    agitate: "Nessuno controlla le singole URL obsolete o con link interrotti, finché interi blocchi di traffico transazionale spariscono dai report di GA4 senza lasciare traccia.",
    relief: "Scansioniamo la topologia del sito e tracciamo l'andamento del traffico organico per singola pagina, segnalando i decadimenti costanti e pianificando interventi di restyling mirati.",
    script: "Ci sono pagine del tuo sito che un anno fa portavano decine di contatti al mese e che oggi non visita più nessuno. Un decadimento lento, invisibile se guardi solo il traffico totale aggregato. Il nostro monitoraggio topologico analizza le visite organiche a livello di singola URL. Se rileva un trend di discesa costante, segnala la pagina per un restyling dei testi o per risolvere errori tecnici di indicizzazione. Chiedi alla tua agenzia: quali pagine storiche del nostro sito stanno perdendo posizioni organiche in questo momento?",
    question: "Ci sono pagine del mio sito che stanno perdendo traffico organico in modo costante da oltre sei mesi?",
    en: {
      title: "V28 — The pages that die slowly",
      theme: "The demand you can't see",
      seoPain: "organic traffic decay orphan pages",
      pain: "Long-standing web pages that used to bring in organic customers lose positions on Google slowly and invisibly.",
      agitate: "Nobody checks individual outdated URLs or those with broken links, until entire blocks of transactional traffic vanish from your GA4 reports without a trace.",
      relief: "We scan the site's topology and track organic traffic trends page by page, flagging steady declines and planning targeted refreshes.",
      script: "There are pages on your site that a year ago brought in dozens of leads a month and that nobody visits anymore. A slow decline, invisible if you only look at aggregate total traffic. Our topological monitoring analyzes organic visits at the level of each individual URL. If it detects a steady downward trend, it flags the page for a copy refresh or to fix technical indexing errors. Ask your agency: which long-standing pages on our site are losing organic positions right now?",
      question: "Are there pages on my site that have been steadily losing organic traffic for more than six months?"
    },
    linkedin: "Il traffico organico totale può nascondere pagine che stanno morendo in silenzio.\n\nUna vecchia pagina di prodotto molto forte che perde visite mese dopo mese riduce il tuo fatturato organico a lungo termine. Noi analizziamo la topologia delle URL per stanare i decadimenti silenziosi.\n\nFermiamo la perdita di visite storiche.\n\nLa tua agenzia controlla i trend delle singole URL?",
    facebook: "Hai pagine sul tuo sito scritte anni fa che erano posizionate benissimo su Google? Senza manutenzione, Google le penalizza a favore di contenuti più freschi. Noi individuiamo le pagine in discesa costante prima che spariscano del tutto dalla SERP."
  },
  {
    id: "v29",
    youtubeId: "OyToJ2ZEwqw",
    title: "V29 — Quale immagine ti paga le bollette (e quali bruciano i tuoi soldi)",
    theme: "Creatività col giudice severo",
    seoPain: "creative loop performance ads meta facebook",
    pain: "Spendere migliaia di euro in produzione video e grafica per Facebook Ads senza sapere quale elemento stia convertendo davvero.",
    agitate: "Pensi che le ads stiano funzionando, ignorando che l'agenzia continua a spendere il 90% del budget su un video istituzionale costoso ad alto CPL, mentre immagini semplici a basso costo sono spente.",
    relief: "Il Creative Loop ABC scansiona costantemente le performance di spesa di ciascuna inserzione e classifica le creatività in Vincenti (A), Stabili (B) e Morti (C), spegnendo gli sprechi in 48 ore.",
    script: "Meta Ads consuma budget, e l'agenzia ti propone sempre nuovi video e grafiche costose. Ma quale immagine ti sta portando clienti, e quale sta solo bruciando denaro? Il nostro Creative Loop esegue l'analisi ABC: classifica gli asset in Vincenti (A), Stabili (B) e Morti (C). Mettiamo subito in pausa i morti per riallocare il budget sui concetti attivi più efficienti. Chiedi alla tua agenzia: qual è la classifica esatta delle mie creatività Meta in base al costo per cliente di questa settimana?",
    question: "Qual è la classifica esatta delle mie creatività Meta divise per profitto (ABC) di questa settimana?",
    en: {
      title: "V29 — Which image pays your bills (and which ones burn your money)",
      theme: "Creatives with a strict judge",
      seoPain: "meta facebook ads creative loop performance",
      pain: "Spending thousands of euros on video and graphics production for Facebook Ads without knowing which element is actually converting.",
      agitate: "You think the ads are working, unaware that the agency keeps spending 90% of the budget on an expensive corporate video with a high CPL, while simple, low-cost images are switched off.",
      relief: "The ABC Creative Loop constantly scans the spend performance of each ad and ranks creatives as Winners (A), Stable (B) and Dead (C), switching off waste within 48 hours.",
      script: "Meta Ads eats up budget, and the agency keeps proposing new, expensive videos and graphics. But which image is bringing you customers, and which one is just burning money? Our Creative Loop runs the ABC analysis: it ranks assets as Winners (A), Stable (B) and Dead (C). We immediately pause the dead ones to reallocate budget to the most efficient active concepts. Ask your agency: what is the exact ranking of my Meta creatives based on this week's cost per customer?",
      question: "What is the exact ranking of my Meta creatives by profit (ABC) this week?"
    },
    linkedin: "Nel marketing creativo l'estetica inganna. Spesso la grafica più curata ha performance pessime.\n\nNoi usiamo il Creative Loop ABC per classificare l'efficienza reale di immagini e video su Meta, bloccando gli ad saturi e scalando solo i concetti vincenti.\n\nFai parlare i dati, non il gusto estetico.\n\nLa tua agenzia taglia le inserzioni inefficienti in 48 ore?",
    facebook: "Hai presente quei video pubblicitari bellissimi che ti sono costati una fortuna? Su Facebook potrebbero essere la cosa meno efficiente di tutte. Con il nostro Creative Loop scopri subito quali immagini semplici ti portano clienti veri e quali video costosi ti stanno solo svuotando le tasche."
  },
  {
    id: "v30",
    youtubeId: "UnRfYn6Px8g",
    title: "V30 — Il lusso del rifiuto",
    theme: "Creatività col giudice severo",
    seoPain: "giudice avversariale meta ads conformita",
    pain: "Le campagne pubblicitarie Meta vengono respinte o bloccate nel weekend a causa di violazioni di policy non previste.",
    agitate: "Questo blocco interrompe il flusso di lead o vendite proprio nei giorni di massimo traffico, costringendoti ad attendere il lunedì per poter correggere i testi degli annunci.",
    relief: "Il nostro Giudice Avversariale analizza testi e immagini tramite algoritmi Vision prima del caricamento, bloccando preventivamente i claim non conformi o i testi sovrapposti eccessivi.",
    script: "Meta rifiuta la tua campagna il venerdì sera per policy o testo eccessivo nell'immagine. Risultato: weekend a secco e budget bloccato. Con il nostro Giudice Avversariale (Vision+Text), ogni creatività viene valutata automaticamente prima del caricamento per intercettare i red-flag (testi pixelati, promesse vietate). Evitiamo le disapprovazioni prima di spendere un solo euro. Chiedi alla tua agenzia: come verificate che le creatività non violino le policy di Meta prima di pubblicarle?",
    question: "Come verificate che le creatività non violino le linee guida di Meta prima di metterle online?",
    en: {
      title: "V30 — The luxury of rejection",
      theme: "Creatives with a strict judge",
      seoPain: "meta ads compliance adversarial judge",
      pain: "Meta ad campaigns get rejected or blocked over the weekend because of unforeseen policy violations.",
      agitate: "The block cuts off the flow of leads or sales precisely on the days with the most traffic, forcing you to wait until Monday to fix the ad copy.",
      relief: "Our Adversarial Judge analyzes copy and images with Vision algorithms before upload, blocking non-compliant claims or excessive overlaid text in advance.",
      script: "Meta rejects your campaign on Friday evening over a policy issue or too much text in the image. Result: a dry weekend and a blocked budget. With our Adversarial Judge (Vision+Text), every creative is automatically assessed before upload to catch red flags (pixelated text, prohibited promises). We avoid disapprovals before spending a single euro. Ask your agency: how do you check that creatives don't violate Meta's policies before publishing them?",
      question: "How do you check that creatives don't violate Meta's guidelines before putting them online?"
    },
    linkedin: "Le disapprovazioni delle ads su Meta costano tempo e denaro.\n\nIl nostro Giudice Avversariale pre-valuta grafiche e testi bloccando le violazioni di policy prima dell'apply. Così le tue campagne nascono sane e corrono senza blocchi improvvisi.\n\nPrevenire è meglio che correggere il lunedì.\n\nLa tua agenzia testa gli ad prima del lancio?",
    facebook: "Campagna Facebook bloccata proprio all'inizio del mese? Succede quando si caricano testi o immagini al limite delle regole senza fare controlli preventivi. Con il nostro Giudice Vision puoi testare le grafiche prima di metterle online, evitando brutte sorprese."
  },
  {
    id: "v31",
    youtubeId: "KqqS0rZXcWU",
    title: "V31 — La molla che fa dire sì ai tuoi clienti",
    theme: "Creatività col giudice severo",
    seoPain: "copywriting psicologico ads bisogni maslow",
    pain: "Annunci pubblicitari scritti con copy generici ('siamo i leader del settore') o basati unicamente su sconti commerciali.",
    agitate: "Questo approccio attira clienti opportunisti a basso margine o non attira nessuno, alzando i costi di acquisizione e svalutando l'immagine del brand sul mercato.",
    relief: "Generiamo concept e testi pubblicitari ancorati ai bisogni reali della piramide di Maslow e alle obiezioni dei clienti, testando angoli psicologici alternativi per capire quale fa dire sì.",
    script: "Annunci tutti uguali: 'sconto 20%', 'siamo i migliori'. Ma cosa spinge davvero un utente a cliccare? La nostra suite scrive copy basandosi sulla psicologia del cliente, mappando le sue obiezioni reali e i bisogni profondi di sicurezza o appartenenza. Confrontiamo i risultati dell'angolo 'sollievo' contro l'angolo 'urgenza' per capire quale leva converte meglio sul tuo e-commerce. Chiedi alla tua agenzia: quali leve psicologiche stiamo testando nei copy dei nostri annunci?",
    question: "Quali leve psicologiche ed obiezioni stiamo affrontando nei copy dei nostri annunci?",
    en: {
      title: "V31 — The trigger that makes your customers say yes",
      theme: "Creatives with a strict judge",
      seoPain: "psychological ad copywriting maslow needs",
      pain: "Ads written with generic copy (“we're the industry leaders”) or based solely on discounts.",
      agitate: "This approach attracts low-margin bargain hunters or attracts no one at all, raising acquisition costs and cheapening your brand image in the market.",
      relief: "We generate ad concepts and copy anchored to real needs from Maslow's pyramid and to customers' objections, testing alternative psychological angles to find out which one makes people say yes.",
      script: "Ads that all look the same: “20% off,” “we're the best.” But what really drives a user to click? Our suite writes copy based on customer psychology, mapping their real objections and their deep needs for security or belonging. We compare the results of the “relief” angle against the “urgency” angle to find out which lever converts best on your e-commerce store. Ask your agency: which psychological levers are we testing in our ad copy?",
      question: "Which psychological levers and objections are we addressing in our ad copy?"
    },
    linkedin: "Il copy commerciale banale ha smesso di convertire.\n\nNoi strutturiamo i testi delle inserzioni mappando le obiezioni dei clienti ed ancorandoli ai bisogni Maslow veri. E misuriamo quale 'angolo emotivo' converte di più per guidare la produzione futura.\n\nLa psicologia guida le ads, non la fantasia.\n\nQuale angolo psicologico sta funzionando meglio sul vostro target?",
    facebook: "Se i tuoi annunci dicono solo 'compra ora', stai sprecando denaro. Oggi i clienti cercano risposte alle loro paure e bisogni reali. Noi scriviamo testi che affrontano le loro obiezioni prima ancora che le formulino, aumentando le conversioni senza fare sconti."
  },
  {
    id: "v32",
    youtubeId: "09ytiAgcLh4",
    title: "V32 — Il lavoro inizia prima della firma",
    theme: "Dal giorno zero al mondo",
    seoPain: "audit onboarding agenzia marketing day0",
    pain: "Firmare un contratto di gestione marketing basandosi su slide commerciali standard senza un'analisi tecnica dei tuoi account.",
    agitate: "Scopri i problemi strutturali di tracciamento o di spesa solo dopo aver firmato un vincolo annuale, quando l'agenzia ha già incassato le prime fee ed ha iniziato a lavorare alla cieca.",
    relief: "Eseguiamo un'audit preliminare profondo (takeover) cross-source al giorno zero prima di farti firmare la proposta, individuando subito le migliorie per impatto e confidenza.",
    script: "Molti ti fanno firmare il contratto e poi iniziano a guardare gli account. Per noi, l'audit inizia prima. Connettiamo le tue sorgenti ed eseguiamo il takeover preliminare prima di presentarti la proposta commerciale. Così firmi un piano di interventi reali già validati in staging, sapendo da subito dove recupereremo il budget sprecato. Chiedi alla tua agenzia: quali problemi concreti avete rilevato sui miei account prima di farmi firmare questa proposta?",
    question: "Quali sono i problemi concreti che avete rilevato sul mio account prima di farmi firmare questa proposta?",
    en: {
      title: "V32 — The work starts before the signature",
      theme: "From day zero to the world",
      seoPain: "marketing agency onboarding audit day0",
      pain: "Signing a marketing management contract based on standard sales slides, without a technical analysis of your accounts.",
      agitate: "You discover structural tracking or spend problems only after signing a one-year commitment, when the agency has already collected its first fees and started working blind.",
      relief: "We run an in-depth preliminary cross-source audit (takeover) on day zero, before asking you to sign the proposal, immediately identifying the improvements ranked by impact and confidence.",
      script: "Many agencies have you sign the contract and only then start looking at the accounts. For us, the audit starts before. We connect your sources and run the preliminary takeover before presenting the commercial proposal. That way you sign a plan of real actions already validated in staging, knowing from the start where we'll recover wasted budget. Ask your agency: what concrete problems did you find in my accounts before asking me to sign this proposal?",
      question: "What concrete problems did you find in my account before asking me to sign this proposal?"
    },
    linkedin: "Non si firma al buio.\n\nUn'onboarding serio richiede una diagnosi day-0 prima delle firme. Noi colleghiamo gli account in lettura e presentiamo la prima coda di interventi correttivi in staging nel pitch, non settimane dopo il contratto.\n\nLa trasparenza inizia dal giorno zero.\n\nLa tua agenzia ha analizzato i tuoi account prima di farti firmare?",
    facebook: "Stanco di agenzie che promettono mari e monti prima della firma e poi spariscono? Noi ti mostriamo i problemi del tuo tracciamento e della tua spesa pubblicitaria prima di farti firmare il contratto, presentandoti un piano d'azione concreto."
  },
  {
    id: "v33",
    youtubeId: "5p0XsMSWhEY",
    title: "V33 — La fotografia che nessuno può riscrivere",
    theme: "Dal giorno zero al mondo",
    seoPain: "stabilire baseline t0 performance marketing",
    pain: "L'agenzia rivendica il merito di risultati positivi modificando i periodi di confronto storici a proprio favore.",
    agitate: "Senza una baseline iniziale concordata e versionata, non saprai mai se la crescita dichiarata nei report trimestrali è reale o se è solo un artificio contabile creato per nascondere performance piatte.",
    relief: "Fissiamo un Dossier di presa in carico al giorno zero (t0) immutabile. Qualsiasi incremento futuro di margini, conversioni e vendite verrà misurato solo in base a questa baseline storica concordata.",
    script: "Dopo sei mesi l'agenzia dice che il fatturato è cresciuto del 20%. Ma rispetto a cosa? Se cambiano i periodi di confronto, i grafici dicono quello che vogliono. Noi stabiliamo il Dossier di presa in carico al giorno zero (t0): una fotografia versionata e immutabile delle tue performance storiche registrata all'onboarding. Il confronto futuro si farà solo contro quella foto. Chiedi alla tua agenzia: qual era la nostra esatta baseline t0 di performance al momento del vostro subentro?",
    question: "Qual era la nostra esatta baseline t0 di performance al momento del vostro subentro?",
    en: {
      title: "V33 — The snapshot nobody can rewrite",
      theme: "From day zero to the world",
      seoPain: "establish t0 marketing performance baseline",
      pain: "The agency claims credit for positive results by shifting the historical comparison periods in its own favor.",
      agitate: "Without an agreed, versioned starting baseline, you'll never know whether the growth claimed in quarterly reports is real or just an accounting trick created to hide flat performance.",
      relief: "We set an immutable day-zero (t0) Takeover Dossier. Any future increase in margins, conversions and sales will be measured only against this agreed historical baseline.",
      script: "After six months the agency says revenue has grown by 20%. But compared with what? If the comparison periods change, the charts say whatever they want. We establish the Takeover Dossier on day zero (t0): a versioned, immutable snapshot of your historical performance, recorded at onboarding. Every future comparison will be made only against that snapshot. Ask your agency: what was our exact t0 performance baseline when you took over?",
      question: "What was our exact t0 performance baseline when you took over?"
    },
    linkedin: "Senza una baseline iniziale, misurare l'efficacia di un'agenzia è impossibile.\n\nNoi definiamo la baseline t0 versionata all'onboarding, congelando i dati storici del tracciamento. I miglioramenti futuri sono calcolati matematicamente solo a partire da questa fotografia.\n\nNessuno sposta l'asticella a cose fatte.\n\nAvete una baseline concordata scritta nel vostro contratto?",
    facebook: "Come fai a sapere se la nuova gestione sta portando risultati veri? Semplice: devi concordare un punto di partenza immutabile il primo giorno. Con il nostro Dossier t0 hai una foto stampata dello stato di partenza delle tue ads."
  },
  {
    id: "v34",
    youtubeId: "1GAsMDV78Cc",
    title: "V34 — La staffetta, non la roulette",
    theme: "Dal giorno zero al mondo",
    seoPain: "passaggio consegne agenzia marketing vendite",
    pain: "Crolli improvvisi delle vendite o dei lead durante il passaggio di consegne tra la vecchia e la nuova agenzia.",
    agitate: "Spegnere bruscamente le vecchie campagne prima che le nuove siano pronte causa perdite economiche enormi ed interrompe l'ottimizzazione storica degli algoritmi di Google e Meta.",
    relief: "Gestiamo la transizione come una staffetta: le vecchie campagne rimangono attive mentre carichiamo le nuove in staging, effettuando il passaggio controllato solo dopo i test dry-run.",
    script: "Cambiare agenzia non deve essere una roulette russa che spegne le vendite per settimane. Noi gestiamo il subentro come una staffetta controllata: lasciamo correre le vecchie campagne mentre prepariamo la nuova struttura in staging, facendo il passaggio di consegne in modo morbido e testando i tracciamenti in dry-run prima della pubblicazione. Chiedi alla tua agenzia: come gestiremo il passaggio di consegne per evitare che le vendite si interrompano anche solo per un giorno?",
    question: "Come gestiremo il passaggio di consegne per evitare che le vendite si interrompano anche solo per un giorno?",
    en: {
      title: "V34 — A relay race, not roulette",
      theme: "From day zero to the world",
      seoPain: "marketing agency handover sales",
      pain: "Sudden drops in sales or leads during the handover between the old agency and the new one.",
      agitate: "Abruptly switching off the old campaigns before the new ones are ready causes huge financial losses and interrupts the historical optimization of Google's and Meta's algorithms.",
      relief: "We manage the transition like a relay race: the old campaigns stay active while we load the new ones in staging, making the controlled switch only after dry-run tests.",
      script: "Changing agencies doesn't have to be a game of Russian roulette that shuts down sales for weeks. We manage the takeover as a controlled relay race: we let the old campaigns keep running while we prepare the new structure in staging, handing over smoothly and testing tracking in a dry-run before publishing. Ask your agency: how will we manage the handover so that sales don't stop, not even for a single day?",
      question: "How will we manage the handover so that sales don't stop, not even for a single day?"
    },
    linkedin: "Il cambio di agenzia è il momento più rischioso per un e-commerce.\n\nUna transizione caotica può bloccare i pixel e azzerare le vendite per settimane. Noi applichiamo il protocollo staffetta: carichiamo in staging ed eseguiamo il passaggio solo a tracciamenti testati, riducendo a zero il tempo di fermo delle campagne.\n\nProteggi la continuità del tuo business.\n\nCome pianificherete il passaggio di consegne?",
    facebook: "Non rischiare di rimanere senza ordini per settimane solo perché stai cambiando agenzia. Il nostro protocollo di staffetta garantisce che le vecchie campagne continuino a vendere finché le nuove non sono pronte e testate in staging."
  },
  {
    id: "v35",
    youtubeId: "rWupBA2Sydw",
    title: "V35 — Il totale quasi giusto",
    theme: "Dal giorno zero al mondo",
    seoPain: "report multivaluta e-commerce tassi cambio bce",
    pain: "Report e-commerce internazionali multivaluta che mescolano valute diverse senza applicare tassi di cambio giornalieri esatti.",
    agitate: "Prendere decisioni di scala di budget basandoti su report che indicano una crescita fittizia del 10% dovuta solo a fluttuazioni di valuta o conversioni fatte a tassi medi mensili approssimativi.",
    relief: "Il nostro sistema applica il layer FX BCE vintage. Se manca il tasso esatto di quel giorno, il sistema va in fail-closed piuttosto che sommare male.",
    script: "Vendi in N paesi, in dollari, sterline ed euro. A fine mese, sommare i totali usando un tasso medio approssimativo ti mostra una crescita che non esiste. Il nostro sistema applica il layer FX BCE vintage: converte ogni transazione al tasso ufficiale del giorno esatto della vendita. E se manca il tasso, va in fail-closed piuttosto che sommare male. Chiedi alla tua agenzia: come calcolate i tassi di cambio nei report aggregati per evitare che le variazioni valutarie falsino il ROI?",
    question: "Come calcolate i tassi di cambio nei report aggregati per evitare che le variazioni valutarie falsino il ROI?",
    en: {
      title: "V35 — The almost-right total",
      theme: "From day zero to the world",
      seoPain: "multi-currency e-commerce report ecb exchange rates",
      pain: "International multi-currency e-commerce reports that mix different currencies without applying exact daily exchange rates.",
      agitate: "Making budget-scaling decisions based on reports that show an illusory 10% growth caused only by currency fluctuations or by conversions done at rough monthly average rates.",
      relief: "Our system applies the vintage ECB FX layer. If the exact rate for that day is missing, the system fails closed rather than adding things up wrong.",
      script: "You sell in N countries, in dollars, pounds and euros. At the end of the month, adding up the totals with a rough average rate shows you growth that doesn't exist. Our system applies the vintage ECB FX layer: it converts each transaction at the official rate for the exact day of the sale. And if the rate is missing, it fails closed rather than adding things up wrong. Ask your agency: how do you calculate exchange rates in aggregated reports so that currency swings don't distort ROI?",
      question: "How do you calculate exchange rates in aggregated reports so that currency swings don't distort ROI?"
    },
    linkedin: "Nel mercato globale un totale approssimativo è un totale sbagliato.\n\nFluttuazioni valutarie non calcolate al giorno esatto possono nascondere perdite reali nei mercati esteri. Noi utilizziamo il layer FX BCE per riconciliare ogni vendita al tasso esatto della data di acquisto.\n\nLa precisione finanziaria non accetta approssimazioni.\n\nLa tua agenzia applica i tassi BCE giornalieri nei report?",
    facebook: "Se vendi all'estero, occhio alle conversioni valutarie dei report ads. Spesso sommano dollari ed euro con tassi medi mensili approssimativi che nascondono cali reali nei mercati locali. Esigi tassi di cambio giornalieri BCE."
  }
];
