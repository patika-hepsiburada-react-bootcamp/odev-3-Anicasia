import { createContext, useContext, useState } from "react";

const PollContext = createContext();

export const PollProvider = ({ children }) => {
    const [games, setPoll] = useState([
    { id: 0, name: "World of Warcraft", point: "0" },
    { id: 1, name: "Final Fantasy XIV", point: "0" },
    { id: 2, name: "Monster Hunter World", point: "0" },
    { id: 3, name: "Elder Scrolls Online", point: "0" },
    { id: 4, name: "New World", point: "0" },
    ]);
    const [selectedOption, setSelectedOption] = useState(0);

    const values = {
    games,
    selectedOption,
    setSelectedOption,
    setPoll,
    };

    return (
    <PollContext.Provider value={values}>
        {children}
    </PollContext.Provider>
    );
};

export const usePoll = () => useContext(PollContext);
