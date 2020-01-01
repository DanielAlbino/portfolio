import React, { Component } from 'react';
import Carousel from '../components/Carousel'
class Home extends Component {
    render(){
        return (
          <div id="home">
            <Carousel/>
            {/* Cards */}
            <hr />
            <h1 class="title">In Development</h1>
            <div class="col-12 row cards">
              <div class="card  col-xs-12 col-sm-12 col-md-3 col-lg-3 " >
                <img src="" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
              <div class="card col-xs-12 col-sm-12 col-md-3 col-lg-3 " >
                <img src="" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
              <div class="card col-xs-12 col-sm-12 col-md-3 col-lg-3 " >
                <img src="" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            {/* ./ Cards */}
          </div>
          
        );
    }
}

export default Home;