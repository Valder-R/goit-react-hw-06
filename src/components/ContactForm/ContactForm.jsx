import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { nanoid } from 'nanoid';
import { addContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";


export default function ContactForm() {

    const dispatch = useDispatch();

    const initialValues = {
        name: "",
        number: ""
    };

    const nameFieldId = useId();
    const numberFieldId = useId();

    const contactShema = Yup.object().shape({
        name: Yup.string().min(2, "Mininmum 2 characters").max(50, "Maximum 50 characters").required("Required"),
        number: Yup.string().min(2, "Mininmum 2 characters").max(50, "Maximum 50 characters").required("Required")
    })
    
    const handleSubmit = (values, actions) => {
        dispatch(addContact({
            id: nanoid(),
            ...values
        }));
        actions.resetForm();
    }

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={contactShema} >
            <Form className={css.form}>
                <label htmlFor={nameFieldId}>Name</label>
                <Field type="text" name="name" id={nameFieldId} />
                <ErrorMessage name="name" component="span" />
                <label htmlFor={numberFieldId} className={css.label }>Number</label>
                <Field type="text" name="number" id={numberFieldId} />
                <ErrorMessage name="number" component="span" />
                <button type="submit">Add contact</button>
            </Form>
        </Formik>
    )
}