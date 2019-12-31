import React, { Component } from 'react';
import logo from '../images/logo.png'

class Navbar extends Component {
    render(){
        var linkedin = 'https://www.linkedin.com/in/daniel-albino-65036492/'
        var github = 'https://github.com/DanielAlbino'
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href=""> <img src={logo} alt="Logo" id="logo" /> DANIEL ALBINO</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav ml-auto">
                    <a class="nav-item nav-link menu-item" href="../pages/Home">Home</a>
                    <a class="nav-item nav-link menu-item" href="">Work</a>
                    <a class="nav-item nav-link menu-item" href="">About</a>
                    <a class="nav-item nav-link menu-item" href="">Contact</a>
                    <a class="nav-item nav-link github" href={linkedin}><i class="fab fa-github-square"></i></a>
                    <a class="nav-item nav-link linkedin" href={linkedin}><i class="fab fa-linkedin"></i></a>
                </div>
                </div>
            </nav> 
        );
    }
}

export default Navbar;