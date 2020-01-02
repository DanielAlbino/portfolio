import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Navbar extends Component {
    render(){
        var linkedin = 'https://www.linkedin.com/in/daniel-albino-65036492/'
        var github = 'https://github.com/DanielAlbino'
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <h1 class="navbar-brand"> DANIEL ALBINO</h1>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav ml-auto">
                    <Link class="nav-item nav-link menu-item" to="/">Home</Link>
                    <Link class="nav-item nav-link menu-item" to="/Work">Work</Link>
                    <Link class="nav-item nav-link menu-item" to="/About">About</Link>
                    <Link class="nav-item nav-link menu-item" to="/Contact">Contact</Link>
                    <a class="nav-item nav-link github" href={github}><i class="fab fa-github-square"></i></a>
                    <a class="nav-item nav-link linkedin" href={linkedin}><i class="fab fa-linkedin"></i></a>
                </div>
                </div>
            </nav> 
        );
    }
}

export default Navbar;
