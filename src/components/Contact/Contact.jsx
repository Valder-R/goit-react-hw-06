import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ contactData }) {

    const dispatch = useDispatch();
    return (
        <>
            <div className={css.info}>
                <p>{contactData.name}</p>
                <p>{contactData.number}</p>
            </div>
            <button type="button" className={css.btn} onClick={() => {
                dispatch(deleteContact(contactData.id));
            }}>Delete</button>
        </>
    )
    
}