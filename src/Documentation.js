import React from 'react'
import './documentation.css';

function Documentation() {
    return (
        <div className="documentation">
        <p><strong>React Library used:</strong></p>
        <ul>
            <li>react-router-dom</li>
            <li>numeral</li>
            <li>react-chartjs-2</li>
            <li>react-leaflet</li>
        </ul>

        <p><strong>Design:</strong></p>
        <ul>
            <li>material-ui</li>
        </ul>

        <p><strong>API Used (Disease.sh):</strong></p>
        <ul>
            <li>All Cases: https://disease.sh/v3/covid-19/all</li>
            <li>Country data: https://disease.sh/v3/covid-19/countries</li>

        </ul>
        </div>
    )
}

export default Documentation
