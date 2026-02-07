export interface Surat {
    "nomor": number;
    "nama": string;
    "namaLatin": string;
    "jumlahAyat": number;
    "tempatTurun": string;
    "arti": string;
    "deskripsi": string;
    "audioFull": string[];
}

export interface ayatProps {
    "nomorAyat": number;
    "teksArab": string;
    "teksLatin": string;
    "teksIndonesia": string;
    "audio": object;
}

export interface SuratDetail extends Surat {
    "ayat": ayatProps[];
    "audio": object;
}