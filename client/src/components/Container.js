import Chart from "./Chart";
import Poll from "./Poll";
import { connectSocket, subscribeToNewPoll } from "../socketApi";
import { useEffect } from "react";
import { usePoll } from "../context/PollContext";

function Container() {
    const { setPoll } = usePoll();

    useEffect(() => {
    connectSocket();
    subscribeToNewPoll ((data) => {
        console.log(data);
        setPoll([...data]);
        });
    connectSocket();
    }, [setPoll]);
    return (
    <div className="container">
        <Poll />
        <Chart />
    </div>
    );
}

export default Container;