import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { act } from 'react';

import ReservationUtil from "../../utils/ReservationUtil";
import { ReservationProvider } from './ReservationContext';
import Reservation_Step2 from './Reservation_Step2';

function renderReservation({ reservation, setReservation, step, setStep }) {
    return render(
        <ReservationProvider value={{ reservation, setReservation }}>
            <Router>
                <Reservation_Step2 setStep={setStep} />
            </Router>
        </ReservationProvider>
    );
}

test("Submit without filling anything", async () => {
    let reservation = new ReservationUtil(7);
    const setReservation = (res) => { reservation = res };
    let step = 2;
    const setStep = (st) => { step = st };

    reservation.timeSelected = '18:00';
    reservation.guestsSelected = 1;

    await act(async () => {
        renderReservation({ reservation, setReservation, step, setStep });
    });

    await act(async () => {
        fireEvent.submit(screen.getByRole('button', { name: /confirm reservation!/i }));
    });

    const requiredElements = screen.getAllByText(/Required!/i);
    requiredElements.forEach(element => {
        expect(element).toBeInTheDocument();
    });
});
