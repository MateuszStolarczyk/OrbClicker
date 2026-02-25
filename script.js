document.addEventListener('click', async () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    }
});

// Ceny
let cenaKlik = 20;
let cenaAutoKlik = 1000;
let cenaMnoznik = 5000;
let cenaPomocnik = 10000;
let cenaLevel = 20000;
let mnoznikLevel = 4.55;
let mnoznikCen = 1.55;

// Mnożniki
let Mnoznik = 1;
let MnoznikGuzik = 1;
let wzrostMnoznik = 0.5;


//Bonusy Statystyki
let superKlik = 1;
let jestSuperKlikBonus = false
let jestSuperAutoclickerBonus = false
let jestPomocBonus = false

// Statystyki
let kasa = 0;
let DKasa = document.getElementById("money")
let kns = 0;
let DKns = document.getElementById("kns")
let PKns = 0;
let DPKns = document.getElementById("pkns")
let DPomocnicy = document.getElementById("pomocnicy")
let DMnoznik = document.getElementById("mnoznikHUD")
let LevelGuzik = 1;
let moc = 1;
let autoKlik = 0;
let iloscPomoc = 0;
let iloscKlikniec = 0
let DIloscKlikniec = document.getElementById("razem")
let liczCzas = false;

// Guziki
let guzik = document.getElementById("guzik")

// Audio
const KLIK = new Audio("audio/klik.mp3")
const KUP = new Audio("audio/kup.mp3")
const PLUSKASA = new Audio("audio/plusKasa.mp3")
const ZAMKNIJ = new Audio("audio/zamknji.mp3")
const ZLYKOD = new Audio("audio/zlyKod.mp3")
const THEME = new Audio("audio/theme.mp3")
THEME.loop = true;

document.getElementById("glowny").onclick = function(){
    THEME.play();
    liczCzas = true;
    document.getElementById("glowny").onclick = ""
};
// Ikonka muzyki
let wlaczMuzyke = true
let ikonkaMuzyka = document.getElementById("muzyka")

function Muzyka(){
    if (wlaczMuzyke){
        THEME.volume = 0.0;
        wlaczMuzyke = false
        ikonkaMuzyka.src = "img/mute.png"
        ikonkaMuzyka.title = "Włącz muzykę w tle!"
    } else{
        THEME.volume = 1.0;
        wlaczMuzyke = true
        ikonkaMuzyka.src = "img/full.png"
        ikonkaMuzyka.title = "Wyłącz muzykę w tle!"
    }
}

// Ulepszenia Wyświetlanie Cen
let cenaUlepszenie1 = document.getElementById("u1")
let cenaUlepszenie2 = document.getElementById("u2")
let cenaUlepszenie3 = document.getElementById("u3")
let cenaUlepszenie4 = document.getElementById("u4")
let cenaUlepszenie5 = document.getElementById("u5")

// Ulepszenia Wyświetlanie Mocy
let dMoc1 = document.getElementById("m1")
let dMoc2 = document.getElementById("m2")
let dMoc3 = document.getElementById("m3")
let dMoc4 = document.getElementById("m4")
let dMoc5 = document.getElementById("m5")

// skracanie cen
function skrocCene(numer) {
    if (numer >= 1_000_000_000_000_000_000) return (numer / 1_000_000_000_000_000_000).toFixed(2) + "Qi"; // kwintylion
    if (numer >= 1_000_000_000_000_000) return (numer / 1_000_000_000_000_000).toFixed(2) + "Qa"; // kwadrylion
    if (numer >= 1_000_000_000_000) return (numer / 1_000_000_000_000).toFixed(2) + "T"; // bilion
    if (numer >= 1_000_000_000) return (numer / 1_000_000_000).toFixed(2) + "B"; // miliard
    if (numer >= 1_000_000) return (numer / 1_000_000).toFixed(2) + "M"; // milion
    if (numer >= 1_000) return (numer / 1_000).toFixed(2) + "k"; // tysiąc
    return numer.toFixed(2); // mniejsze liczby
}

let levelInfo = document.getElementById("levelInfo")
// Statystyki początkowe
function aktualizacjaDanych(){
    // Poziom
    if (LevelGuzik == 1) {
        guzik.style.backgroundColor = "#7b3fe4";
        guzik.style.borderColor = "#5a2bb5";
        guzik.style.color = "#1c0f33";
        MnoznikGuzik = 1;
        levelInfo.innerHTML = "Level: 1"
    }
    else if (LevelGuzik == 2) {
        guzik.style.backgroundColor = "#8c3ff0";
        guzik.style.borderColor = "#6a2fc4";
        guzik.style.color = "#1c0f33";
        MnoznikGuzik = 2;
        levelInfo.innerHTML = "Level: 2"
    }
    else if (LevelGuzik == 3) {
        guzik.style.backgroundColor = "#a23ff2";
        guzik.style.borderColor = "#7b2fd1";
        guzik.style.color = "#1c0f33";
        MnoznikGuzik = 4;
        levelInfo.innerHTML = "Level: 3"
    }
    else if (LevelGuzik == 4) {
        guzik.style.backgroundColor = "#c13ff5";
        guzik.style.borderColor = "#9b2fcb";
        guzik.style.color = "#220f33";
        MnoznikGuzik = 6;
        levelInfo.innerHTML = "Level: 4"
    }
    else if (LevelGuzik == 5) {
        guzik.style.backgroundColor = "#e13ff0";
        guzik.style.borderColor = "#b52fc0";
        guzik.style.color = "#2a0f33";
        MnoznikGuzik = 8;
        levelInfo.innerHTML = "Level: 5"
    }
    else if (LevelGuzik == 6) {
        guzik.style.backgroundColor = "#f53fc9";
        guzik.style.borderColor = "#c42f9f";
        guzik.style.color = "#330f2a";
        MnoznikGuzik = 10;
        levelInfo.innerHTML = "Level: 6"
    }
    else if (LevelGuzik == 7) {
        guzik.style.backgroundColor = "#f53f9a";
        guzik.style.borderColor = "#c42f73";
        guzik.style.color = "#330f22";
        MnoznikGuzik = 12;
        levelInfo.innerHTML = "Level: 7"
    }
    else if (LevelGuzik == 8) {
        guzik.style.backgroundColor = "#f53f6b";
        guzik.style.borderColor = "#c42f4d";
        guzik.style.color = "#330f18";
        MnoznikGuzik = 14;
        levelInfo.innerHTML = "Level: 8"
    }
    else if (LevelGuzik == 9) {
        guzik.style.backgroundColor = "#f5533f";
        guzik.style.borderColor = "#c43c2f";
        guzik.style.color = "#33140f";
        MnoznikGuzik = 16;
        levelInfo.innerHTML = "Level: 9"
    }
    else if (LevelGuzik == 10) {
        guzik.style.backgroundColor = "#f57a3f";
        guzik.style.borderColor = "#c45e2f";
        guzik.style.color = "#33200f";
        MnoznikGuzik = 18;
        levelInfo.innerHTML = "Level: 10"
    }
    else if (LevelGuzik == 11) {
        guzik.style.backgroundColor = "#f5a13f";
        guzik.style.borderColor = "#c47e2f";
        guzik.style.color = "#33260f";
        MnoznikGuzik = 20;
        levelInfo.innerHTML = "Level: 11"
    }
    else if (LevelGuzik == 12) {
        guzik.style.backgroundColor = "#f5c63f";
        guzik.style.borderColor = "#c49d2f";
        guzik.style.color = "#332c0f";
        MnoznikGuzik = 22;
        levelInfo.innerHTML = "Level: 12"
    }
    else if (LevelGuzik == 13) {
        guzik.style.backgroundColor = "#f5d23f";
        guzik.style.borderColor = "#c4a92f";
        guzik.style.color = "#332f0f";
        MnoznikGuzik = 24;
        levelInfo.innerHTML = "Level: 13"
    }
    else if (LevelGuzik == 14) {
        guzik.style.backgroundColor = "#f5dd3f";
        guzik.style.borderColor = "#c4b32f";
        guzik.style.color = "#443300";
        MnoznikGuzik = 26;
        levelInfo.innerHTML = "Level: 14"
    }
    else if (LevelGuzik == 15) {
        guzik.style.backgroundColor = "#ffd700";
        guzik.style.borderColor = "#ccac00";
        guzik.style.color = "#443300";
        MnoznikGuzik = 28;
        levelInfo.innerHTML = "Level: 15"
    }
    
    // Wyświetlanie podstawowych statystyk
    DKasa.innerHTML = `Kasa: ${skrocCene(kasa)}$`
    if (jestSuperAutoclickerBonus){
        DKns.innerHTML = `KNS: ${skrocCene(autoKlik*Mnoznik*5)}$/s`
    } else{
        DKns.innerHTML = `KNS: ${skrocCene(autoKlik*Mnoznik)}$/s`
    }
    if (jestPomocBonus){
        DPKns.innerHTML = `PKNS: ${skrocCene(PKns*2*Mnoznik*2)}$/s`
    } else{
        DPKns.innerHTML = `PKNS: ${skrocCene(PKns*2*Mnoznik)}$/s`
    }
    if (jestPomocBonus){
        DPomocnicy.innerHTML = `Pomocnicy: ${Math.floor(iloscPomoc*2)}`
    } else{
        DPomocnicy.innerHTML = `Pomocnicy: ${Math.floor(iloscPomoc)}`
    }
    DMnoznik.innerHTML = `Mnożnik: x${skrocCene(Mnoznik)}`
    DIloscKlikniec.innerHTML = `Łączna ilość kliknięć: ${iloscKlikniec}`

    // Wyświetlanie wartości guzików
    guzik.innerHTML = `${skrocCene(moc*MnoznikGuzik*Mnoznik*superKlik)}$`

    // Wyświetlanie cen ulepszeń
    cenaUlepszenie1.innerHTML = `${skrocCene(cenaKlik)}$`
    cenaUlepszenie2.innerHTML = `${skrocCene(cenaAutoKlik)}$`
    cenaUlepszenie3.innerHTML = `${skrocCene(cenaMnoznik)}$`
    cenaUlepszenie4.innerHTML = `${skrocCene(cenaPomocnik)}$`

    // Statystyki dla ulepszeń
    dMoc1.innerHTML = `${skrocCene(moc*Mnoznik)}$ > ${skrocCene((moc+1)*Mnoznik)}$`
    dMoc2.innerHTML = `${skrocCene(autoKlik*Mnoznik)}/s > ${skrocCene((autoKlik+2)*Mnoznik)}/s`
    dMoc3.innerHTML = `x${skrocCene(Mnoznik)} > x${skrocCene(Mnoznik+wzrostMnoznik)}`
    dMoc4.innerHTML = `${Math.floor(iloscPomoc)} > ${Math.floor(iloscPomoc)+1}`

    // Poziom guzika
    if(LevelGuzik < 15){
        dMoc5.innerHTML = `${LevelGuzik} > ${LevelGuzik+1}`
        cenaUlepszenie5.innerHTML = `${skrocCene(cenaLevel)}$`
    } else {
        dMoc5.innerHTML = `Max`
        cenaUlepszenie5.innerHTML = ``
        let kupGuzika = document.getElementById("kupGuzika")
        kupGuzika.style.cursor = `default`
        kupGuzika.style.backgroundColor = `#9a86cc`
        kupGuzika.style.borderColor = `#5c4c72`
        kupGuzika.style.color = `#453061`
    }

    setTimeout(aktualizacjaDanych, 50);
}
aktualizacjaDanych()


// Animacja guzików
function animacja(){
    guzik.style.transform = "scale(1.1)"
    setTimeout(function() {
        guzik.style.transform = "scale(1.0)"
    }, 250)
}

// Dodawanie kasy
let moznaKliknac = true;

function dodajKase(){
    if(!moznaKliknac) return;
    if(moznaKliknac){
        kasa += moc * MnoznikGuzik * Mnoznik * superKlik
        moznaKliknac = false
        iloscKlikniec += 1
        KLIK.pause();
        KLIK.currentTime = 0;
        KLIK.play();
    }
    setTimeout(function() {
        moznaKliknac=true
    }, 180)
}

// Kupywanie ulepszeń

// Moc kliknięcia //
function kupU1(){
    if(kasa >= cenaKlik){
        kasa = kasa - cenaKlik
        moc += 1
        cenaKlik = cenaKlik*mnoznikCen
        KUP.pause();
        KUP.currentTime = 0;
        KUP.play();
    }
}

// Auto Clicker //
function kupU2(){
    if(kasa >= cenaAutoKlik){
        kasa = kasa - cenaAutoKlik;
        autoKlik += 2;
        kns += 2;
        cenaAutoKlik = cenaAutoKlik * mnoznikCen
        KUP.pause();
        KUP.currentTime = 0;
        KUP.play();
    }
}

// Działanie Auto Clickera //
function KNS() {
    if (jestSuperAutoclickerBonus){
        kasa += kns * Mnoznik * 5
    } else{
        kasa += kns * Mnoznik 
    }
    
    setTimeout(KNS, 1000);
}

KNS()

// Mnożnik //
function kupU3(){
    if(kasa >= cenaMnoznik){
        kasa = kasa - cenaMnoznik;
        cenaMnoznik = cenaMnoznik * mnoznikCen
        Mnoznik += wzrostMnoznik
        KUP.pause();
        KUP.currentTime = 0;
        KUP.play();
    }
}

// Pomocniki //
function kupU4(){
    if(kasa >= cenaPomocnik){
        kasa = kasa - cenaPomocnik;
        iloscPomoc += 1;
        PKns += 3;
        cenaPomocnik = cenaPomocnik * mnoznikCen
        KUP.pause();
        KUP.currentTime = 0;
        KUP.play();
    }
}

// Działanie Pomocnika //
function pomocnik() {
    if (jestPomocBonus){
        kasa += PKns * Mnoznik * 2
    } else {
        kasa += PKns * Mnoznik
    }

    setTimeout(pomocnik, 500);
}

pomocnik()

function kupU5(){
    if (LevelGuzik < 15 && kasa >= cenaLevel){
        kasa = kasa - cenaLevel
        LevelGuzik +=1
        cenaLevel = cenaLevel*mnoznikLevel
        KUP.pause();
        KUP.currentTime = 0;
        KUP.play();
    }
}




// CHEATY //
let cheaty = document.getElementById("cheaty")
let kod = "zs10zabrze"
let wpisanyKod = document.getElementById("wpisz")
let zle = document.getElementById("zle")
let oknoKod = document.getElementById("kod")
let oknoDodatki = document.getElementById("dodatki")

// Otwórz menu
function otworzCheaty(){
    cheaty.style.display = "block"
}
// Zamknij menu
function zamknijCheaty(){
    cheaty.style.display = "none"
    oknoKod.style.display = "block"
    oknoDodatki.style.display = "none"
    wpisanyKod.value = ""
    zle.innerHTML = ""
    ZAMKNIJ.pause();
    ZAMKNIJ.currentTime = 0;
    ZAMKNIJ.play();
}

// Kod

function sprawdzKod(){
    let wpisanyKod = document.getElementById("wpisz").value
    if (wpisanyKod === kod){
        oknoKod.style.display = "none"
        oknoDodatki.style.display = "flex"
    } else{
        zle.innerHTML = `Podany kod jest nieprawidłowy!`
        ZLYKOD.pause();
        ZLYKOD.currentTime = 0;
        ZLYKOD.play();
        setTimeout(function() {
            zle.innerHTML = ""
        }, 1500)
    }
}

// Dodawanie kasy

function cheatyDodajKase(ile){
    kasa += ile
    PLUSKASA.pause();
    PLUSKASA.currentTime = 0;
    PLUSKASA.play();
}

// Koniec cheaty //

// Bonusy
let divBonus=document.getElementById("bonus")
let imgBonus=document.getElementById("imgBonus")
let losujBonus=0

// Animacja
function BonusAnimacja(){
    setTimeout(function() {
        divBonus.style.transform = "scale(1.2)"
        setTimeout(function(){
            divBonus.style.transform = "scale(1.0)"
            BonusAnimacja()
        }, 600)
    }, 600)
}
BonusAnimacja()

// Losowanie bonusu
let widok;
let odnowa;

function LosujBonusa(){
    
    clearTimeout(widok)
    clearTimeout(odnowa)

    divBonus.style.display = "none"
    losujBonus = Math.floor(Math.random()*6) //Losowanie
    if (losujBonus == 0){
        imgBonus.src = "Bonusy/BonusowaKasa.png"
        divBonus.title = "Dodatkowa kaska!!!"
        divBonus.onclick = BonusDodajKase
    } else if (losujBonus == 1){
        imgBonus.src = "Bonusy/AutoClicker.png"
        divBonus.title = "AutoClicker x5!!!"
        divBonus.onclick = SuperAutoclicker
    } else if (losujBonus == 2){
        imgBonus.src = "Bonusy/Pomocnicy.png"
        divBonus.title = "Pomocnicy x2!!!"
        divBonus.onclick = pomocX2
    } else if (losujBonus == 3){
        imgBonus.src = "Bonusy/SuperKlik.png"
        divBonus.title = "Super Klik!!!"
        divBonus.onclick = BonusSuperKlik
    } else if (losujBonus == 4){
        imgBonus.src = "Bonusy/Rachunek.png"
        divBonus.title = "Rachunki..."
        divBonus.onclick = rachunek
    } else {
        imgBonus.src = "Bonusy/Komornik.png"
        divBonus.title = "Komornik???"
        divBonus.onclick = komornik
    }
    let czas = Math.random() * (60000 - 30000) + 30000; // losowe 0.5-1 min

    widok = setTimeout(function() {
        divBonus.style.display = "flex";
        odnowa = setTimeout(function() {
            LosujBonusa()
        }, 10000);
    }, czas);
}
LosujBonusa()

// Bonus informacja
let bonusInfo = document.getElementById("bonusInfo")

function infoBonus(info){
    bonusInfo.innerHTML = info
    bonusInfo.style.opacity = 1
    setTimeout(function(){
        bonusInfo.style = 0
    },3000)
}

// Kasa
function BonusDodajKase(){
    let BonusowaKasa = cenaKlik*1.5*(Mnoznik/1.25)*(moc/2)
    infoBonus(`Dostajesz ${skrocCene(BonusowaKasa)}$`)
    kasa += BonusowaKasa
    PLUSKASA.pause();
    PLUSKASA.currentTime = 0;
    PLUSKASA.play();
    
    LosujBonusa()

}

//Super Autoclicker
function SuperAutoclicker(){
    if (jestSuperAutoclickerBonus) return;
    jestSuperAutoclickerBonus = true
    infoBonus(`Dostajesz Autoclicker x5 na 1min`)
    PLUSKASA.pause();
    PLUSKASA.currentTime = 0;
    PLUSKASA.play();
    
    LosujBonusa()

    setTimeout(function() {
        jestSuperAutoclickerBonus = false
    }, 60000)
}

// Pomocnicy x2
function pomocX2(){
    if (jestPomocBonus) return;
    infoBonus(`Dostajesz pomocnicy x2 na 1.5 min`)
    jestPomocBonus = true
    PLUSKASA.pause();
    PLUSKASA.currentTime = 0;
    PLUSKASA.play();
    
    LosujBonusa()

    setTimeout(function() {
        jestPomocBonus = false
    }, 90000)
}

// SuperKlik
function BonusSuperKlik(){
    if (jestSuperKlikBonus) return;
    jestSuperKlikBonus = true
    superKlik = 10
    infoBonus(`Dostajesz moc kiknięcia x${superKlik} na 25 sek`)
    PLUSKASA.pause();
    PLUSKASA.currentTime = 0;
    PLUSKASA.play();
    LosujBonusa()

    setTimeout(function() {
        jestSuperKlikBonus = false
        superKlik = 1
    }, 25000)
}

// Rachunek
function rachunek(){
    kasa = kasa - (kasa*0.5)
    infoBonus(`Zapłaciłeś rachunki!`)
    ZLYKOD.pause();
    ZLYKOD.currentTime = 0;
    ZLYKOD.play();

    LosujBonusa()
}

// Komornik
function komornik(){
    ZLYKOD.pause();
    ZLYKOD.currentTime = 0;
    ZLYKOD.play();
    kasa = 0
    infoBonus(`Komornik przyszedł i zabrał kasę :(`)
    LosujBonusa()
}

// Czas gry
let sekundy = 0;
let minuty = 0;
let godziny = 0;

function dodajSekunde(){
    if (!liczCzas) return;
    if (liczCzas) {
        sekundy += 1
    }
}

function dzialanieCzasu(){
    if (sekundy == 60){
        sekundy = 0
        minuty +=1
    }
    if (minuty == 60){
        minuty = 0
        godziny += 1
    }
}

// Wyświetlanie czasu
let czasGry = document.getElementById("czasGry")

function wyswietlanieCzasu(){
    let s = 0;
    let m = 0;
    let g = 0;
    if (sekundy < 10){
        s = `0${sekundy}`
    } else {
        s = sekundy
    }
    if (minuty < 10){
        m = `0${minuty}`
    } else {
        m = minuty
    }
    if (godziny < 10){
        g = `0${godziny}`
    } else {
        g = godziny
    }
    czasGry.innerHTML = `${g}:${m}:${s}`
}

// Uruchamianie funkcji
function uruchom(){
    dodajSekunde()
    dzialanieCzasu()
    wyswietlanieCzasu()
    setTimeout(uruchom, 1000)
}
uruchom()



//INTRO
let intro = document.getElementById("intro")
let introTlo = document.getElementById("IntroTlo")
let introNapis = document.getElementById("IntroNapis")
let introLogo = document.getElementById("logoIntro")
let introTekst = document.getElementById("informacja")
let introLadowanie = document.getElementById("ladowanie")
let LadowanieTekst = document.getElementById("LadowanieTekst")
const INTROMUZYKA = new Audio("audio/intro.mp3")

setInterval(function(){
    LadowanieTekst.innerHTML = "Ładowanie."
    setTimeout(function(){
        LadowanieTekst.innerHTML = "Ładowanie.."
        setTimeout(function(){
            LadowanieTekst.innerHTML = "Ładowanie..."
            setTimeout(function(){
                LadowanieTekst.innerHTML = "Ładowanie.."
            },300)
        },300)
    },300)
},1200)

intro.onclick = function(){
    INTROMUZYKA.play()
    introTekst.style.transition = "opacity 250ms"
    introTekst.style.opacity = 0
    introTlo.style.transition = "opacity 550ms"
    introTlo.style.opacity = 0.4
    introNapis.style.transition = "opacity 550ms"
    introNapis.style.opacity = 1
    setTimeout(function(){
        introNapis.style.opacity = 0
        introLogo.style.transition = "opacity 550ms"
        introLogo.style.opacity = 1
        setTimeout(function(){
            introLogo.style.opacity = 0
            introTlo.style.opacity = 0
            introLadowanie.style.transition = "opacity 550ms"
            introLadowanie.style.opacity = 1
            LadowanieTekst.style.transition = "opacity 550ms"
            LadowanieTekst.style.display = "block"
            LadowanieTekst.style.opacity = 1
            setTimeout(function(){
                intro.style.transition = "opacity 550ms"
                intro.style.opacity = 0
                setTimeout(function(){
                    intro.style.display="none"
                },550)
            }   
            ,5000)
        }   
        ,2500)
    }   
    ,3000)
    intro.onclick = ""
}
