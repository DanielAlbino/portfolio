import React, { Component } from 'react';
import logo from '../images/logo.png'
import {Link} from 'react-router-dom'

class Navbar extends Component {
    render(){
        var linkedin = 'https://www.linkedin.com/in/daniel-albino-65036492/'
        var github = 'https://github.com/DanielAlbino'
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link class="navbar-brand" to="/"> <img src={logo} alt="Logo" id="logo" /> DANIEL ALBINO</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav ml-auto">
                    <Link class="nav-item nav-link menu-item" to="/portfolio">Home</Link>
                    <Link class="nav-item nav-link menu-item" to="/portfolio/Work">Work</Link>
                    <Link class="nav-item nav-link menu-item" to="/portfolio/About">About</Link>
                    <Link class="nav-item nav-link menu-item" to="/portfolio/Contact">Contact</Link>
                    <a class="nav-item nav-link github" href={github}><i class="fab fa-github-square"></i></a>
                    <a class="nav-item nav-link linkedin" href={linkedin}><i class="fab fa-linkedin"></i></a>
                </div>
                </div>
            </nav> 
        );
    }
}

export default Navbar;