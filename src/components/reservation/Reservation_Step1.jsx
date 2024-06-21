import React, { useState, useEffect } from "react"

import { useReservation } from "./ReservationContext";
import Button from '../Button'

export default function Reservation_Step1 ({setStep}) {
    const { reservation, setReservation } = useReservation();
    const [availableDates, setAvailableDates] = useState([]);
    const [ result, setResult ] = useState(null);

    // Use local states to trigger re-render when values change
    const [selectedDate, setSelectedDate] = useState( reservation.dateToInputString(reservation.dateSelected) );
    const [selectedTime, setSelectedTime] = useState(reservation.timeSelected);
    const [selectedGuests, setSelectedGuests] = useState(reservation.guestsSelected);

    const handleDateChange = (e) => {
        const date = e.target.value;

        if ( reservation.isDateValid(date) ){
            reservation.setReservationDateFromFormOnChange(date);
            setSelectedDate(date);
            fetchData(reservation.dateSelected);
        }
    };

    const handleTimeChange = (e) => {
        const time = e.target.value;
        reservation.setReservationTimeFromFormOnChange(time);
        setSelectedTime(time);
    }

    const handleGuestChange = (e) => {
        const guests = e.target.value;
        reservation.setGuestsFromFormOnChange(guests);
        setSelectedGuests(guests);
    }

    const checkAvailability = (e) => {
        setStep(2);
        window.scrollTo(0, 0);
    }

    const fetchData = async (date) => {
        try {
            const data = await window.fetchAPI(date);
            setResult(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData(new Date());
    }, []);

    useEffect(() => {
        if (Array.isArray(result)) {
            setAvailableDates(result);
            setSelectedTime(result[0]); // Set default selected time to the first available date
            if (!selectedTime && result.length > 0) {
            }
        }
    }, [result]);

    return(
        <>
            <article className='page__title'>
                <h1 className='text--display-title color-primary-2'>Reservations</h1>
                <h2 className='text--display-subtitle color-highlight-1'>Step 1 of 2</h2>
            </article>

            <article className="reservation-page__container-content">
                <p className="text--lead">
                    We need to check if we can accommodate your group. Please fill out the information below to check table availability for your party.
                </p>

                <section className="form__input-container">
                    <label htmlFor="reservation-date" className="text--section-title">Pick a date:</label>

                    <input  type="date"
                            id="reservation-date"
                            name="reservation-date"
                            className="text--section-categories"
                            value={selectedDate}
                            min={reservation.dateToInputString(reservation.dateToday)}
                            max={reservation.dateToInputString(reservation.dateReservationLimit)}
                            onChange={handleDateChange}
                    />
                </section>

                <section className="form__input-container">
                    <label htmlFor="reservation-time" className="text--section-title">Pick a time:</label>

                    <select
                        name="reservation-time"
                        id="reservation-time"
                        className="text--section-categories"
                        value={selectedTime}
                        onChange={handleTimeChange}
                    >
                        {availableDates && availableDates.map((date, index) => (
                            <option key={index} value={date}>{date}</option>
                        ))}
                    </select>
                </section>

                <section className="form__input-container">
                    <label htmlFor="reservation-time" className="text--section-title">Number of guests:</label>

                    <select
                        name="reservation-time"
                        id="reservation-time"
                        className="text--section-categories"
                        value={selectedGuests}
                        onChange={handleGuestChange}
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5+">5+</option>
                    </select>
                </section>

                <section className="form__submit-container">
                    <Button url={'#'} fnc={checkAvailability}>Check availability</Button>
                </section>
            </article>
        </>
    );
}