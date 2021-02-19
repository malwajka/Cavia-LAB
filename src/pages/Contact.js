import React from 'react';
import './Contact.scss';
import {Template} from "../components/templates/Template";
import mailIcon from '../assets/Mail Icon.svg';
import phoneIcon from '../assets/Phone Icon.svg';
import {useState} from "react";

export const Contact = () => {
    const [number, setNumber] = useState("");

    const [error, setError] = useState("");
    const [sended, setSended] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        const errors = [];
        console.log(errors);

        if (number.length < 9 || number.length > 9) {
            errors.push("Numer telefonu musi mieć 9 cyfr!")
        }

        if (errors.length != 0) {
            setError(errors)
        } else {
            setSended(true);
            setError([]);
            setNumber([]);
        }
    }

    return (
        <Template>
            <section className="contact container">
                <div className="contact__column">
                    <h2 className="contact__title">Macie pytania?</h2>
                    <p className="contact__text"><b>Napisz do nas maila bądź zadzwoń!</b></p>
                    <div className="contact__details">
                        <a href="mailto:info@cavia-lab.pl" className="details__item">
                            <img src={mailIcon} alt="mail"/>
                            info@cavia-lab.pl
                        </a>
                        <a href="tel:123456789" className="details__item">
                            <img src={phoneIcon} alt="phone"/>
                            123 456 789
                        </a>
                    </div>
                </div>
                <div className="contact__column">
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="form__field">
                            <h3 className='form__field-text'>Możesz również zostawić numer telefonu, oddzwonimy!</h3>
                            <label className="form__label" htmlFor="number">Telefon: </label>
                            <input type="text"
                                   className="form__input number"
                                   id="number"
                                   value={number}
                                   pattern="[0-9]*"
                                   onChange={e => setNumber(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn form__btn">Send</button>

                    </form>
                </div>
                <div className='form__validation'>
                    {sended && <h4 className='sent_confirm'>Wiadomość została wysłana!</h4>}
                    {error.length > 0 && <h4 className='error_alert'>{error}</h4>}
                </div>
                <div className='contact_address'>
                    <h3>Możesz też nas odwiedzić osobiście:</h3>
                    <p>ul. Smocza 364, 01-051 Warszawa</p>
                    <strong>Godziny otwarcia: Poniedziałek - Piątek, godziny: 10:00 - 20:00</strong>
                </div>

            </section>
        </Template>
    )
}