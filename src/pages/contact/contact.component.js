import React from 'react';

import './contact.scss'

class ContactPage extends React.Component {

 render() {
    return (
        <div className="contact-page">
            <div>
            <h2>Find us at</h2>
            <p>Školska 1, Novi Sad</p>
            </div>

            <br />

<div>
            <h2>Call us at</h2>
            <p>064123456</p>
            </div>

            <br />

<div>
            <h2>Write to us at</h2>
            <p>crwn-clothing@crwn.com</p>
            </div>
        </div>       
    )
 }
}

export default ContactPage;