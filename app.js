/*
Co je za úkol v tomto projektu:

1) Do prvku s id="recepty" vygeneruj z dat seznam všech receptů z naší "databáze".
HTML vzor, jak vygenerovaný recept vypadá, je zakomentovaný v index.html.

2) Doplň hledání - v hlavičce odkomentuj pole pro hledání. Pri kliknutí na tlačítko Hledat
by se měl seznam receptů vyfiltrovat podle hledaného slova.

3) Doplň filtrovanání receptů podle kategorie.

4) Doplň řazení receptů podle hodnocení.

5) Na recepty v seznamu by mělo jít kliknout a na pravé polovině, se objeví detail receptu.
Doplň patričné údaje receptu do HTML prvků s ID recept-foto, recept-kategorie,
recept-hodnoceni, recept-nazev, recept-popis.

6) Poslední vybraný recept ulož do Local Storage, aby se při novém otevření aplikace načetl.
*/
var kontejner = document.querySelector('.kontejner');

generovaniReceptu();

function generovaniReceptu() {
    for(i = 0; i < recepty.length; i++) {
        let recept = document.createElement('div');
        recept.className = 'recept';

        let receptObrazek = document.createElement('div');
        receptObrazek.className = 'recept-obrazek';

        let obrazek = document.createElement('img');
        obrazek.src = recepty[i].img;

        let receptInfo = document.createElement('div');
        receptInfo.className = 'recept-info';

        let nazev = document.createElement('h3');
        nazev.textContent = recepty[i].nadpis;

        kontejner.appendChild(recept);
        recept.appendChild(receptObrazek);
        receptObrazek.appendChild(obrazek);
        recept.appendChild(receptInfo);
        receptInfo.appendChild(nazev);
    }
}