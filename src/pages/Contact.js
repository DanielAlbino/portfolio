import React, { Component } from 'react';
class Contact extends Component {
    render(){
        return (
           <div class="col-6 email-form">
              
               <form>
               <h1>Contact me</h1>
                {/* Email */}
                <div class="form-group">
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" />
                </div>

                {/* Subject */}
                <div class="form-group">
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Subject" />
                </div>

                {/* Message */}
                <div class="form-group">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
                </div>
                <button class="btn btn-primary">Send</button>
                </form>
           </div>
        );
    }
}

export default Contact;