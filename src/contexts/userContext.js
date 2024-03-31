import React from "react";

const UserContext = React.createContext({name:'Shafayet'});

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer};