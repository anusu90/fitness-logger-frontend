import React, { useState } from 'react'

export const AppContext = React.createContext();

export const AppProvider = (props) => {

    let [userState, setUserState] = useState(false);
    let [user, setUser] = useState({});

    return (
        <AppContext.Provider value={{ userState: [userState, setUserState], user: [user, setUser] }}>
            {props.children}
        </AppContext.Provider>

    )

}
