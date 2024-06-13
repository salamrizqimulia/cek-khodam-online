
function cek_khodam() {
	const khodam = [
		"Mangkok Bakso Pak Sanip",
		"Sendok Makan Makanan Bergizi",
		"Garpu Bakso",
		"Sapu Lidi",
		"Genteng Rumah Pak Sanip",
		"Pintu Rumah Pak Sanip",
		"Piring Makan Pak Sanip",
		"Gelas Teh Anget Apa Dingin",
		"Cangkir Kopi Pait Banget",
		"Rumput Laut Siap Makan",
		"Meja Belajar Yang Giat",
		"Kursi Gajah Duduk",
		"Kipas Angin Miyako",
		"Lampu Philips",
		"Komputer Asus",
		"HP OPPO",
		"HP ASUS",
		"HP XIAOMI",
		"Jam Dinding",
		"Buku Tulis SIDU",
		"Lemari Baju Power Rangers",
		"Selimut Hello Kitty",
		"Kasur Empuk",
		"Pisau Dapur",
		"Tas Sekolah Menengah Keatas",
		"Kain Pel",
		"Kertas Lipat",
		"Kunci Sepeda Motor Honda Beat Tahun 2013",
		"Kunci Rumah Pak Lurah",
		"Kunci Mobil Toyota Kijang Super Tahun 1995",
		"Gunting Batu Kertas",
		"Ember Anti Bocor",
		"Roda Belakang Mobil Toyota Avanza Tahun 2019",
		"TV POLYTRON",
		"TV SHARP",
		"Pager Rumah"
	]
	const random1 = khodam[(Math.floor(Math.random() * (khodam.length)))];
	if (document.forms["form_panel"]["nama"].value == "" || document.forms["form_panel"]["umur"].value == "" || document.forms["form_panel"]["gaji"].value == "") {
		document.getElementById("text_hasil").innerHTML = "Kolom nama, umur, gaji jangan sampe kosong, setannya bingung nyari khodam yang cocok buat lo";
	} else {
		document.getElementById("text_nama").innerHTML = "Nama Anda : " + document.forms["form_panel"]["nama"].value;
		document.getElementById("text_umur").innerHTML = "Umur Anda : " + document.forms["form_panel"]["umur"].value;
		document.getElementById("text_gaji").innerHTML = "Gaji Anda : " + document.forms["form_panel"]["gaji"].value;
		document.getElementById("text_hasil").innerHTML = "KHODAM YANG COCOK UNTUK ANDA : " + random1;	
	}
}

function reset() {
	document.getElementById("text_nama").innerHTML = "Nama Anda :";
	document.getElementById("text_umur").innerHTML = "Umur Anda :";
	document.getElementById("text_gaji").innerHTML = "Gaji Anda :";
	document.getElementById("text_hasil").innerHTML = "";
	document.forms["form_panel"]["nama"].value = "";
	document.forms["form_panel"]["umur"].value = null;
	document.forms["form_panel"]["gaji"].value = null;
}