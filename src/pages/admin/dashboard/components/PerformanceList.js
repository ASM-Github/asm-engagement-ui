import React from "react";
import { Line } from "react-chartjs-2";
import { GraphFormatterData, GraphFormatterLabel } from '../../../../utils/graph-formatter'
// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";



export default function Graph({ scores: ScoresData }) {

    const scoreSliced = ScoresData.slice(0, 10);
    const scores = GraphFormatterData(scoreSliced);
    const label = GraphFormatterLabel(scoreSliced);

    console.log(scores)

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Graph Fellow against Score',
            },
        },
    };

    const data = {
        labels: label,
        datasets: [
            {
                label: "Score",
                data: scores,
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
            },
        ]
    };

    return (
        <div>
            <Line data={data} options={options} />
        </div>
    );
}

