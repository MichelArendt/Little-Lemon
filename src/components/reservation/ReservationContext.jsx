import React, { createContext, useContext, useState } from "react";

import ReservationUtil from "../../utils/ReservationUtil";

const ReservationContext = createContext(undefined);

export const ReservationProvider = ({children}) => {
    const [reservation, setReservation] = useState(new ReservationUtil(7));

    return (
        <ReservationContext.Provider value={{
            reservation,
            setReservation
        }}>
            {children}
        </ReservationContext.Provider>
    );
}

export const useReservation = () => useContext(ReservationContext);