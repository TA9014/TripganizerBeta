import React, { useEffect, useState } from "react";
import { auth } from '../database/firebase';

export const AuthContext = React.createContext();

function usePersistedState(key, defaultValue) {
    const [state, setState] = React.useState(
      () => JSON.parse(localStorage.getItem(key)) || defaultValue
    );
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);
    return [state, setState];
  }

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // const [userNickName, setUserNickname] = useState(null);

    const [trip, setTrip] = usePersistedState("trip",{});

    const role = currentUser ? "USER" : "GUEST";

    useEffect(() => {
        auth
            .onAuthStateChanged((user) => {
                setCurrentUser(user);
                setLoading(false);
            });
    }, []);

    // console.log(currentUser);
    if (loading) {
        return (
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "80vh",
                }}
            >
                <h1>Loading ...</h1>
            </div>
        );
    }

    return (
        <AuthContext.Provider
            value={{
                currentUser,
                setCurrentUser,
                role,
                trip,
                setTrip
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};