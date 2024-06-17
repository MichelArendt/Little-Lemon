import { useState, createContext } from "react"

import '../assets/css/Reservation.css'
import ReservationUtil from "../utils/ReservationUtil";
import { ReservationProvider } from "@/components/reservation/ReservationContext";
import Reservation_Step1 from "@/components/reservation/Reservation_Step1";
import Reservation_Step2 from "@/components/reservation/Reservation_Step2";
import ReservationConfirm from "@/components/reservation/ReservationConfirm";

const ReservationContext = createContext(undefined)

export default function Reservations() {
    const [step, setStep] = useState(2);
    // const [reservation, setReservation] = useState(new ReservationUtil(7));

    // const reservation = new ReservationUtil(7);

    return (
        <>
            {/* <ReservationContext value={reservation}>
            </ReservationContext> */}
            <ReservationProvider>
                {
                    
                    {
                        3: <ReservationConfirm />,
                        2: <Reservation_Step2 setStep={setStep} />
                    }[step]
                    || <Reservation_Step1 setStep={setStep} />

                    // step == 1 ?
                    // <Reservation_Step1 setStep={setStep} /> :
                    // <Reservation_Step2 setStep={setStep} />
                }
            </ReservationProvider>
        </>
    )
}