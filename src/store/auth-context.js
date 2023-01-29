import React from "react";

// Creates the context that's going to hold the user name login information.
const authContext = React.createContext({
    status: null,
    login: () => {

    }
})

export default authContext