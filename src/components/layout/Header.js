import React from "react";

import '../../styles/components/layout/Header.css'

const Header= (props) => {
    return (
        <header>
            <div className="holder holderheader">
                <img className="logo" src="img/logocelularesx.png" width="100" alt="Celulares X"/>
                <h1>Celulandia</h1>
            </div>
        </header>
    );
}

export default Header;