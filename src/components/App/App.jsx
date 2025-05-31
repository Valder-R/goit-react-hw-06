import { useState, useEffect } from 'react'
import ContactForm from "../ContactForm/ContactForm"
import SearchBox from "../SearchBox/SearchBox"
import ContactList from "../ContactList/ContactList"

function App() {
  const [contacts, setContacts] = useState(() => {
    
    const savedContacts = window.localStorage.getItem("saved-contacts");

    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
    }
  );

  const [filterVal, setFilterVal] = useState("");
    
  const addContact = (contact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, contact];
    });
  };

  const delContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter(contact => contact.id !== contactId); 
    })
  };

  const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filterVal.toLowerCase()));

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact } />
      <SearchBox filter={filterVal} onFilter={setFilterVal}/>
      <ContactList contactsData={visibleContacts} onDelete={ delContact } />
    </div>
  )
}

export default App
