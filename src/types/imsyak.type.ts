export interface Imsyak {
    tanggal: number;
    imsak: string;
    subuh: string;
    terbit: string;
    dhuha: string;
    dzuhur: string;
    ashar: string;
    maghrib: string;
    isya: string;
}

export interface AllDataImsyak {
    provinsi: string;
    kabkota: string;
    hijriah: string;
    masehi: string;
    imsakiyah: Imsyak[];
}