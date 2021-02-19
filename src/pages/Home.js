import React from 'react';
import "./Home.scss"
import {Template} from "../components/templates/Template";
import caviaHomeImg from "../assets/cavia-home-img.jpg";

export const Home = ({title}) => {
    return (
        <Template>
            <section className='home container'>
                <h1 className='welcoming_title'>Witamy w Cavia LAB!</h1>
                <strong className='welcoming_text'>Tutaj znajdziesz wymarzonego dla siebie pupila!</strong>
                <p className='welcoming_information'>Pamiętajcie, że świnki morskie to zwierzęta silnie stadne, więc aby
                    dobrze się czuły zalecamy wybór co najmniej dwóch świnek.</p>
                <div className='cavia_home-img'>
                    <img src={caviaHomeImg} alt='cavia-home-img'/>
                </div>
                <h2 className='home_to-know'>Co warto wiedzieć przed zakupem świnki morskiej?</h2>

                <strong>Jeśli jesteś cierpliwy, nie odrzuca Cię widok rozsypanych wszędzie trocin i trawy oraz
                    poszukujesz
                    futerkowego przyjaciela – świnki morskie są jak najbardziej dla Ciebie. Zanim jednak zdecydujesz się
                    na
                    zakup świnki, warto abyś wziął pod uwagę kilka kwestii.</strong>

                <section className='purchasing'><h3>Zakup świnki morskiej</h3></section>

                <p>Najlepiej jest wybrać zwierzątko w sklepie zoologicznym, na targach lub u hodowcy. Ich cena nie jest
                    wysoka.
                    Możemy wybrać z wielu gatunków świnek. Najpopularniejsze są te gładkowłose. Świnki z długim włosiem
                    są
                    najdroższe i trudniejsze w utrzymaniu. Płeć gryzonia warunkuje jego charakter. Samiczki świnek
                    morskich
                    są
                    łagodniejsze i bardziej przyjazne niż samce. Warto zastanowić się nad zakupem parki. Wybierając
                    konkretną
                    świnkę należy zwrócić uwagę na to czy jest zdrowa i czy bawi się z innymi zwierzątkami w klatce.
                    Trzeba
                    zwrócić uwagę na sierść świnki, stan oczu i nosa. Wszelkie wydzieliny mogą być oznaką choroby.</p>

                <section className='personality'><h3>Charakter świnki morskiej</h3></section>

                <p>Świnki morskie są przyjaznymi, sympatycznymi zwierzętami. Żyją średnio 7 lat. Są to bardzo
                    towarzyskie
                    gryzonie, które lubią być głaskane i trzymane na rękach. Pielęgnacja świnki morskiej Zwierzaki
                    chętnie
                    jedzą
                    gotowe mieszanki dostępne w sklepach zoologicznych. Lubią także świeże warzywa, zioła, trawę i
                    owoce.
                    Dodatkowo muszą mieć stały dostęp do wody w poidełku. Należy także zadbać o wygląd świnki. Te
                    długowłose
                    wymagają codziennego czesania. Wszystkim świnkom bez wyjątku należy systematycznie obcinać pazurki.
                    Do
                    ścierania ząbków należy podawać im twarde gałązki.</p>

                <section className='diseases'><h3>Choroby świnek morskich</h3></section>

                <p>Świnki nie są bardzo podatne na choroby i problemy zdrowotne, jednak jak każde zwierzątko mogą kiedyś
                    zachorować. Najczęstszymi przypadłościami tych gryzoni są: zaparcia, biegunki, paraliż, pasożyty czy
                    zapalenia mięśni. Gdy zauważymy u
                    swojej świnki niepokojące objawy – należy najszybciej skontaktować się z weterynarzem.</p>
            </section>
        </Template>
    )
}