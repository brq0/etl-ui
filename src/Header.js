import React, {Component} from 'react';
import {
Collapse,
Navbar,
NavbarToggler,
NavbarBrand,
Nav,
NavItem,
NavLink,
UncontrolledDropdown,
DropdownToggle,
DropdownMenu,
DropdownItem } from 'reactstrap';

class Header extends React.Component {  
        constructor(props) {
          super(props);
      
          this.toggle = this.toggle.bind(this);
          this.state = {
            isOpen: false
          };
        }
        toggle() {
          this.setState({
            isOpen: !this.state.isOpen
          });
        }

    render() {
        return (
            <div className="Header">
                <Navbar color="success" dark>
                    <div className="container">
                    <NavbarBrand className="ml-auto mr-auto" href="/">Uniwersytet Ekonomiczny w Krakowie ETL-app</NavbarBrand>
                    </div>
                </Navbar>

         </div>
        );
    }
}

export default Header;
