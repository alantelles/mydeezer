import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import navbarLinks from '../../data/links';

class NavBar extends React.Component {
    makeLinks = () => {
        return navbarLinks.map((e) => {
            return (
                <li className="nav-item">
                    <a className="nav-link" href={e.href}>{e.text}</a>
                </li>
            )
        })
    }
    render (){
        return (
            <BrowserRouter>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <ul className="navbar-nav">
                        {this.makeLinks()}
                    </ul>
                </nav>
                
            </BrowserRouter>
        )
    }
}
export default NavBar