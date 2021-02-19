import React from 'react';
import './Animals.scss'
import {HashRouter, Route, Link, Switch, NavLink,} from 'react-router-dom';
import {Template} from "../components/templates/Template";

export const Animals = () => {

    return (
        <Template>
            <div className='animals_img_container'>
                <div className='animals_img smooth-haired'>
                    <Link className='animal_link' to="/animals/smooth-haired">Gładkowłose</Link>
                </div>
                <div className='animals_img peruvian'>
                    <Link className='animal_link' to="/animals/peruvian">Peruwianki</Link>
                </div>
                <div className='animals_img rosette'>
                    <Link className='animal_link' to="/animals/rosette">Rozetki</Link>
                </div>
                <div className='animals_img teddy'>
                    <Link className='animal_link' to="/animals/teddy">Teddy</Link>
                </div>
                <div className='animals_img skinny'>
                    <Link className='animal_link' to="/animals/skinny">Skinny</Link>
                </div>
            </div>
        </Template>
    )
}

