import React from 'react';
import {
Navbar,
NavbarBrand} from 'reactstrap';

class Header extends React.Component {  
    render() {
        return (
            <div className="header">
                <Navbar dark>
                    <div className="container">
                    <NavbarBrand className="ml-auto mr-auto" href="/">Uniwersytet Ekonomiczny w Krakowie ETL-app</NavbarBrand>
                    </div>
                </Navbar>

         </div>
        );
    }
}

export default Header;