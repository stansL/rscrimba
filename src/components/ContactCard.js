import React from 'react';

function ContactCard(props) {
    let contact = props.contact;
    return (
        <div className="contact-card">
            <img src={contact.imgUrl} alt="Sorry" />
            <h3>{contact.name}</h3>
            <p>Phone: {contact.phone}</p>
            <p>Email: {contact.email}</p>
            
        </div>
    );
}

export default ContactCard;