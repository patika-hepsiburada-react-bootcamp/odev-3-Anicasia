import React from "react";
import { usePoll } from "../context/PollContext";
import Options from "./Options";
import { sendPoll } from "../socketApi";

function Poll() {
    const { games } = usePoll();
    const { selectedOption } = usePoll();
    const [disable, setDisable] = React.useState(false);

    const setPoint = (id) => {
    id = parseInt(id);
    setDisable(true);
    sendPoll("new-poll", id);
    };
    console.log(selectedOption);
    return (
    <div className="center">
        <div>
        <ul>
            {games.map((item, i) => (
            <Options key={i} item={item} />
            ))}
        </ul>
        </div>
        <button
        disabled={disable}
        className={"saveButton"}
        onClick={() => setPoint(selectedOption)}
        >
        {" "}
        Save{" "}
        </button>
    </div>
    );
}

export default Poll;
