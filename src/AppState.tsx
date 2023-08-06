import React, { useState, PropsWithChildren } from "react";

interface AppStateValue {
    userName: string;
    ShoppingCart: { items: { id: number, name: string }[] };
}

const defaultContextValue: AppStateValue = {
    userName: "Tuanyang Qiu",
    ShoppingCart: { items: [] }
}

export const appContext = React.createContext(defaultContextValue);

//export the setState, so external components can access data through this interface
export const appSetStateContext = React.createContext<React.Dispatch<React.SetStateAction<AppStateValue>> | undefined>(undefined);


export const AppStateProvider: React.FC<PropsWithChildren<{}>> = (props) => {
    const [state, setState] = useState(defaultContextValue);
    return (

        <appContext.Provider value={state}>
            <appSetStateContext.Provider value={setState}>
                {props.children}
            </appSetStateContext.Provider>

        </appContext.Provider>


    );

}