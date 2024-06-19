import { useState } from "react"
import { Formik, Form, Field } from 'formik';

import { useReservation } from "./ReservationContext";
import Button from '../Button'

function validateName(value) {
    let error;
    if (value.length == 0) {
        return 'Required!'
    }
    if(value.length < 2){
        error = 'Too short!';
    }

    return error;
}

function validateEmail(value) {
    let error;
    if (!value) {
        error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid email address';
    }
    return error;
}

export default function Reservation_Step2 ({setStep}) {
    const { reservation, setReservation } = useReservation();

    const [firstName, setFirstName] = useState(reservation.firstName);
    const [lastName, setLastName] = useState(reservation.lastName);

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
        reservation.firstName = e.target.value;
    }

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
        reservation.lastName = e.target.value;
    }

    return(
        <>
            <article className='page__title'>
                <h1 className='text--display-title color-primary-2'>Reservations</h1>
                <h2 className='text--display-subtitle color-highlight-1'>Step 2 of 2</h2>
            </article>

            <article className="reservation-page__container-content text--lead">
                <section className="form__submit-container">
                    <Button url={'#'} fnc={() => setStep(1)} style={{width: '200px'}}>BACK</Button>
                </section>

                <p>
                We can accommodate you and your guests! Below are the reservation details you've specified so far:
                </p>
                <ul className="reservation-list">
                    <li>Date: <strong>{reservation.dateSelectedToDisplayText()}</strong></li>
                    <li>Time: <strong>{reservation.timeSelected}</strong></li>
                    <li>Guests: <strong>{reservation.guestsSelected}</strong></li>
                </ul>
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                    }}
                    onSubmit={values => {
                        // same shape as initial values
                        console.log('FORM: ' + values.email);
                        reservation.firstName = values.firstName;
                        reservation.lastName = values.lastName;
                        reservation.email = values.email;
                        console.log('email: ' + reservation.email);
                        setStep(3);
                        window.scrollTo(0, 0);
                    }}
                >
                    {({ errors, touched, isValidating }) => (
                        <Form>
                            <p>
                                Please fill out the rest of the details:
                            </p>

                            <section className="form__input-container">
                                <label htmlFor="firstName" className="text--section-title">First name:</label>

                                <Field
                                    name="firstName"
                                    id="firstName"
                                    className="text--section-categories"
                                    placeholder="Your first name"
                                    // value={firstName}
                                    // onChange={handleFirstNameChange}
                                    validate={validateName}
                                />
                                {errors.firstName && touched.firstName ? (
                                  <div className="form__error">{errors.firstName}</div>
                                ) : null}
                            </section>

                            <section className="form__input-container">
                                <label htmlFor="last-name" className="text--section-title">Last name:</label>

                                <Field
                                    name="lastName"
                                    id="lastName"
                                    placeholder="Your last name"
                                    className="text--section-categories"
                                    // value={lastName}
                                    // onChange={handleLastNameChange}
                                    validate={validateName}
                                />
                                {errors.lastName && touched.lastName ? (
                                  <div className="form__error">{errors.lastName}</div>
                                ) : null}
                            </section>

                            <section className="form__input-container">
                                <label htmlFor="email" className="text--section-title">Email:</label>

                                <Field name="email" type="email" validate={validateEmail} />
                                {errors.email && touched.email ? <div className="form__error">{errors.email}</div> : null}
                            </section>

                            <button type="submit">Confirm Reservation!</button>
                        </Form>
                    )}
                </Formik>
            </article>
        </>
    );
}