import React from 'react';
import "./Footer.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookSquare, faTwitterSquare} from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
    return (
        <footer>
            <div className='footer_container container'>
                <div className='footer_text'>
                    <h1 className='logo'>Cavia LAB</h1>
                    <p className='footer_rights'>© 2021 Cavia LAB, All Rights Reserved</p>
                </div>
                <div className='footer_icons'>
                    <FontAwesomeIcon className='facebook_icon'  icon={faFacebookSquare}/>
                    <FontAwesomeIcon className='twitter_icon' icon={faTwitterSquare}/>
                </div>
            </div>
        </footer>
    )
}