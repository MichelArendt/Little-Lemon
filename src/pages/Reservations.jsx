import { useState } from "react"

import '../assets/css/Reservation.css'
import Button from "../components/Button";

export default function Reservations() {
    const [step, setStep] = useState(1);
    const date = new Date();
    const month   = date.getUTCMonth() + 1; // months from 1-12
    const day     = date.getUTCDate();
    const year    = date.getUTCFullYear();
    date.setDate(date.getDate() + 7)
    const month2   = date.getUTCMonth() + 1; // months from 1-12
    const day2     = date.getUTCDate();
    const year2    = date.getUTCFullYear();

    return (
        <>
            <article className='page__title'>
                <h1 className='text--display-title color-primary-2'>Reservations</h1>
                <h2 className='text--display-subtitle color-highlight-1'>Step {step} of 2</h2>
            </article>

            <article className="reservation-page__container-content">
                <p className="text--lead">
                    We need to check if we can accommodate your group. Please fill out the information below to check table availability for your party.
                </p>

                <section className="form__input-container">
                    <label htmlFor="reservation-time">Pick a date and time:</label>

                    <input  type="date"
                            id="reservation-time"
                            name="reservation-time"
                            // value="2018-06-12T19:30"
                            min={`${year}-0${month}-${day}`}
                            max={`${year2}-0${month2}-${day2}`}
                    />
                    {console.log(date.getDate())}
                </section>

                <section>
                    <Button url={'#'} fnc={() => setStep(2)} value={'Check availability'} />
                </section>
            </article>
        </>
    )
}