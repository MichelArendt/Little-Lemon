import React from 'react';
import { useReservation } from "./ReservationContext";

export default function ReservationConfirm() {
    const { reservation } = useReservation();

    return(
        <>
            <article className='page__title'>
                <h1 className='text--display-title color-primary-2'>Reservation</h1>
                <h2 className='text--display-subtitle color-highlight-1'>CONFIRMED!</h2>
            </article>

            <article className="reservation-page__container-content text--lead">
                <p>
                    Thank you for choosing our restaurant! We are pleased to confirm your reservation with the following details:
                </p>
                <ul className="reservation-list">
                    <li>Date: <strong>{reservation.dateSelectedToDisplayText()}</strong></li>
                    <li>Time: <strong>{reservation.timeSelected}</strong></li>
                    <li>Guests: <strong>{reservation.guestsSelected}</strong></li>
                    <li>Name: <strong>{reservation.firstName} {reservation.lastName}</strong></li>
                    <li>Email: <strong>{reservation.email}</strong></li>
                </ul>
                <p>
                    We are excited to welcome you and ensure you have a delightful dining experience. If you have any special requests or need to make any changes to your reservation, please do not hesitate to contact us.
                </p>
            </article>
        </>
    );
}