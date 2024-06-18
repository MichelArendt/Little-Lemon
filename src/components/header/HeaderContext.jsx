import { createContext, useContext, useState } from "react";

const HeaderContext = createContext(undefined);

export const HeaderProvider = ({children}) => {
    const MenuState = Object.freeze({
        DEFAULT: 'default',
        OPEN: 'open'
    })

    const [menuState, setMenuState] = useState(MenuState.DEFAULT);

    return (
        <HeaderContext.Provider value={{
            menuState, 
            setMenuState,
            MenuState
        }}>
            {children}
        </HeaderContext.Provider>
    );
}

export const useHeader = () => useContext(HeaderContext);