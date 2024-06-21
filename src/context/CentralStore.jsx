import { createContext, useContext, useRef, useState } from "react";

export const CentralStore = createContext();

const StoreProvider = ({children}) => {

    const heroRef = useRef(null)

    return (
        <CentralStore.Provider value={{heroRef}}>
            {children}
        </CentralStore.Provider>
    )
}

export function useStore () {
    const context = useContext(CentralStore);

    if(!context) {
        const contextName = CentralStore.displayName || "Context"
        throw new Error(`${contextName} must be used within the provider`)
    }

    return context
}


export default StoreProvider 