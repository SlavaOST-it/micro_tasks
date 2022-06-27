import React from 'react';
import {CarType} from "./TheBestCar";
import TheBestCar from './TheBestCar'


const Task01 = () => {
    const topCars: Array<CarType> = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'},

    ]
    return (
        <div className="App">
            <TheBestCar cars={topCars}/>
        </div>
    );
}

export default Task01;