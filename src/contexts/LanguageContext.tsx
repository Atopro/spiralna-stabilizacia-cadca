import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'sk' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data
const translations = {
  sk: {
    // Navigation
    'nav.home': 'Domov',
    'nav.about': 'O mne',
    'nav.services': 'Tréningy',
    'nav.system': 'SM systém',
    'nav.diagnoses': 'Diagnózy a Liečba',
    
    // Hero section
    'hero.title1': 'Špirálna Stabilzácia',
    'hero.title2': 'SM - Systém Čadca',
    'hero.subtitle': 'Unikátna rehabilitačná metóda pre bolesti chrbta, krčnej chrbtice, bedrovej časti, skoliózi a hernie disku',
    
    // Why SPS section
    'why.title': 'Prečo práve Špirálna stabilizácia (SPS)?',
    'why.intro': 'Špirálna stabilizácia chrbtice (SPS) je unikátna metóda, ktorá pomáha obnoviť správne držanie tela, redukovať bolesť chrbtice a posilniť svalový korzet.',
    'why.benefit1.title': 'Zlepšuje držanie tela',
    'why.benefit1.desc': 'Pomáha vyrovnať chrbticu a stabilizovať telo.',
    'why.benefit2.title': 'Odstraňuje bolesti chrbtice',
    'why.benefit2.desc': 'Zmierňuje bolesti chrbta a kĺbov prirodzenou cestou.',
    'why.benefit3.title': 'Prevencia aj rehabilitácia',
    'why.benefit3.desc': 'Využíva sa na liečbu aj prevenciu chrbticových problémov.',
    'why.benefit4.title': 'Vhodné pre každého',
    'why.benefit4.desc': 'Vhodné pre deti, dospelých, seniorov aj športovcov.',
    'why.diagnoses.btn': 'Diagnózy a liečba',
    'why.system.btn': 'SM systém',
    
    // About Me section
    'about.title': 'O mne',
    'about.subtitle': 'Certifikovaný špecialista SPS – SM Systém',
    'about.name': 'Volám sa',
    'about.intro': 'a som certifikovaný špecialista na metódu Špirálnej stabilizácie chrbtice (SPS – SM Systém).',
    'about.description': 'Pomáham ľuďom zbaviť sa bolesti chrbtice, zlepšiť držanie tela a obnoviť pohybovú rovnováhu. Verím, že správny prístup k pohybu dokáže zmeniť kvalitu života, a preto pristupujem ku každému klientovi',
    'about.individual': 'individuálne',
    'about.more.btn': 'Viac o mne',
    
    // Trainings section
    'trainings.title': 'Tréningy',
    'trainings.subtitle': 'Individuálny prístup pre vaše potreby',
    'trainings.individual.title': 'Individuálny tréning',
    'trainings.individual.desc': 'Ponúkam individuálne tréningy prispôsobené vašim potrebám, vhodné pre všetky vekové kategórie.',
    'trainings.individual.benefit1': 'Osobný prístup',
    'trainings.individual.benefit2': 'Diagnostika stavu',
    'trainings.individual.benefit3': 'Individuálny plán cvičení',
    'trainings.group.title': 'Skupinový tréning',
    'trainings.group.desc': 'Pripojte sa k našim skupinovým cvičeniam po absolvovaní 4-5 individuálnych tréningov.',
    'trainings.group.benefit1': 'Motivujúce prostredie',
    'trainings.group.benefit2': 'Pravidelné termíny',
    'trainings.group.benefit3': 'Cenovo výhodné',
    'trainings.book.btn': 'Objednať sa',
    'trainings.all.btn': 'Všetky Tréningy',
    
    // Diagnoses section
    'diagnoses.title': 'Diagnózy a Liečba',
    'diagnoses.intro': 'Špirálna stabilizácia chrbtice (SPS) pomáha pri bolestiach chrbtice, regenerácii kĺbov a stabilite pohybu. Od skoliózy až po neurologické poruchy – objavte, ako vám dokážem pomôcť.',
    'diagnoses.spine.title': 'Problémy chrbtice',
    'diagnoses.spine.detail1': 'Skolióza a deformity chrbtice',
    'diagnoses.spine.detail2': 'Hernia disku a výhrez platničky',
    'diagnoses.spine.detail3': 'Spinálna stenóza',
    'diagnoses.spine.detail4': 'Chronické bolesti chrbta',
    'diagnoses.joints.title': 'Bolesť kĺbov a chôdza',
    'diagnoses.joints.detail1': 'Artróza kĺbov',
    'diagnoses.joints.detail2': 'Problémy s chôdzou',
    'diagnoses.joints.detail3': 'Nestabilita kĺbov',
    'diagnoses.joints.detail4': 'Poúrazové stavy',
    'diagnoses.neuro.title': 'Neurologické poruchy',
    'diagnoses.neuro.detail1': 'Migrény a bolesti hlavy',
    'diagnoses.neuro.detail2': 'Roztrúsená skleróza',
    'diagnoses.neuro.detail3': 'Chronická únava',
    'diagnoses.neuro.detail4': 'Vertebrogénne poruchy',
    'diagnoses.more.btn': 'Zistiť viac',
    
    // Work preview section
    'work.title': 'Pozrite si viac z mojej práce',
    
    // Partners section
    'partners.title': 'Naši Priatelia',
    'partners.spiralista.desc': 'Naši priatelia zo Spirálni Stabilizace, ktorí s rovnakým zanietením šíria metódu Špirálnej stabilizácie a pomáhajú ľuďom žiť bez bolesti.',
    'partners.jablkovy.desc': 'Slovenský pestovatelia, ktorý prinášajú zdravé ovocné produkty priamo z prírody',
    'partners.outro': 'Sme radi, že môžeme zdieľať spoločnú cestu za zdravím a vzájomne sa podporovať.',
    
    // Contact section
    'contact.title': 'KONTAKTUJTE NÁS',
    'contact.heading': 'Dohodnite si konzultáciu',
    'contact.intro': 'Máte otázky alebo potrebujete poradiť? Ozvite sa nám a urobte prvý krok k zdravej chrbtici.',
    'contact.email': 'Email',
    'contact.form.title': 'Napíšte nám',
    'contact.form.subtitle': 'Odpoviem vám do 24 hodín',
    'contact.form.name': 'Meno a priezvisko',
    'contact.form.name.placeholder': 'Vaše meno',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'vas@email.sk',
    'contact.form.phone': 'Telefón',
    'contact.form.phone.placeholder': '+421 xxx xxx xxx',
    'contact.form.message': 'Správa',
    'contact.form.message.placeholder': 'Opíšte svoj problém alebo otázku...',
    'contact.form.send': 'Odoslať správu',
    'contact.form.sending': 'Odosielam...',
    'contact.form.sent': 'Správa odoslaná!',
    'contact.form.success': 'Ďakujeme za vašu správu!',
    'contact.form.success.desc': 'Odpoviem vám čo najskôr.',
    'contact.form.error': 'Nastala chyba pri odosielaní',
    'contact.form.error.desc': 'Prosím, skúste to znova alebo nás kontaktujte telefonicky.',
    'contact.form.direct': 'Alebo nás kontaktujte priamo na telefóne',
    
    // Footer
    'footer.stay.connected': 'Zostaňte v kontakte',
    'footer.newsletter': 'Prihláste sa na odber noviniek a získajte najnovšie informácie o našich službách.',
    'footer.email.placeholder': 'Váš email',
    'footer.quick.links': 'Rýchle odkazy',
    'footer.contact': 'Kontakt',
    'footer.follow': 'Sledujte nás',
    'footer.legal': 'Právne informácie',
    'footer.privacy': 'Ochrana údajov',
    'footer.cookies': 'Cookies',
    'footer.terms': 'Obchodné podmienky',
    'footer.impressum': 'Impressum',
    'footer.copyright': '© 2025 Špirálna Stabilizácia Čadca. Všetky práva vyhradené.',
    
    // Common
    'common.required': '*',
    'common.phone': '+421 948 525 380',
    'common.email': 'info@spiralnastabilizaciacadca.sk',
    'common.address': 'Čadca, Slovensko',
    'common.book.consultation': 'Objednať konzultáciu',
    'common.call.consultation': 'Zavolajte mi a dohodneme si konzultáciu',
    
    // About Me Page
    'aboutme.title': 'Moja cesta k metóde SPS',
    'aboutme.name': 'Som Ctibor Koža',
    'aboutme.subtitle': 'Špecialista na Špirálnu stabilizáciu chrbtice',
    'aboutme.intro1': 'Moja cesta k metóde SPS sa začala v momente, keď som pochopil, aký dôležitý je správny pohyb pre zdravie človeka. Už od mladosti ma fascinovalo, ako funguje ľudské telo a aký obrovský vplyv má rehabilitácia na kvalitu života.',
    'aboutme.intro2': 'Rozhodol som sa venovať špecializovaným metodikám, ktoré efektívne pomáhajú ľuďom zbaviť sa bolesti a zlepšiť ich pohybové schopnosti.',
    'aboutme.expertise': 'Moja expertíza',
    'aboutme.cert.title': 'SM Systém certifikáty',
    'aboutme.cert.1': 'Úvod do Metodiky SM-Systému',
    'aboutme.cert.2': 'Bedrová a hrudná chrbtica',
    'aboutme.cert.3': 'Skolióza',
    'aboutme.cert.4': 'SM Systém Šport',
    'aboutme.cert.5': 'Svalové reťazce',
    'aboutme.exp.title': 'Skúsenosti',
    'aboutme.exp.1': 'Skúsenosti v praxi',
    'aboutme.exp.2': 'Spokojnosť klientov',
    'aboutme.exp.3': 'Individuálny prístup ku každému klientovi',
    'aboutme.teachers': 'Moje Lektorky',
    'aboutme.approach': 'Môj prístup',
    'aboutme.approach.expert': 'Odborný prístup',
    'aboutme.approach.expert.desc': 'Kombinujem najnovšie poznatky z fyzioterapie s overenou metódou SPS pre maximálnu efektivitu liečby.',
    'aboutme.approach.individual': 'Individuálna starostlivosť',
    'aboutme.approach.individual.desc': 'Ku každému klientovi pristupujem individuálne, s ohľadom na jeho špecifické potreby a zdravotný stav.',
    'aboutme.approach.results': 'Dlhodobé výsledky',
    'aboutme.approach.results.desc': 'Zameriavam sa nielen na okamžitú úľavu, ale hlavne na dlhodobé riešenie problémov s pohybovým aparátom.',
    'aboutme.cta': 'Začnime spolu pracovať na vašom zdraví',
    
    // Services Page
    'services.title': 'Tréningy, ktoré ponúkam',
    'services.subtitle': 'Zlepšite svoje zdravie a pohyb s individuálnym prístupom',
    'services.individual.title': 'Individuálny tréning',
    'services.individual.desc': 'Pri tomto tréningu sa vytvára videodokumentácia pre klienta ako pomôcka na domáce cvičenie. Každé video je určené výhradne pre konkrétneho klienta a nesmie byť ďalej šírené.',
    'services.individual.benefit1': 'Osobný prístup a diagnostika',
    'services.individual.benefit2': 'Cvičenia na mieru',
    'services.individual.benefit3': 'Pravidelné hodnotenie progresu',
    'services.individual.benefit4': 'Domáci cvičebný plán',
    'services.individual.benefit5': 'Pri tomto tréningu sa vytvára videodokumentácia pre klienta ako pomôcka na domáce cvičenie. Každé video je určené výhradne pre konkrétneho klienta a nesmie byť ďalej šírené.',
    'services.group.title': 'Skupinový tréning',
    'services.group.desc': 'Malý počet účastníkov, cvičenia pre pokročilých klientov.',
    'services.group.benefit1': 'Maximálne 6 účastníkov',
    'services.group.benefit2': 'Vzájomná motivácia',
    'services.group.benefit3': 'Cenovo výhodné',
    'services.group.benefit4': 'Pravidelné termíny',
    'services.sport.title': 'Športový tréning',
    'services.sport.desc': 'Tréning určený pre športovcov a aktívnych ľudí, ktorí chcú zlepšiť svoju kondíciu, silu a flexibilitu. Zohľadňuje individuálne potreby a typ športu.',
    'services.sport.benefit1': 'Zvýšenie výkonnosti',
    'services.sport.benefit2': 'Prevencia zranení',
    'services.sport.benefit3': 'Zlepšenie mobility a stability',
    'services.sport.benefit4': 'Cielené cvičenia pre konkrétne športy',
    'services.massage.title': 'Masáže - Manuálne Techniky',
    'services.massage.desc': 'Manuálne techniky na uvoľnenie svalov, fascií a stresu.',
    'services.massage.benefit1': 'Uvoľnenie svalového napätia',
    'services.massage.benefit2': 'Zlepšenie cirkulácie',
    'services.massage.benefit3': 'Odstránenie bolesti',
    'services.massage.benefit4': 'Relaxácia a regenerácia',
    'services.equipment': 'Cvičebné pomôcky',
    'services.equipment.desc': 'Pomôcky, ktoré používame počas cvičenia a môžete si ich zakúpiť na mieste',
    'services.elastic.title': 'Elastické lano',
    'services.elastic.desc': 'Základná pomôcka pre cvičenie Spirálnej Stabilizácie. Vhodná pre začiatočníkov aj pokročilých.',
    'services.sport.elastic.title': 'Športové elastické lano',
    'services.sport.elastic.desc': 'Elastické lano určené pre intenzívnejší tréning a športové využitie.',
    'services.pad.title': 'Balančná podložka PROFI',
    'services.pad.desc': 'Stabilizačná pomôcka na rozvoj rovnováhy a aktiváciu hlbokého stabilizačného systému.',
    'services.rod.title': 'Oporná tyč',
    'services.rod.desc': 'Slúži na správne vedenie pohybu a udržiavanie rovnováhy počas cvičenia.',
    'services.pass.title': 'Permanentka',
    'services.pass.desc': 'Permanentka na 6 vstupov + 1 zadarmo, ideálna pre pravidelný tréning SM Systému.',
    'services.voucher.title': 'Darčekový Poukaz',
    'services.voucher.desc': 'Darčekový poukaz na cvičenia SM Systém – praktický darček pre zdravie blízkych.',
    'services.cta': 'Neviete, ktorá služba je pre vás vhodná?',
    'services.cta.desc': 'Zavolajte mi a pomôžem vám vybrať najvhodnejšiu formu terapie.',
    
    // SM System Page
    'smsystem.hero.title': 'Čo je to Špirálna stabilizácia - SM systém?',
    'smsystem.hero.subtitle': 'Špirálová stabilizácia spája rehabilitačnú liečbu s prevenciou, regeneráciou a kondičným a výkonnostným tréningom s použitím jediného metodického postupu – túto kombináciu neposkytuje žiadna iná pohybová metóda.',
    'smsystem.benefits.title': 'Prečo práve Špirálna stabilizácia SM systém?',
    'smsystem.benefits.subtitle': 'Špirálna stabilizácia SM systém ponúka unikátne výhody oproti bežným rehabilitačným metódam',
    'smsystem.benefit1': 'Odstraňuje bolesti chrbta',
    'smsystem.benefit1.desc': 'Efektívne zmierňuje a eliminuje chronické bolesti chrbta pomocou cielenej rehabilitácie.',
    'smsystem.benefit2': 'Prevencia skoliózy a hernie disku',
    'smsystem.benefit2.desc': 'Predchádza závažným problémom chrbtice a pomáha pri existujúcich diagnózach.',
    'smsystem.benefit3': 'Zlepšuje držanie tela',
    'smsystem.benefit3.desc': 'Podporuje správne držanie tela a zlepšuje celkovú telesnú koordináciu.',
    'smsystem.benefit4': 'Regenerácia po zraneniach',
    'smsystem.benefit4.desc': 'Urýchľuje proces hojenia a obnovuje správnu funkciu pohybového aparátu.',
    'smsystem.benefit5': 'Pre všetky vekové kategórie',
    'smsystem.benefit5.desc': 'Cvičenia sú prispôsobiteľné pre každého, od detí až po seniorov.',
    'smsystem.benefit6': 'Efektívny pre športovcov',
    'smsystem.benefit6.desc': 'Zlepšuje výkonnosť a predchádza športovým zraneniam.',
    'smsystem.benefits.main.title': 'Výhody Špirálnej stabilizácie SM systém',
    'smsystem.benefits.main.subtitle': 'Komplexný prístup k zdraviu chrbtice s dokázanými výsledkami',
    'smsystem.benefits.summary.title': 'Prečo si vybrať SM Systém?',
    'smsystem.benefits.summary.text': 'SM Systém kombinuje rehabilitáciu, prevenciu a kondičný tréning do jednej efektívnej metódy. Vhodný pre všetky vekové kategórie a úrovne fyzickej kondície.',
    'smsystem.principles.title': 'Princípy špirálovej stabilizácie',
    'smsystem.principles.subtitle': 'Kľúčové princípy, ktoré robia Špirálnu stabilizáciu SM systém efektívnou',
    'smsystem.principle1': 'Vertikálna os',
    'smsystem.principle1.desc': 'Zabezpečuje správne držanie tela a optimálne zaťaženie chrbtice.',
    'smsystem.principle2': 'Svalová rovnováha',
    'smsystem.principle2.desc': 'Vyrovnáva dysbalancie v trupe a končatinách.',
    'smsystem.principle3': 'Rozsah pohybu',
    'smsystem.principle3.desc': 'Zlepšuje flexibilitu a mobilitu celého tela.',
    'smsystem.principle4': 'Špirálna stabilizácia',
    'smsystem.principle4.desc': 'Aktivuje správne svalové reťazce na podporu chrbtice.',
    'smsystem.gallery.title': 'Ako to vyzerá na tréningu',
    'smsystem.gallery.subtitle': 'Nahliadnite do priebehu našich tréningov',
    'smsystem.cta': 'Začnite so Špirálnou stabilizáciou SM systém ešte dnes!',
    
    // Diagnoses Page
    'diagnosespage.title': 'Diagnózy a Liečba',
    'diagnosespage.subtitle': 'Efektívna terapia pre problémy chrbtice, kĺbov a pohybového aparátu',
    'diagnosespage.intro': 'Špirálna stabilizácia chrbtice (SPS) pomáha pri mnohých zdravotných problémoch – od bolesti chrbtice, cez skoliózu až po neurologické poruchy. Vyberte si kategóriu nižšie a zistite, ako vám viem pomôcť.',
    'diagnosespage.cta': 'Máte podobné zdravotné problémy? Zavolajte mi!',
    
    // Diagnoses categories
    'diagnoses.categories.spine': 'Problémy chrbtice',
    'diagnoses.categories.joints': 'Problémy kĺbov',
    'diagnoses.categories.neuro': 'Neurologické poruchy',
    'diagnoses.categories.metabolic': 'Metabolické ochorenia',
    
    // Individual diagnoses
    'diagnosis.skolioza.title': 'Skolióza',
    'diagnosis.skolioza.subtitle': 'Zakrivenie chrbtice, ktoré ovplyvňuje držanie tela',
    'diagnosis.hernia.title': 'Hernia disku',
    'diagnosis.hernia.subtitle': 'Poškodenie medzistavcovej platničky s tlakom na nervy',
    'diagnosis.stenoza.title': 'Spinálna stenóza',
    'diagnosis.stenoza.subtitle': 'Zúženie miechového kanála s tlakom na nervy',
    'diagnosis.hyperlordoza.title': 'Hyperlordóza / Hyperkyfóza',
    'diagnosis.hyperlordoza.subtitle': 'Nadmerné zakrivenie chrbtice v predozadnom smere',
    'diagnosis.spondylolisteza.title': 'Spondylolistéza',
    'diagnosis.spondylolisteza.subtitle': 'Posun stavca voči susednému stavcu',
    'diagnosis.scheuermann.title': 'Scheuermannova choroba',
    'diagnosis.scheuermann.subtitle': 'Juvenilná kyfóza spôsobujúca hrbatenie',
    
    // Diagnosis page UI
    'diagnosis.symptoms': 'Príznaky',
    'diagnosis.treatment': 'Liečba',
    'diagnosis.interactive.symptoms': 'Interaktívna sekcia – Skontrolujte si príznaky',
    'diagnosis.recommendation': 'Zaškrtli ste {count} príznaky. Odporúčame absolvovať diagnostiku.',
    'diagnosis.treatment.title': 'Liečba tohto problému',
    'diagnosis.no.info': 'Nie sú k dispozícii žiadne informácie pre túto sekciu.',
    'diagnosis.book.consultation': 'Rezervovať konzultáciu',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Me',
    'nav.services': 'Trainings',
    'nav.system': 'SM System',
    'nav.diagnoses': 'Diagnoses & Treatment',
    
    // Hero section
    'hero.title1': 'Spiral Stabilization',
    'hero.title2': 'SM - System Čadca',
    'hero.subtitle': 'Unique rehabilitation method for back pain, cervical spine, lumbar region, scoliosis and disc herniation',
    
    // Why SPS section
    'why.title': 'Why choose Spiral Stabilization (SPS)?',
    'why.intro': 'Spiral stabilization of the spine (SPS) is a unique method that helps restore proper posture, reduce back pain and strengthen the muscular corset.',
    'why.benefit1.title': 'Improves posture',
    'why.benefit1.desc': 'Helps align the spine and stabilize the body.',
    'why.benefit2.title': 'Eliminates back pain',
    'why.benefit2.desc': 'Relieves back and joint pain naturally.',
    'why.benefit3.title': 'Prevention and rehabilitation',
    'why.benefit3.desc': 'Used for both treatment and prevention of spinal problems.',
    'why.benefit4.title': 'Suitable for everyone',
    'why.benefit4.desc': 'Suitable for children, adults, seniors and athletes.',
    'why.diagnoses.btn': 'Diagnoses & Treatment',
    'why.system.btn': 'SM System',
    
    // About Me section
    'about.title': 'About Me',
    'about.subtitle': 'Certified SPS Specialist – SM System',
    'about.name': 'My name is',
    'about.intro': 'and I am a certified specialist in the Spiral Stabilization of the Spine method (SPS – SM System).',
    'about.description': 'I help people get rid of back pain, improve posture and restore movement balance. I believe that the right approach to movement can change the quality of life, which is why I approach each client',
    'about.individual': 'individually',
    'about.more.btn': 'More About Me',
    
    // Trainings section
    'trainings.title': 'Trainings',
    'trainings.subtitle': 'Individual approach for your needs',
    'trainings.individual.title': 'Individual Training',
    'trainings.individual.desc': 'I offer individual trainings adapted to your needs, suitable for all age categories.',
    'trainings.individual.benefit1': 'Personal approach',
    'trainings.individual.benefit2': 'State diagnostics',
    'trainings.individual.benefit3': 'Individual exercise plan',
    'trainings.group.title': 'Group Training',
    'trainings.group.desc': 'Join our group exercises after completing 4-5 individual trainings.',
    'trainings.group.benefit1': 'Motivating environment',
    'trainings.group.benefit2': 'Regular sessions',
    'trainings.group.benefit3': 'Cost-effective',
    'trainings.book.btn': 'Book Now',
    'trainings.all.btn': 'All Trainings',
    
    // Diagnoses section
    'diagnoses.title': 'Diagnoses & Treatment',
    'diagnoses.intro': 'Spiral stabilization of the spine (SPS) helps with back pain, joint regeneration and movement stability. From scoliosis to neurological disorders – discover how I can help you.',
    'diagnoses.spine.title': 'Spine Problems',
    'diagnoses.spine.detail1': 'Scoliosis and spine deformities',
    'diagnoses.spine.detail2': 'Disc herniation and disc protrusion',
    'diagnoses.spine.detail3': 'Spinal stenosis',
    'diagnoses.spine.detail4': 'Chronic back pain',
    'diagnoses.joints.title': 'Joint Pain & Walking',
    'diagnoses.joints.detail1': 'Joint arthrosis',
    'diagnoses.joints.detail2': 'Walking problems',
    'diagnoses.joints.detail3': 'Joint instability',
    'diagnoses.joints.detail4': 'Post-traumatic conditions',
    'diagnoses.neuro.title': 'Neurological Disorders',
    'diagnoses.neuro.detail1': 'Migraines and headaches',
    'diagnoses.neuro.detail2': 'Multiple sclerosis',
    'diagnoses.neuro.detail3': 'Chronic fatigue',
    'diagnoses.neuro.detail4': 'Vertebrogenic disorders',
    'diagnoses.more.btn': 'Learn More',
    
    // Work preview section
    'work.title': 'See more of my work',
    
    // Partners section
    'partners.title': 'Our Friends',
    'partners.spiralista.desc': 'Our friends from Spiral Stabilization, who with the same enthusiasm spread the Spiral Stabilization method and help people live without pain.',
    'partners.jablkovy.desc': 'Slovak growers who bring healthy fruit products directly from nature',
    'partners.outro': 'We are glad that we can share a common path to health and support each other.',
    
    // Contact section
    'contact.title': 'CONTACT US',
    'contact.heading': 'Schedule a consultation',
    'contact.intro': 'Do you have questions or need advice? Contact us and take the first step towards a healthy spine.',
    'contact.email': 'Email',
    'contact.form.title': 'Write to us',
    'contact.form.subtitle': 'I will respond within 24 hours',
    'contact.form.name': 'Full name',
    'contact.form.name.placeholder': 'Your name',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'your@email.com',
    'contact.form.phone': 'Phone',
    'contact.form.phone.placeholder': '+421 xxx xxx xxx',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Describe your problem or question...',
    'contact.form.send': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.form.sent': 'Message sent!',
    'contact.form.success': 'Thank you for your message!',
    'contact.form.success.desc': 'I will respond as soon as possible.',
    'contact.form.error': 'An error occurred while sending',
    'contact.form.error.desc': 'Please try again or contact us by phone.',
    'contact.form.direct': 'Or contact us directly by phone',
    
    // Footer
    'footer.stay.connected': 'Stay Connected',
    'footer.newsletter': 'Subscribe to our newsletter and get the latest information about our services.',
    'footer.email.placeholder': 'Your email',
    'footer.quick.links': 'Quick Links',
    'footer.contact': 'Contact',
    'footer.follow': 'Follow Us',
    'footer.legal': 'Legal Information',
    'footer.privacy': 'Privacy Policy',
    'footer.cookies': 'Cookies',
    'footer.terms': 'Terms of Service',
    'footer.impressum': 'Imprint',
    'footer.copyright': '© 2025 Spiral Stabilization Čadca. All rights reserved.',
    
    // Common
    'common.required': '*',
    'common.phone': '+421 948 525 380',
    'common.email': 'info@spiralnastabilizaciacadca.sk',
    'common.address': 'Čadca, Slovakia',
    'common.book.consultation': 'Book Consultation',
    'common.call.consultation': 'Call me and we will schedule a consultation',
    
    // About Me Page
    'aboutme.title': 'My journey to the SPS method',
    'aboutme.name': 'I am Ctibor Koža',
    'aboutme.subtitle': 'Specialist in Spiral Stabilization of the Spine',
    'aboutme.intro1': 'My journey to the SPS method began when I understood how important proper movement is for human health. Since my youth, I have been fascinated by how the human body works and what enormous impact rehabilitation has on quality of life.',
    'aboutme.intro2': 'I decided to dedicate myself to specialized methodologies that effectively help people get rid of pain and improve their movement abilities.',
    'aboutme.expertise': 'My expertise',
    'aboutme.cert.title': 'SM System certificates',
    'aboutme.cert.1': 'Introduction to SM-System Methodology',
    'aboutme.cert.2': 'Hip and thoracic spine',
    'aboutme.cert.3': 'Scoliosis',
    'aboutme.cert.4': 'SM System Sport',
    'aboutme.cert.5': 'Muscle chains',
    'aboutme.exp.title': 'Experience',
    'aboutme.exp.1': 'Practical experience',
    'aboutme.exp.2': 'Client satisfaction',
    'aboutme.exp.3': 'Individual approach to each client',
    'aboutme.teachers': 'My Teachers',
    'aboutme.approach': 'My approach',
    'aboutme.approach.expert': 'Professional approach',
    'aboutme.approach.expert.desc': 'I combine the latest knowledge from physiotherapy with the proven SPS method for maximum treatment effectiveness.',
    'aboutme.approach.individual': 'Individual care',
    'aboutme.approach.individual.desc': 'I approach each client individually, taking into account their specific needs and health condition.',
    'aboutme.approach.results': 'Long-term results',
    'aboutme.approach.results.desc': 'I focus not only on immediate relief, but mainly on long-term solutions to musculoskeletal problems.',
    'aboutme.cta': 'Let\'s start working together on your health',
    
    // Services Page
    'services.title': 'Training I offer',
    'services.subtitle': 'Improve your health and movement with an individual approach',
    'services.individual.title': 'Individual training',
    'services.individual.desc': 'Customized training according to client diagnosis.',
    'services.individual.benefit1': 'Personal approach and diagnostics',
    'services.individual.benefit2': 'Tailored exercises',
    'services.individual.benefit3': 'Regular progress evaluation',
    'services.individual.benefit4': 'Home exercise plan',
    'services.individual.benefit5': 'Video documentation is created during this training for the client as an aid for home exercise. Each video is intended exclusively for a specific client and must not be further distributed.',
    'services.group.title': 'Group training',
    'services.group.desc': 'Small number of participants, exercises for advanced clients.',
    'services.group.benefit1': 'Maximum 6 participants',
    'services.group.benefit2': 'Mutual motivation',
    'services.group.benefit3': 'Cost-effective',
    'services.group.benefit4': 'Regular sessions',
    'services.sport.title': 'Sports training',
    'services.sport.desc': 'Training designed for athletes and active people who want to improve their fitness, strength and flexibility. Takes into account individual needs and type of sport.',
    'services.sport.benefit1': 'Performance enhancement',
    'services.sport.benefit2': 'Injury prevention',
    'services.sport.benefit3': 'Improved mobility and stability',
    'services.sport.benefit4': 'Targeted exercises for specific sports',
    'services.massage.title': 'Massages',
    'services.massage.desc': 'Manual techniques for releasing muscles, fascia and stress.',
    'services.massage.benefit1': 'Muscle tension relief',
    'services.massage.benefit2': 'Improved circulation',
    'services.massage.benefit3': 'Pain elimination',
    'services.massage.benefit4': 'Relaxation and regeneration',
    'services.equipment': 'Exercise equipment',
    'services.equipment.desc': 'Equipment we use during exercise and you can purchase on site',
    'services.elastic.title': 'Elastic rope',
    'services.elastic.desc': 'Basic tool for Spiral Stabilization exercise. Suitable for beginners and advanced.',
    'services.sport.elastic.title': 'Sports elastic rope',
    'services.sport.elastic.desc': 'Elastic rope designed for more intensive training and sports use.',
    'services.pad.title': 'Balance pad PROFI',
    'services.pad.desc': 'Stabilization aid for balance development and deep stabilization system activation.',
    'services.rod.title': 'Support rod',
    'services.rod.desc': 'Used for proper movement guidance and maintaining balance during exercise.',
    'services.pass.title': 'Season pass',
    'services.pass.desc': 'Season pass for 6 entries + 1 free, ideal for regular SM System training.',
    'services.voucher.title': 'Gift Voucher',
    'services.voucher.desc': 'Gift voucher for SM System exercises – a practical gift for the health of loved ones.',
    'services.cta': 'Don\'t know which service is right for you?',
    'services.cta.desc': 'Call me and I will help you choose the most suitable form of therapy.',
    
    // SM System Page
    'smsystem.hero.title': 'What is Spiral Stabilization - SM system?',
    'smsystem.hero.subtitle': 'Spiral stabilization combines rehabilitation treatment with prevention, regeneration and fitness and performance training using a single methodological approach – this combination is not provided by any other movement method.',
    'smsystem.benefits.title': 'Why choose Spiral Stabilization SM system?',
    'smsystem.benefits.subtitle': 'Spiral Stabilization SM system offers unique advantages over conventional rehabilitation methods',
    'smsystem.benefit1': 'Eliminates back pain',
    'smsystem.benefit1.desc': 'Effectively relieves and eliminates chronic back pain through targeted rehabilitation.',
    'smsystem.benefit2': 'Prevention of scoliosis and disc herniation',
    'smsystem.benefit2.desc': 'Prevents serious spinal problems and helps with existing diagnoses.',
    'smsystem.benefit3': 'Improves posture',
    'smsystem.benefit3.desc': 'Supports proper posture and improves overall body coordination.',
    'smsystem.benefit4': 'Recovery after injuries',
    'smsystem.benefit4.desc': 'Accelerates the healing process and restores proper function of the musculoskeletal system.',
    'smsystem.benefit5': 'For all age categories',
    'smsystem.benefit5.desc': 'Exercises are adaptable for everyone, from children to seniors.',
    'smsystem.benefit6': 'Effective for athletes',
    'smsystem.benefit6.desc': 'Improves performance and prevents sports injuries.',
    'smsystem.benefits.main.title': 'Benefits of Spiral Stabilization SM system',
    'smsystem.benefits.main.subtitle': 'Comprehensive approach to spinal health with proven results',
    'smsystem.benefits.summary.title': 'Why choose SM System?',
    'smsystem.benefits.summary.text': 'SM System combines rehabilitation, prevention and fitness training into one effective method. Suitable for all age categories and fitness levels.',
    'smsystem.principles.title': 'Principles of spiral stabilization',
    'smsystem.principles.subtitle': 'Key principles that make Spiral Stabilization SM system effective',
    'smsystem.principle1': 'Vertical axis',
    'smsystem.principle1.desc': 'Ensures proper posture and optimal spinal loading.',
    'smsystem.principle2': 'Muscle balance',
    'smsystem.principle2.desc': 'Balances imbalances in the trunk and limbs.',
    'smsystem.principle3': 'Range of motion',
    'smsystem.principle3.desc': 'Improves flexibility and mobility of the whole body.',
    'smsystem.principle4': 'Spiral stabilization',
    'smsystem.principle4.desc': 'Activates proper muscle chains to support the spine.',
    'smsystem.gallery.title': 'What training looks like',
    'smsystem.gallery.subtitle': 'Take a look at our training sessions',
    'smsystem.cta': 'Start with Spiral Stabilization SM system today!',
    
    // Diagnoses Page
    'diagnosespage.title': 'Diagnoses & Treatment',
    'diagnosespage.subtitle': 'Effective therapy for spine, joint and musculoskeletal problems',
    'diagnosespage.intro': 'Spiral stabilization of the spine (SPS) helps with many health problems – from back pain, through scoliosis to neurological disorders. Choose a category below and find out how I can help you.',
    'diagnosespage.cta': 'Do you have similar health problems? Call me!',
    
    // Diagnoses categories
    'diagnoses.categories.spine': 'Spine Problems',
    'diagnoses.categories.joints': 'Joint Problems',
    'diagnoses.categories.neuro': 'Neurological Disorders',
    'diagnoses.categories.metabolic': 'Metabolic Diseases',
    
    // Individual diagnoses
    'diagnosis.skolioza.title': 'Scoliosis',
    'diagnosis.skolioza.subtitle': 'Spinal curvature affecting body posture',
    'diagnosis.hernia.title': 'Disc Herniation',
    'diagnosis.hernia.subtitle': 'Intervertebral disc damage with nerve pressure',
    'diagnosis.stenoza.title': 'Spinal Stenosis',
    'diagnosis.stenoza.subtitle': 'Narrowing of the spinal canal with nerve pressure',
    'diagnosis.hyperlordoza.title': 'Hyperlordosis / Hyperkyphosis',
    'diagnosis.hyperlordoza.subtitle': 'Excessive spinal curvature in anteroposterior direction',
    'diagnosis.spondylolisteza.title': 'Spondylolisthesis',
    'diagnosis.spondylolisteza.subtitle': 'Vertebral shift relative to adjacent vertebra',
    'diagnosis.scheuermann.title': 'Scheuermann\'s Disease',
    'diagnosis.scheuermann.subtitle': 'Juvenile kyphosis causing hunching',
    
    // Diagnosis page UI
    'diagnosis.symptoms': 'Symptoms',
    'diagnosis.treatment': 'Treatment',
    'diagnosis.interactive.symptoms': 'Interactive section – Check your symptoms',
    'diagnosis.recommendation': 'You have checked {count} symptoms. We recommend undergoing diagnostics.',
    'diagnosis.treatment.title': 'Treatment for this condition',
    'diagnosis.no.info': 'No information available for this section.',
    'diagnosis.book.consultation': 'Book Consultation',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('sk');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'sk' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};