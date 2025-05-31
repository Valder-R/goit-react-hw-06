import css from "./Contact.module.css"

export default function Contact({ contactData, onDelete }) {
    return (
        <>
            <div className={css.info}>
                <p>{contactData.name}</p>
                <p>{contactData.number}</p>
            </div>
            <button type="button" className={css.btn} onClick={() => {
                onDelete(contactData.id);
            }}>Delete</button>
        </>
    )
    
}