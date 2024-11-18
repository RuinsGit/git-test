let cariSlayd = 0;
const slaydlar = document.querySelectorAll('.slayd');
const toplamSlaydlar = slaydlar.length;
const kaydırıcı = document.querySelector('.slider-2');


function novbetiSlayd() {
    if (cariSlayd < toplamSlaydlar - 1) {
        cariSlayd++;
    } else {
        cariSlayd = 0;
    }
    yenileKaydırıcıPozisyon();
}


function evvelkiSlayd() {
    if (cariSlayd > 0) {
        cariSlayd--;
    } else {
        cariSlayd = toplamSlaydlar - 1;
    }
    yenileKaydırıcıPozisyon();
}


function yenileKaydırıcıPozisyon() {
    const slaydGenisliyi = slaydlar[0].clientWidth;
    kaydırıcı.style.transform = `translateX(-${slaydGenisliyi * cariSlayd}px)`;
}

document.getElementById('ireli-duyme').addEventListener('click', novbetiSlayd);
document.getElementById('geri-duyme').addEventListener('click', evvelkiSlayd);


setInterval(novbetiSlayd, 10000);
