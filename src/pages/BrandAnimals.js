import React from 'react';
import './BrandAnimals.scss';
import {useEffect, useState} from "react";
import {Template} from "../components/templates/Template";
import {useParams} from "react-router";

export const BrandAnimals = () => {

    const [animals, setAnimals] = useState([]);
    const {brand} = useParams();
    console.log(brand);

    useEffect(() => {
        if (['smooth-haired', 'peruvian', 'rosette', 'teddy', 'skinny'].includes(brand)) {
            const url = `http://localhost:3001/guinea-pigs?brand=${brand}`;
            fetch(url)
                .then((response) => response.json())
                .then((animals) => {
                    console.log(animals);
                    setAnimals(animals)
                })
        }

    }, []);

    console.log(animals);

    if (!animals) return null;

    return (
        <Template>
            <div className='animals_container container'>
                {/*<img src='../../public/images/id1.jpg' className='brand_img'/>*/}
                {animals.map(animal => (
                    <div className='animals_list'>
                        <img src={animal.image} className='brand_img'/>
                        <ul className='brand_list'>
                            <li><b>Imię:</b> {animal.name}</li>
                            <li><b>Płeć:</b> {animal.gender}</li>
                            <li><b>Cena:</b> {animal.price} zł</li>
                        </ul>
                    </div>
                ))}
            </div>
        </Template>
    )
}