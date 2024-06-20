import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { act } from 'react';

import ReservationUtil from "../../utils/ReservationUtil";
import { ReservationProvider } from './ReservationContext';
import Reservation_Step2 from './Reservation_Step2';

function renderReservation() {
    let reservation = new ReservationUtil(7);
    const setReservation = (res) => { reservation = res };
    let step = 2;
    const setStep = (st) => { step = st };

    reservation.timeSelected = '18:00';
    reservation.guestsSelected = 1;

    return render(
        <ReservationProvider value={{ reservation, setReservation }}>
            <Router>
                <Reservation_Step2 setStep={setStep} />
            </Router>
        </ReservationProvider>
    );
}

test("Not filling anything shows 3 required fields", async () => {

    await act(async () => {
        renderReservation();
    });

    await act(async () => {
        fireEvent.submit(screen.getByRole('button', { name: /confirm reservation!/i }));
    });

    const requiredElements = screen.getAllByText(/Required!/i);
    expect(Object.keys(requiredElements).length).toBe(3);
});

test("Filling in the first name shows 2 other required fields", async () => {

    await act(async () => {
        renderReservation();
    });

    await act(async () => {
        fireEvent.change(screen.getByLabelText(/First name/i), {
            target: { value: 'John' }
        });

        fireEvent.submit(screen.getByRole('button', { name: /confirm reservation!/i }));
    });

    const requiredElements = screen.getAllByText(/Required!/i);
    expect(Object.keys(requiredElements).length).toBe(2);
});

test("Filling in the first and last name shows 1 other required field", async () => {

    await act(async () => {
        renderReservation();
    });

    await act(async () => {
        fireEvent.change(screen.getByLabelText(/First name/i), {
            target: { value: 'John' }
        });
        fireEvent.change(screen.getByLabelText(/Last name/i), {
            target: { value: 'Doe' }
        });

        fireEvent.submit(screen.getByRole('button', { name: /confirm reservation!/i }));
    });

    const requiredElements = screen.getAllByText(/Required!/i);
    expect(Object.keys(requiredElements).length).toBe(1);
});

test("Filling in the email shows 2 other required fields", async () => {

    await act(async () => {
        renderReservation();
    });

    await act(async () => {
        fireEvent.change(screen.getByLabelText(/Email/i), {
            target: { value: 'email@email.com' }
        });

        fireEvent.submit(screen.getByRole('button', { name: /confirm reservation!/i }));
    });

    const requiredElements = screen.getAllByText(/Required!/i);
    expect(Object.keys(requiredElements).length).toBe(2);
});

test("Filling in too short of a first name displays 1 too short message", async () => {

    await act(async () => {
        renderReservation();
    });

    await act(async () => {
        fireEvent.change(screen.getByLabelText(/First name/i), {
            target: { value: 'J' }
        });

        fireEvent.submit(screen.getByRole('button', { name: /confirm reservation!/i }));
    });

    const requiredElements = screen.getAllByText(/Too short!/i);
    expect(Object.keys(requiredElements).length).toBe(1);
});

test("Filling in too short of a last name displays 1 too short message", async () => {

    await act(async () => {
        renderReservation();
    });

    await act(async () => {
        fireEvent.change(screen.getByLabelText(/Last name/i), {
            target: { value: 'D' }
        });

        fireEvent.submit(screen.getByRole('button', { name: /confirm reservation!/i }));
    });

    const requiredElements = screen.getAllByText(/Too short!/i);
    expect(Object.keys(requiredElements).length).toBe(1);
});

test("Filling in too short of a first and last name displays 2 too short messages", async () => {

    await act(async () => {
        renderReservation();
    });

    await act(async () => {
        fireEvent.change(screen.getByLabelText(/First name/i), {
            target: { value: 'J' }
        });

        fireEvent.change(screen.getByLabelText(/Last name/i), {
            target: { value: 'D' }
        });

        fireEvent.submit(screen.getByRole('button', { name: /confirm reservation!/i }));
    });

    const requiredElements = screen.getAllByText(/Too short!/i);
    expect(Object.keys(requiredElements).length).toBe(2);
});

test("Filling in all fields but invalid email shows invalid email", async () => {

    await act(async () => {
        renderReservation();
    });

    await act(async () => {
        fireEvent.change(screen.getByLabelText(/First name/i), {
            target: { value: 'John' }
        });

        fireEvent.change(screen.getByLabelText(/Last name/i), {
            target: { value: 'Doe' }
        });

        fireEvent.change(screen.getByLabelText(/Email/i), {
            target: { value: 's' }
        });

        fireEvent.submit(screen.getByRole('button', { name: /confirm reservation!/i }));
    });

    const requiredElements = screen.getAllByText(/Invalid email address/i);
    expect(Object.keys(requiredElements).length).toBe(1);
});

test("Fill everything as expected goes to reservation confirmation", async () => {
    let reservation = new ReservationUtil(7);
    const setReservation = (res) => { reservation = res };
    let step = 2;
    const setStep = (st) => { step = st };

    reservation.timeSelected = '18:00';
    reservation.guestsSelected = 1;

    render(
        <ReservationProvider value={{ reservation, setReservation }}>
            <Router>
                <Reservation_Step2 setStep={setStep} />
            </Router>
        </ReservationProvider>
    );


    await act(async () => {
        fireEvent.change(screen.getByLabelText(/First name/i), {
            target: { value: 'John' }
        });

        fireEvent.change(screen.getByLabelText(/Last name/i), {
            target: { value: 'Doe' }
        });

        fireEvent.change(screen.getByLabelText(/Email/i), {
            target: { value: 'john@doe.com' }
        });

        fireEvent.submit(screen.getByRole('button', { name: /confirm reservation!/i }));
    });

    expect(step).toBe(3);
});