import {useContext} from "react";

const userContext = React.useContext;

const UserProvider = userContext.Provider;
const UserConsumer = userContext.Consumer;

export { UserProvider, UserConsumer};