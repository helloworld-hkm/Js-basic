var loop=true;
while (loop) {
        //pilihan player
    var p = prompt('Pilih : gajah,semut, orang');

    //menentukan pilihan comp
    var comp=Math.random();
    console.log(comp);
    console.log()
    if (comp <0.34) {
        comp='gajah';
    } else if (comp <0.34 && comp <0.67) {
        comp='orang';
    }else{
        comp='semut';
    }
    var hasil='';
    //result
    if (p==comp) {
        alert('hasilnya seri')
    }else if(p=='gajah'){
        hasil= (comp=='orang'?'MENANG':'KALAH');

    }
    else if (p=='orang') {  
        hasil= (comp=='gajah'?'Kalah':'Menang ');
        
    }
    else if (p=='semut') {
        hasil= (comp=='orang'?'Kalah':'Menang');
    }
    else{
        hasil='eror';
    }
    hasil=='eror'?alert('Masukkan Dengan Benar'):alert('kamu memilih: '+p+' Dan Komputer Memilih : '+comp+' \nMaka Hasilnya : Kamu '+hasil);

    var loop=confirm('masukkan lagi??');
}