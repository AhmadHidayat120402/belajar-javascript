// alert('oke');
// console.log('hey oke');
// prompt('masukkan usia anda !')

// membuat variabel 
// var , let , const
// var usia = 30;
// constanta gak bisa diubah
// let usia = 2;
// x =8;
// let y = 1;
// console.log('hey usia kamu ' + usia);
// alert( 'usia kamu adalah '+ usia);

// === logic

// let usia = prompt('berapa usia kamu ? ');
// alert('usia saya ' + usia + ' tahun');

let nama = "Ahmad Hidayat";
let usia = 20;
let tinggiBadan =  170.2;
let beratBadan;
let pacar = 1;
beratBadan = 30;

// pengkondisian  

if(pacar == null){
    pacar = "belum punya";
}else{
    pacar = "udah punya";
}

let saldoAwal = 30000
let saldoTambahan =  30000
const hutang = 50000
const saldoAkhir =  saldoAwal +  saldoTambahan - hutang;

// switch (pacar) {
//     case 1:
//         pacar = "punya 1 aja";
//         break;
//     case 2 :
//         pacar = "punya 2 pacar";
//     default:
//         pacar = "belum punya"
//         break;
// }


// alert(`nama saya ${nama} usia saya ${usia} tinggi badan saya ${tinggiBadan} berata badan saya 
// ${beratBadan} saya tidak punya ${pacar}`);

// alert(`saya punya saldo awa; sebesar Rp. ${saldoAwal} lalu bertambah sebesar Rp.${saldoTambahan} jadi total saldo saya sebesar Rp. ${saldoAkhir}`)

// array

let namaGuru = ['dayat','zen','yayak'];
namaGuru.push('yusuf','kusnan');
// method menghapus value di awal 
namaGuru.shift();
// method menghapus method diakhir
namaGuru.pop();
// alert(namaGuru);


let namaSiswa = [];
namaSiswa[0] = 'dayat';
namaSiswa[1] = 'kholifah';
namaSiswa.shift()
namaSiswa.pop()
// alert(namaSiswa)

// forlooping
let namaku = ['dayat','zen','rohim']; 

// for(let i =0; i < namaku.length; i++){
//     console.log(namaku[i])
// }
let i = 10;
// while (i < 10) {
//     i++
//     console.log('Ahmad Hidayat')
// }

do {
    i++;
    console.log('ahmad')
} while (i<10);






