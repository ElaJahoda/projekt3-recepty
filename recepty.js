const recepty = [
  { nadpis: 'Ovocný tvarohový dort',
    popis: 'Postup přípravy: Cukr promícháme s tvarohy. Smetanu vyšleháme do tuha a vmícháme do oslazeného tvarohu, přidáme ovoce a želatinový ztužovač, připravený podle návodu na obale. Dortovou formu nebo mísu vyložíme piškoty. Potřeme polovinou tvarohové náplně, opět poklademe piškoty a potřeme zbytkem náplně. Dozdobíme piškoty, ovocem, případně šlehačkou. Dáme přes noc do ledničky ztuhnout.',
    hodnoceni: 4.4,
    kategorie: 'Dezert',
    stitek: 'dezert',
    img: 'https://images.pexels.com/photos/315707/pexels-photo-315707.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  { nadpis: 'Těstoviny s pestem',
    popis: 'Těstoviny připravíme dle návodu na obale. Postup na pesto je následující: Na středním ohni v pánvi orestujeme piniová semínka nasucho dozlatova a přendáme je do studené misky. Bazalku pokrájíme. Do vyšší úzké nádoby vložíme pokrájenou bazalku, česnek, lžíci piniových oříšků, parmezán, pecorino a olivový olej a směs rozmixujeme ponorným mixérem. Osolíme a opepříme.',
    hodnoceni: 4.2,
    kategorie: 'Hlavní jídlo',
    stitek: 'hlavniJidlo',
    img: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c9443baefd581d4e532b6d4f1e7879be&auto=format&fit=crop&w=1350&q=80'
  },
  { nadpis: 'Palačinka s medem a oříšky',
    popis: 'Z hladké mouky, mléka, vajec, oleje, cukru a špetky soli umícháme palačinkové těsto, které necháme chvíli uležet. Vylouskané ořechy umeleme najemno. Me dpodle potřeby nahřejeme, aby měl tekutou konzistenci. Na pánvi upečeme palačinky a hotové hned potřeme medem, hustě posypeme ořechy a složíme do šátečků. Podáváme ozdobené kysanou smetanou. Ořechy lehce nasekáte ručním mixérem pomocí sekacího nástavce. Nezapomeňte však po chvilkách mixér zastavovat. Při přehřátí ořechy hořknou! ',
    hodnoceni: 3.6,
    kategorie: 'Dezert',
    stitek: 'dezert',
    img: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=54182d2977056d28bd299799b8428fa6&auto=format&fit=crop&w=634&q=80'
  },
  { nadpis: 'Chléb s avokádem a vajíčkem',
    popis: 'Chleba jsem namazala jogurtovým žervé, avokádo jsem pomocí lžíce zbavila slupky, nakrájela na tenký plátky, pár plátků jsem dala na každej chleba a zakápla jsem ho šťávou z limetky. A teď vejce. Chce to trošku cviku. Přiznávám, že s tím sama občas bojuju a pokaždý se snažim zkoušet jinej systém, abych přišla na ten nejlepší. Každopádně jsem do hrnce dala vařit vodu (tak, aby tam bylo aspoň 10 cm vody a nalila jsem do ní ocet. Když začala voda trošku vařit (né úplně, ale začaly se objevovat malý bublinky na dně hrnce), rozklepla jsem si vajíčko do menší skleničky, v hrnci jsem pomocí lžičky vytvořila malej vír a vlila do něj vajíčko. To se díky víru obalilo bílkem. Vařila jsem ho čtyři minuty, aby žloutek byl po rozkrojení tekutej. Nebudu říkat, co všechno se dá u tohodle vajíčka pokazit, protože mi přijde, že je to všechno a vlastně nic. Když jsem ho dělala poprvý, z pěti se mi nepovedlo ani jedno. Postupem času jsem si na to našla ale správnej odhad a povede se mi už téměř vždycky. Doporučuju si do Googlu zadat ztracený vejce a podívat se na různý návody. No a pokud si na ztracený vajíčko netroufáte, udělejte si k tomu volský oko a je to. Hotový vajíčko jsem pak položila na chleby, osolila, opepřila  a vychutnala jsem si krásnej rozteklej žloutek. Tak šup do kuchyně!',
    hodnoceni: 4.2,
    kategorie: 'Snídaně',
    stitek: 'snidane',
    img: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  { nadpis: 'Čokoládové brownie',
    popis: 'Čokoládu rozpustíme s máslem ve vodní lázni. Vajíčka šleháme s cukrem do hladka cca 2-3 min., přidáme čokoládovou hmotu a promícháme (už nešleháme). Přidáme prosátou mouku s práškem do pečiva a ještě jednou důkladně promícháme. Hmotu nalejeme do vymaštěného pekáčku (já používám 22x22 cm) a pečeme na prostřední příčce trouby cca 35 minut (170 °C). Dobrůtka je hotová, jakmile začne praskat na povrchu. Podáváme se šlehačkou, nebo vanilkovou zmrzlinou.',
    hodnoceni: 4.9,
    kategorie: 'Dezert',
    stitek: 'dezert',
    img: 'https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  { nadpis: 'Vajíčková omeleta se špenátem',
    popis: 'Rozšleháme vajíčka, přidáme k nim nakrájenou šunku na kostičky, zlehka osolíme, opeříme. Poté vlijeme na rozpálenou pánev s trochou přepuštěného másla. Nahoru poházíme lístky špenátu a necháme chvíli opékat. Jakmile je zespoda omeleta dozlatova, srolujeme ji a ještě necháme chvíli na pánvi. Hotovou omeletu posypeme parmazánem a můžeme si pochutnávat.',
    hodnoceni: 4.2,
    kategorie: 'Snídaně',
    stitek: 'snidane',
    img: 'https://images.unsplash.com/photo-1494597706938-de2cd7341979?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6dc5376ce585ce0df0d44232b9bab53c&auto=format&fit=crop&w=1379&q=80'
  },
  { nadpis: 'Kuřecí salát',
    popis: 'Do majonézy vmícháme hořčici, přidáme hlávkový salát nakrájený na nudličky, na kostičky nakrájené maso z kuřete (bez kůže), nakrájené rajčata a vše zlehka, ale důkladně promícháme. Salát urovnáme na mísu a ozdobíme kolečky salátové okurky a vajec.',
    hodnoceni: 4.7,
    kategorie: 'Hlavní jídlo',
    stitek: 'hlavniJidlo',
    img: 'https://images.pexels.com/photos/33406/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=650&w=940'
  },
  { nadpis: 'Sýrová pizza',
    popis: 'Do vlažné vody si rozdrobíme droždí, přisypeme cukr a necháme vzejít. Přidáme mouku se solí, olej a vykynutý kvásek. Těsto velice dobře zpracujeme na pomoučeném vále. RADA: Jak připravit domácí pizzu? Vložíme do hrnce, přikryjeme utěrkou a necháme v teple hodinu vykynout. Rozválíme a vytvarujeme do tvaru kolečka, popř. na plech. Natřeme smetanou ke šlehání a posypeme jednotlivými sýry. Na závěr posypeme lehce oregánem a dáme do trouby na 250°C na cca 10-15 minut.',
    hodnoceni: 4.7,
    kategorie: 'Hlavní jídlo',
    stitek: 'hlavniJidlo',
    img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-0.3.5&s=8695cc99c49c956556f7411faf6df8b0&auto=format&fit=crop&w=1350&q=80'
  },
  { nadpis: 'Kuřecí roláda',
    popis: 'Kuřecí prsa naklepejte a z obou stran osolte, opepřete a posypte grilovacím kořením. Na pracovní plochu si položte potravinářskou fólii a vyskládejte na ni těsně vedle sebe kuřecí prsa, aby vytvořila velký plát. Maso by se nemělo příliš překrývat a zároveň se snažte vyvarovat prázdných míst. Potom maso potřete Dijonskou hořčicí. Špenát spařte horkou vodou a důkladně vyždímejte. Máslo rozpusťte ve velké pánvi, přidejte plátky česneku a ve chvíli, kdy zavoní, vmíchejte špenát. Podle chuti osolte a opepřete. Sejměte z plotny a vmíchejte fetu a mozzarellu, obojí na kostičky. Směs dejte na kuřecí maso, navrch posypte bazalkou a zarolujte. Svažte provázkem, potřete olejem a v troubě vyhřáté na 180 °C pečte asi 45 minut.',
    hodnoceni: 4.6,
    kategorie: 'Hlavní jídlo',
    stitek: 'hlavniJidlo',
    img: 'https://images.unsplash.com/photo-1517609948086-6a03114ae1af?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=24e11e05a26a3b992c8469426a628a90&auto=format&fit=crop&w=675&q=80'
  },
  { nadpis: 'Borůvkovo-tvarohový dezert',
    popis: 'Vyšleháme smetanu, pak přidáme vanilkový cukr, tvarohy a třtinový cukr a vše důkladně zašleháme do hladkého krému. Čerstvé nebo mražené ovoce dáme do hrnce a necháme rozvařit, osladíme a zahustíme kukuřičným škrobem rozmíchaným s trochou vody, důkladně mícháme a ještě chvíli necháme provařit. Pak dáme vychladnout. Mističky naplníme krémem a navrch přelijeme ovocným rozvarem. Posypeme plátky mandlí, případně dozdobíme lyofilizovanými jahodami. Necháme vychladit a uchováváme v ledničce.',
    hodnoceni: 3.8,
    kategorie: 'Dezert',
    stitek: 'dezert',
    img: 'https://images.unsplash.com/photo-1504473089979-b1c4993a9653?ixlib=rb-0.3.5&s=a48ebf1c62105a202c421db95caa3b48&auto=format&fit=crop&w=634&q=80'
  },
  { nadpis: 'Hovězí steak',
    popis: 'Naprostým základem pro lahodný steak je kvalitní kus masa. Pro to si zajděte raději k řezníkovi, i když v poslední době se naštěstí rozšiřuje nabídka steakového masa i v supermarketech. Vyhlášené je maso z Argentiny a Uruguaye, sehnat se ale dá už i kvalitní steakové maso z Česka. Abyste měli jistotu, že hotový steak nebude vysušený a tuhý jak podrážka, chtějte vždy maso vyzrálé neboli stařené. Absolutním minimem pro zrání jsou dva týdny, pokud ale máte možnost, vyberte si to, co zrálo nejméně měsíc. Vyzrálé maso poznáte tak, že je mnohem tmavší a má barvu dohněda. Když do něj šťouchnete prstem, bude měkké a tvárné jako máslo a důlek v něm po nějakou dobu zůstane. Nezapomeňte se také informovat na původ, plemeno a stáří zvířete, ze kterého si maso kupujete. Poražený kus by neměl být starší jak dva roky. Pozor si také dejte na to, aby byl steak říznutý přes vlákno.',
    hodnoceni: 4.7,
    kategorie: 'Hlavní jídlo',
    stitek: 'hlavniJidlo',
    img: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  { nadpis: 'Tiramisu',
    popis: 'Žloutky vyšleháme s mletým cukrem a lžící horké vody do pěny. Poté přidáme mascarpone a ručně vyšleháme v hladký krém. Šlehačku vyšleháme se lžící vanilkou ovoněného moučkového cukru (nebo s 1 balíčkem vanilkového cukru). Z bílků vyšleháme sníh. Ke žloutkové směsi přidáme bílky a šlehačku a lehounce vymícháme krém. Formu vyskládáme dlouhými cukrářskými piškoty. Ty přelijeme vychladlou černou kávou smíchanou s alkoholem (rum, vodka, likér). Piškoty potřeme krémem. Můžeme zasypat kakaem. Dáme další vrstvu piškotů a opět potřeme zbylým krémem. Důkladně zasypeme kakaem. Tiramisu s mascarpone dáme do lednice alespoň na 12 hodin uležet. Je to potřeba, aby krém dobře ztuhl a držel tvar.',
    hodnoceni: 3.8,
    kategorie: 'Dezert',
    stitek: 'dezert',
    img: 'https://images.unsplash.com/photo-1502004960551-dc67f7c24cb3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9ffa9224ea62436ebb99ebf25c50be60&auto=format&fit=crop&w=1320&q=80'
  },
  { nadpis: 'Ceasar salát',
    popis: 'Jeden z nejpopulárnějších salátů na světě vymyslel Caesar Cardini, italský šéfkuchař, který vlastnil restauraci v Tiquaně v Mexiku, v době prohibice. Legenda praví, že Caesarovi jeden večer došly zásoby a musel připravit salát pro společnost při zvláštní příležitosti oslav 4. července 1924. Jiný příběh vypráví, že Caesarův bratr Alexandr připravil tento salát pro své přátele-piloty po noční službě, proto se prý původně jmenoval „Salát pilotů“. Variant, jak salát vznikl, je stejně tolik, jako způsobů jeho přípravy.',
    hodnoceni: 3.9,
    kategorie: 'Hlavní jídlo',
    stitek: 'hlavniJidlo',
    img: 'https://images.unsplash.com/photo-1512852939750-1305098529bf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a5832df503143f0eb527593cd0c5abe6&auto=format&fit=crop&w=1350&q=80'
  },
  { nadpis: 'Sladký toast s ovocem',
    popis: 'V misce smícháme vajíčka s mlékem, přidáme skořici a vanilkový cukr. Toastový chléb namočíme z obou stran a dáme ho smažit. Toast je hotový, pokud je zlato-hnědý a křupavý. Na toast dáme kávovou lžicku másla a posypeme piškovým cukrem. Podávejte s ovocem.',
    hodnoceni: 4.2,
    kategorie: 'Snídaně',
    stitek: 'snidane',
    img: 'https://images.unsplash.com/photo-1495214783159-3503fd1b572d?ixlib=rb-0.3.5&s=b2f8991c8bfaac59a8d115930d9c12cd&auto=format&fit=crop&w=1350&q=80'
  },
  { nadpis: 'Vegetariánská pizza',
    popis: 'Na těsto nejprve smícháme vodu, mouku, sůl a kypřicí prášek. Těsto vyválíme na podložce na placku a lehce posypeme moukou. Připravenou placku potřeme rajčaty z plechovky, posypeme nastrouhanými sýry podle chuti, libovolně posypeme olivami a oreganem. Vegetariánskou domácí pizzu upečeme v předehřáté troubě. Lahodnou vegetariánskou domácí pizzu hned po upečení podáváme jako chutný pokrm na stůl.',
    hodnoceni: 4.7,
    kategorie: 'Hlavní jídlo',
    stitek: 'hlavniJidlo',
    img: 'https://images.unsplash.com/photo-1516183483970-cedfa98169fa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=28a8ffb099b40dc89c12cec6a7f0a68a&auto=format&fit=crop&w=1350&q=80'
  },
  { nadpis: 'Křupavé kuře',
    popis: 'Baby kuřata očistíme a zevnitř i zvenku osolíme. Připravíme si rukolové pesto. V misce rozmixujeme rukolu s kešu oříšky a olivovým olejem dohladka. Pesto dochutíme solí a šťávou z limetky. Připravíme si nádivku. Chleba nakrájíme na kostičky. Slaninu nakrájíme nadrobno a oloupaný česnek a cibuli jemně nasekáme. Na malém množství oleje orestujeme slaninu s cibulkou a česnekem. Vychladlou směs promícháme s chlebem, 1 lžící rukolového pesta, petrželkou a žloutky. Nádivku podle chuti osolíme, opepříme a spojíme sněhem ušlehaným ze 2 bílků. Baby kuřátka naplníme nádivkou a vložíme do pekáčku vymazaného máslem. Nadívaná baby kuřátka pečeme v předehřáté troubě asi při 180 °C přibližně 45 minut. Během pečení kuřata podléváme vypečenou šťávou a vývarem. Nadívaná baby kuřátka rozdělíme na porce a podáváme s rukolovým pestem a vypečeným sosem. Vhodnou přílohou jsou brambory připravené na oblíbený způsob, třeba Bramborová kaše s chutí česneku.',
    hodnoceni: 4.3,
    kategorie: 'Hlavní jídlo',
    stitek: 'hlavniJidlo',
    img: 'https://images.unsplash.com/photo-1516684669134-de6f7c473a2a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=353c1f4206a931db97274e65329b85d8&auto=format&fit=crop&w=634&q=80'
  },
]
