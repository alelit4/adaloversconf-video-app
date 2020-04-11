import React from 'react';

const Header = ({title}) => ( <div className="header-content">
    <div className="header-title-text"> My list of {title || ' favorites'} </div>
    </div> );

export default Header;
