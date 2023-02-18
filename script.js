// mengambil id dari html mengubah menjadi DOM
const displayElement = document.getElementById('display');
const allButton = document.getElementsByClassName('btn');


/* jika button counting(menghitung) tidak di klik
maka tidak muncul apa apa di layar,
dan menentukan variabel simbol untuk button
yang khusus di pilih menggunakan array .
*/
let isCounting = false;
const symbol = ["+", "-", "*", "/", "="];

/* untuk variabel semua buttton,
ketika button di klik maka jalankan fungsi nya yaitu klik
dan mengecek button yg sudah di targetkan ke layar 
*/
for (const button of allButton){
    button.addEventListener('click', function (e)  {
        checkButton(e.target.innerText)
    })
}


/* fungsi dari cek tombol dengan parameternya content,
dicek menggunakan console di isi value simbol dan di includes
apakah content tersebut berisi string atau tidak,
jika display bernilai kosong dan simbol di include dengan parameter bernilai kosong,
maka di dalam parameter content akan mengembalikan nilai false .
*/
function checkButton(content) {
    console.log(symbol.includes(content))
    if(displayElement.innerText == "" && symbol.includes(content)) {
        return false;
    }

    /*jika display nya kosong dan didalam content sama dengan bernilai plus atau minus 
    maka mengembalikan nilai false*/
    if(displayElement.innerText == "" && content == "+/-") {
        return false;
    }



    /* 
    pilihan switch didalam parameter content yaitu C,+/-,=,%,
    jika suatu pilihan case bernilai button C maka display nya kosong
    yg artinya kita menghapus text di layar display.

    case = , jika nilai hitung nya benar maka tampilkan
    di layar display.
    
    case %, jika nilai hitung nya bernilai benar/true maka
    tampilkan di layar display dan variabel yg lama kita bagi 100
    */
    switch (content){
        case "C":
            displayElement.innerText = "";
            break;
            case "=":
                isCounting = true;
                displayElement.innerText = eval(displayElement.innerText);
                break;
            case "+/-":
                checkPlusMinus();
                break;
            case "%":
                isCounting = true;
                displayElement.innerText = displayElement.innerText / 100;
                break;
        default:
                if(isCounting) { //if dengan parameter iscounting
                    isCounting = false; //tombol iscounting dengan nilai false
                        if(symbol.includes(content)) { //jika simbol di include dengan parameter content
                            displayElement.innerText += content; //maka display ditambah dengan content nya
                        }else{ //jika tidak maka display tidak di tambah sama dengan content nya
                            displayElement.innerText = content;
                        }
                }else{ //jika nilai nya true maka tambahkan content ke layar display
                    displayElement.innerText += content
                }
            break;
    }
}


/* 
jika button plus minus display nya bernilai string 
maka di slice(potong 0,1) sama dengan minus ,
maka di tampilkan di layar display dengan slice ke (1).

lainnya, jika display bernilai string minus(-),
maka tambahkan ke layar display
*/
function checkPlusMinus(){
    if(displayElement.innerText.slice(0,1) == "-"){
        displayElement.innerText = displayElement.innerText.slice(1);
    }else{
        displayElement.innerText = "-" + displayElement.innerText;
    }
};