// 2 masala

function tanlash(massiv, n) {
    const natija = [];
    const Massiv = [...massiv];

    for (let i = 0; i < n; i++) {
        const index = Math.floor(Math.random() * Massiv.length)
        natija.push(Massiv.splice(index, 1)[0]);
    }

    return natija;
}

const massiv = [1, 2, 3, 4, 5, 6, 7, 8];
const n = 3;
const natija = tanlash(massiv, n);

console.log(natija);

// 4 masala

function tekisMassiv(massiv) {
    return massiv.flat();
}

const ichmaIchMassiv = [1, [2, 3], [4, [5, 6]]];
const tekisMassivNatija = tekisMassiv(ichmaIchMassiv);

console.log(tekisMassivNatija);

// 5 masala

function boshHarfniKattaQilish(string) {
    return string
    .split(' ')
    .map(soz => soz.charAt(0).toUpperCase() + soz.slice(1).toLowerCase())
    .join(' ');
}

const matn = "hello world from javascript";
const yangiMatn = boshHarfniKattaQilish(matn);

console.log(yangiMatn);