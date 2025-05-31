import Contact from "../Contact/Contact";
import css from "./ContactList.module.css"

export default function ContactList({contactsData, onDelete}) {
    return (
        <ul>
            {
                contactsData.map(contact => {
                    return (<li key={contact.id}>
                        <Contact contactData={contact} onDelete={onDelete} />
                    </li>
                        
                    )
                })
            }
        </ul>
    )
}