import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const AttendanceChart = ({ attendance }) => {
    const isLowAttendance = attendance < 80;
    const backgroundColor = isLowAttendance ? 'rgba(255, 99, 132, 0.2)' : 'rgba(75, 192, 192, 0.2)';
    const borderColor = isLowAttendance ? 'rgba(255, 99, 132, 1)' : 'rgba(75, 192, 192, 1)';

    const data = {
        labels: ['Attendance'],
        datasets: [
            {
                label: 'Attendance Percentage',
                data: [attendance],
                backgroundColor: backgroundColor,
                borderColor: borderColor,
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
            },
        },
    };

    return <Bar data={data} options={options} />;
};

export default AttendanceChart;
