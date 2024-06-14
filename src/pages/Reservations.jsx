import { useState } from "react"
import Button from "../components/Button";

export default function Reservations() {
    const [step, setStep] = useState(1);

    return (
        <>
            <article className='page__title'>
                <h1 className='text--display-title color-primary-2'>Reservations</h1>
                <h2 className='text--display-subtitle color-highlight-1'>Step {step} of 2</h2>
            </article>
            Reservations

            <Button url={'#'} onClick={() => {setStep(2); console.log(step)}} value={'Check availability'} />
        </>
    )
}