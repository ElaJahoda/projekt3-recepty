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
let kontejner = document.querySelector('.kontejner');
let tlacitko = document.querySelector('button');
let hledat = document.querySelector('#hledat');
let kategorie = document.querySelector('#kategorie');
let razeni = document.querySelector('#razeni');
let receptyId = document.querySelector('.recepty');

let arrFiltrace = [];

generovaniSeznamu(recepty);

function generovaniSeznamu(pole) {
    smazaniSeznamu();
    for(i = 0; i < pole.length; i++) {
    generovaniPolozky(pole, i);
    }  
    if(localStorage.indexPolozky !== "") {
        let item = localStorage.getItem('indexPolozky');
        detailPolozky(item);}
}

function generovaniPolozky(pole, i) {
    let recept = document.createElement('div');
    recept.className = 'recept';
    let receptObrazek = document.createElement('div');
    receptObrazek.className = 'recept-obrazek';

    let obrazek = document.createElement('img');
    obrazek.src = pole[i].img;

    let receptInfo = document.createElement('div');
    receptInfo.className = 'recept-info';

    let nazev = document.createElement('h3');
    nazev.textContent = pole[i].nadpis;

    receptyId.appendChild(recept);
    recept.appendChild(receptObrazek);
    receptObrazek.appendChild(obrazek);
    recept.appendChild(receptInfo);
    receptInfo.appendChild(nazev);

    recept.addEventListener('click', () => detailPolozky(i, pole))
}

function detailPolozky(i, pole) {
    console.log(i);
    console.log(pole);
    document.querySelector('#recept-foto').src = pole[i].img;
    document.querySelector('#recept-kategorie').textContent = pole[i].kategorie;
    document.querySelector('#recept-hodnoceni').textContent = pole[i].hodnoceni;
    document.querySelector('#recept-nazev').textContent = pole[i].nadpis;
    document.querySelector('#recept-popis').textContent = pole[i].popis;     
    localStorage.clear();
    localStorage.setItem('indexPolozky', i);
}

hledat.addEventListener('change', filtrace);
kategorie.addEventListener('change', filtrace);
razeni.addEventListener('change', filtrace);

function filtrace() {
    arrFiltrace = recepty.filter((recept) => 
    recept.nadpis.toLowerCase().includes(hledat.value)
    );

    if(kategorie.value !== "") {        
        arrFiltrace = arrFiltrace.filter(
            (recept) => recept.kategorie === kategorie.value);
    }

    if(razeni.value == 2) {
        arrFiltrace = arrFiltrace.sort(function (a, b) {
        return a.hodnoceni - b.hodnoceni;
    })} 
    if(razeni.value == 1) {
        arrFiltrace = arrFiltrace.sort(function (a, b) {
        return b.hodnoceni - a.hodnoceni;  
    })}
    console.log(arrFiltrace);
    generovaniSeznamu(arrFiltrace);
}

function smazaniSeznamu() {
let recept = document.querySelectorAll('.recept');
recept.forEach(item => item.remove());
}