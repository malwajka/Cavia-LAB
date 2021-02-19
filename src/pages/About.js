import React from 'react';
import "./About.scss";
import {Template} from "../components/templates/Template";

export const About = () => {

    return (
        <Template>
            <div className='about_container'>
                <strong>Hodujemy pięć ras świnek morskich, które z powodzeniem można krzyżować między sobą bez ryzyka
                    wystąpienia wad. Rasy długowłose o włosie prostym oraz rasy krótkowłose o włosie kręconym. Zakupić
                    można również świnki bez włosów - odmiana Skinny.</strong>

                <p>Osobniki do rozrodu wybierane są na podstawie analizy rodowodów, rozwoju osobniczego oraz typu.
                    Dokładamy wszelkich starań by nasze zwierzęta charakteryzowały się najlepszymi cechami (pod względem
                    budowy, wzorca rasy, włosa i umaszczenia). Dlatego świnki pochodzące z naszej hodowli są doskonałym
                    materiałem zarodowym dla przyszłych hodowców i cudownymi towarzyszami dla miłośników tych
                    wspaniałych gryzoni. Zwierzątka od pierwszych godzin życia przyzwyczajane są do obcowania z
                    człowiekiem, dlatego idealnie nadają się na małego przyjaciela dziecka.</p>
            </div>
        </Template>
    )
}
