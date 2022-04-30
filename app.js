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
var tlacitko = document.querySelector('button');
var kategorie = document.querySelector('#kategorie');
var razeni = document.querySelector('#razeni');
generovaniSeznamu();

function generovaniSeznamu() {
    generovaniReceptyId();
    for(i = 0; i < recepty.length; i++) {
        generovaniPolozky(i);
    }
    if(localStorage.indexPolozky !== "") {
        let item = localStorage.getItem('indexPolozky');
        detailPolozky(item);}
}

function generovaniReceptyId() {
        let receptyId = document.createElement('div');
        receptyId.className = 'recepty';
        receptyId.setAttribute('id', 'recepty');
        kontejner.appendChild(receptyId);
}

function generovaniPolozky(i) {
    let recept = document.createElement('div');
    recept.className = 'recept';
    recept.dataset.index = i;
    let receptObrazek = document.createElement('div');
    receptObrazek.className = 'recept-obrazek';

    let obrazek = document.createElement('img');
    obrazek.src = recepty[i].img;

    let receptInfo = document.createElement('div');
    receptInfo.className = 'recept-info';

    let nazev = document.createElement('h3');
    nazev.textContent = recepty[i].nadpis;

    let receptyId = document.querySelector('.recepty');

    receptyId.appendChild(recept);
    recept.appendChild(receptObrazek);
    receptObrazek.appendChild(obrazek);
    recept.appendChild(receptInfo);
    receptInfo.appendChild(nazev);

    recept.addEventListener('click', () => detailPolozky(i))
}

function detailPolozky(i) {
    document.querySelector('#recept-foto').src = recepty[i].img;
    document.querySelector('#recept-kategorie').textContent = recepty[i].kategorie;
    document.querySelector('#recept-hodnoceni').textContent = recepty[i].hodnoceni;
    document.querySelector('#recept-nazev').textContent = recepty[i].nadpis;
    document.querySelector('#recept-popis').textContent = recepty[i].popis;     
    localStorage.clear();
    localStorage.setItem('indexPolozky', i);
}

tlacitko.addEventListener('click', filtrace);

var poleNazvy = [];
   for(i = 0; i < recepty.length; i++) {
        poleNazvy.push(recepty[i].nadpis);
    }
var poleKategorie = [];
    for(i = 0; i < recepty.length; i++) {
        poleKategorie.push(recepty[i].kategorie);
    }

function filtrace() {
    smazaniSeznamu();
    let hodnotaText = document.querySelector('#hledat').value;
    let hodnotaKategorie = kategorie.value; 
    let hodnotaRazeni = razeni.value;
    if(hodnotaText === "" && hodnotaKategorie === "" && hodnotaRazeni === "") {
        generovaniSeznamu();
    }
    else if(hodnotaRazeni !== "" && hodnotaText === "" && hodnotaKategorie === "") {        
        if(hodnotaRazeni == 2) {
            recepty.sort(function (a, b) {
            return a.hodnoceni - b.hodnoceni;
        })} 
        if(hodnotaRazeni == 1) {
            recepty.sort(function (a, b) {
            return b.hodnoceni - a.hodnoceni;  
        })}
        generovaniSeznamu();
    }
    else if(hodnotaText !== "" && hodnotaRazeni === "" && hodnotaKategorie === "") {
        let filtrNazvyPole = filterText(poleNazvy, hodnotaText);
        generovaniReceptyId();
        for(i = 0; i < filtrNazvyPole.length; i++) {
            let index = poleNazvy.indexOf(filtrNazvyPole[i]);
            generovaniPolozky(index);
        }
    }
    else if (hodnotaKategorie !== "" && hodnotaRazeni === "" && hodnotaText === "") {
        let filtrKategoriePoleI = [];
        filtrKategorie(poleKategorie, hodnotaKategorie, filtrKategoriePoleI);
        generovaniReceptyId();
        for(i = 0; i < filtrKategoriePoleI.length; i++) {
            generovaniPolozky(filtrKategoriePoleI[i]);
        }
    }
    else {
        hodnotaText = "";
        hodnotaKategorie = "";
        hodnotaRazeni = "";
        alert('Lze filtrovat pouze dle jednoho parametru. Obnov stránku a opakuj hledaní.');
        generovaniSeznamu();
    }
}

function filtrKategorie(pole, hodnota, arry) {
    for ( i=0; i < pole.length; i++ ){
        if ( pole[i] == hodnota){
            arry.push(i)
        }
    }
    return arry;
} 

function filterText(pole, hodnota) {   
    return pole.filter(function(el) {
         return el.toLowerCase().indexOf(hodnota.toLowerCase()) !== -1
    })
}

function smazaniSeznamu() {
    let receptyId = document.querySelector('.recepty');
    kontejner.removeChild(receptyId);
}