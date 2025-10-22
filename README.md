#Reflektion over opgaven

Jeg synes opgaven har været god at arbejde med, da der har været en masse forskellige elementer man kunne prøve af, uden samtidigt at skulle være for nervøs omkring selve designet.

Jeg oplevede at Index siden tog betydeligt længere tid at udføre end de andre sider.
Det skyldes i høj grad at jeg brugte tid på at få Custom properties to at fungere og sidde godt i hånden, mens jeg lavede index siden.
Det ses blandt andet i nogle af de tidlige komponenter der blandt andet optræder på indexs-siden ikke konsistent gør brug af mine custom properties.
Det har jeg været meget mere konsistent med i de senere komponenter.

Det blev også først klart hvordan jeg skulle adressere elementer så som de ornamentale elementer omkring mange af billederne på siden.

##Ornamentale elementer

Jeg endte med en løsning der var hurtig og let at bruge, og som går igen ved alle tilfælde.
Jeg har gjort brug af pseudo-elementerne ::before og ::after, til at tilføje hhv det guld mønster og den grønne boks.
Og med nogenlunde ens styling, ud over selve placeringen i forhold til dens relative parent position, så har det være let og hurtigt at genbruge min kode og på den måde streamline min process en smule.

Billede her

##Struktur og markup

Ligeså har jeg noteret mig hvordan jeg godt kan lide at bygge mit site op i min HTML Markup.
Det er nemlig klart at jeg fra Case Study siden og fremefter gør brug af en slags wrapper og inner metode, som tillader at jeg har min ønskede margin på indholdet på selve siden.

Jeg overvejede at holde konsistens ved at tilføje en custom margin i mit globale css, men kom fra det, da jeg opdagede flere smarte features ved at holde wrapper og inner seperat på den måde.
Det eneste negative jeg dog har at sige ved min specifikke tilgang er at der går lidt “Divititis” i den, og jeg derfor nok ikke følger det helt semantiske HTML.

##Udfordringer

Jeg har haft en del småudfordringer løbende, som har rykket min tidshorisont betydeligt.
Det betyder også at jeg mod slutningen har besluttet mig for ikke længere at fokusere på at gøre sitet fuldstændig responsivt.
Det ser derfor både sjovt og rigtig skidt ud i det områder hvor jeg har kæmpet med responsiviteten eller helt har udeladt det.

Jeg har istedet fokuseret på at lære mig selv om brugen af dynamisk kode i den udstrækning det er brugt i opgaven her.
Jeg havde især problemer med at forstå og style CaseStudyArticle.astro komponenten, da den var betydeligt anderledes end den dynamiske kode jeg selv har siddet med i denne opgave.

##Afslutning

Alt i alt synes jeg det har været spændende og udfordrende.
Til fremtiden vil jeg forsøg at planlægge min tid lidt bedre så jeg ikke bare når kravene men måske får tid til at udforske og udvidde min horizont med sjove funktionaliteter eller fede sroll funktioner osv.
