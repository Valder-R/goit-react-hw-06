import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";

export default function ContactList() {
    
    const contacts = useSelector((state) => state.contacts.items)
    const filter = useSelector((state) => state.filters.name)
    const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
    return (
        <ul className={css.list}>
            {
                visibleContacts.map(contact => {
                    return (<li key={contact.id} className={css.item}>
                        <Contact contactData={contact}/>
                    </li>
                        
                    )
                })
            }
        </ul>
    )
}