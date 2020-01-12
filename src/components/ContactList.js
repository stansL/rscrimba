import React from 'react';
import ContactCard from './ContactCard';

function ContactList() {
    return (
        <div className="contacts">
            <ContactCard
                contact={{
                    name: "Contact Name",
                    imgUrl: "http://placekitten.com/300/200",
                    phone: "(222) 555-1234",
                    email: "Email: Mr. Someone Here"
                }}
            />
            <ContactCard
                contact={{
                    name: "Contact Name",
                    imgUrl: "http://placekitten.com/300/200",
                    phone: "(222) 555-1234",
                    email: "Email: Mr. Someone Here"
                }}
            />
            <ContactCard
                contact={{
                    name: "Contact Name",
                    imgUrl: "http://placekitten.com/300/200",
                    phone: "(222) 555-1234",
                    email: "Email: Mr. Someone Here"
                }}
            />


        </div>
    );
}

export default ContactList;