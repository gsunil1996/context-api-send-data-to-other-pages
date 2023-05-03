import { createContext, useReducer } from "react";
import counterReducer from "./reducers/counterReducer";
import counterInitialState from "./initialStates/counterInitialState";

// Create Context
export const GlobalContext = createContext();

// Provider Component
export const GlobalProvider = ({ children }) => {
    const [counterState, counterDispatch] = useReducer(counterReducer, counterInitialState)
    const provides = {
        counterState,
        counterDispatch
    }

    return (
        <GlobalContext.Provider value={provides}>{children}</GlobalContext.Provider>
    );
}