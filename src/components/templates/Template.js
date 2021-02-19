import React from 'react';
import {Header} from "./Header";
import {Nav} from "./Nav";
import {Footer} from "./Footer";

export const Template = (props) => {
    return (
        <>
            <Header/>
            <Nav/>
                {props.children}
            <Footer/>
        </>
    );
};
