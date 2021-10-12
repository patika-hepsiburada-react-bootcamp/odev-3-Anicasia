/* eslint-disable no-lone-blocks */
import React, { useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { usePoll } from "../context/PollContext";
import { subscribeToNewPoll } from "../socketApi";
import './styles.css';

function Chart() {
    var labels = [];
    var data = [];
    const { games, setPoll } = usePoll();
    {
        games.map((item) => (labels.push(item.name), data.push(item.point)));
    }

    useEffect(() => {
        subscribeToNewPoll((games) => {
            setPoll(games);
        });
    }, [setPoll]);

    var state = {
        labels: ['World of Warcraft', 'Final Fantasy XIV', 'Monster Hunter World', 'Elder Scrolls Online', 'New World'],
        datasets: [
            {
                label: "Dataset",

                backgroundColor: [
                    "#00ffff",
                    "#ff00ff",
                    "#8000ff",
                    "#00ff99",
                    "#ff6600",
                ],
                borderWidth: 3,
                data: data,
            },
        ],
    };

    return (
        <div className="DoughnutContainer">
            <Doughnut
                data={state}
                options={{
                    title: {
                        display: true,
                        text: "Poll Results",
                        fontSize: 20,
                    },
                    legend: {
                        display: true,
                        position: "right",
                    },
                }}
            />
        </div>
    );
}

export default Chart;
