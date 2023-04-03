// console.log(document.title);
document.title =  'Ahmad Hidayat'
// console.log(document.title);
const body = document.body;
// add dengan cara js
body.append('halo')

const h1 = document.createElement('h1');
h1.textContent =  '<marquee>bismillah</marquee>';

const namaSaya = document.createElement('p')
namaSaya.innerHTML = "<marquee>Ahmad Hidayat</marquee>";

const namaKamu = document.createElement('b');
namaKamu.innerText = "<marquee>Muhammad Fauzan</marquee>"

body.append(h1)
body.append(namaSaya)
body.append(namaKamu)


// === selector ====
const btn1 = document.getElementById('btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.getElementById('btn3')

const defaultText = 'klik saya';
btn3.textContent = defaultText;

btn1.style.border = 'none';
btn1.style.padding = '10px'
btn1.style.background = 'tomato'
btn1.style.fontSize = '10px'
btn1.style.fontWeight = 'bold'

function gantiWarna() {
    btn2.style.background = 'aqua'
}

function ubahText() {
    btn3.textContent = 'hayoooo'
}

function oriText() {
    btn3.textContent = 'klik saya'
}