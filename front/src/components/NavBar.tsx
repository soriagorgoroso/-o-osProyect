import React from 'react';
import foto from '../assets/images/logo.png';

import { navbar } : any from '../assets/styles.js';

export const NavBar = () => {
    return (
        <nav className={navbar}>
            <div>
                <a>
                    <figure>
                        <img src={foto} alt="" />
                    </figure>
                </a>
            </div>
            <div>NavBar</div>
            <div>NavBar</div>
        </nav>
    );
};
