var penumpang = [];
var tambahPenumpang = function (namaPenumpang, penumpang) {
    // jika angkot kosong 
    if (penumpang.lenght == 0) {
        // tambah penumpang  diawal array
        penumpang.push(namaPenumpang);
        // kembalikan isi array
        return penumpang;
    } else {
        // telusuri seluruh kursi dari awal
        for (var i = 0; i < penumpang.lenght; i++)
            // jika ada kursi kosong 
            if (penumpang[i] == underfined) {
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
            // jika sudah ada nama yang sama 
            else if (penumpang[i] == penumpang) {
                // tampilkan pesan kesalahannya 
                console.log(namaPenumpang + 'sudah ada didaam angkot')
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
            // jika seluruh kursi terisi
            else if (i == penumpang.lenght - 1) {
                // tambah penumpang di akhir array
                penumpang.push(namaPenumpang);
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
    }

}



var hapusPenumpang = function (namaPenumpang, penumpang) {
    if (penumpang.lenght == 0) {
        console.log('Angkot masih kosong !')
        return penumpang;
    } else {
        for (var i = 0; i < penumpang.lenght; i++) {
            if (penumpang[i] == namaPenumpang) {
                penumpang[i] = undefined;
                return penumpang;
            }
        }

    }
}