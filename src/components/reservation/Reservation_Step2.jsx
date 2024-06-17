import { useReservation } from "./ReservationContext";
import Button from '../Button'

export default function Reservation_Step2 ({setStep}) {
    const { reservation, setReservation } = useReservation();

    return(
        <>
            <article className='page__title'>
                <h1 className='text--display-title color-primary-2'>Reservations</h1>
                <h2 className='text--display-subtitle color-highlight-1'>Step 2 of 2</h2>
            </article>

            <article className="reservation-page__container-content text--lead">
                <section className="form__submit-container">
                    <Button url={'#'} fnc={() => setStep(1)}>BACK</Button>
                </section>

                <p>
                    Reservation details:
                </p>
                <ul className="reservation-list">
                    <li>Date: <strong>{reservation.dateSelectedToDisplayText()}</strong></li>
                    <li>Time: <strong>{reservation.timeSelected}</strong></li>
                    <li>Guests: <strong>{reservation.guestsSelected}</strong></li>
                </ul>
            </article>
        </>
    );
}