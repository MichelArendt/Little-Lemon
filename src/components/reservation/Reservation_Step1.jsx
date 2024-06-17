import { useState, useEffect } from "react"

import { useReservation } from "./ReservationContext";
import Button from '../Button'

export default function Reservation_Step1 ({setStep}) {
    const [ loading, setLoading ] = useState(false);
    const { reservation, setReservation } = useReservation();

    // Use local states to trigger re-render when values change
    const [selectedDate, setSelectedDate] = useState( reservation.dateToInputString(reservation.dateSelected) );
    const [selectedTime, setSelectedTime] = useState(reservation.timeSelected);
    const [selectedGuests, setSelectedGuests] = useState(reservation.guestsSelected);
    
    const handleDateChange = (e) => {
        const date = e.target.value;

        if ( reservation.isDateValid(date) ){
            console.log(date)
            reservation.setReservationDateFromFormOnChange(date);
            setSelectedDate(date);
        } else {
            // INVALID TIME
            console.log(e.target)
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
        console.log(reservation.guestsSelected)
    }

    const checkAvailability = (e) => {
        setLoading(true);
    }

    useEffect(() => {
        let timer;
        if (loading) {
            console.log('timer began');

            // Set a timeout to run after 5 seconds
            timer = setTimeout(() => {
                console.log('timer ended');
                setLoading(false);
                setStep(2);
            }, 2000);
        }

        // Cleanup function to clear the timeout
        return () => {
            if (timer) {
                clearTimeout(timer);
                console.log('timer cleared');
            }
        };
    }, [loading]); // Dependency array

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
                        <option value="18:00">18:00</option>
                        <option value="18:30">18:30</option>
                        <option value="19:00">19:00</option>
                        <option value="19:30">19:30</option>
                        <option value="20:00">20:00</option>
                        <option value="20:30">20:30</option>
                        <option value="21:00">21:00</option>
                        <option value="21:30">21:30</option>
                        <option value="22:00">22:00</option>
                        <option value="22:30">22:30</option>
                        <option value="23:00">23:00</option>
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