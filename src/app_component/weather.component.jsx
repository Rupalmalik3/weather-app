import React from 'react';
import './weather.style.css';

const Weather = props => {
    return (
        <div className="container text-light">
            <div className="Card">
                <h1 className="text-dark py-3">{props.city}</h1>
                <h5 className="py-4">
                    <i className={`wi ${props.weatherIcon} display-1`} />
                </h5>
                {props.temp_celsius ? (
                    <h1 className="py-2">{props.temp_celsius}&deg;</h1>
                ) : <h3>Go on type the city's name and the country to find weather.</h3>}

                {/**show max and min temp */}
                {minmaxTemp(props.temp_min, props.temp_max)}

                <h4 className="py-3">{props.description.charAt(0).toUpperCase() +
                    props.description.slice(1)}</h4>
            </div>
        </div>
    );
};
export default Weather

function minmaxTemp(min, max) {
    if (max && min) {
        return (
            <h3>
                <span className="px-4">{min}&deg;</span>
                <span className='px-4'>{max}&deg;</span>
            </h3>
        );
    }
}
