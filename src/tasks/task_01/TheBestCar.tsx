import React from 'react';

export type CarType = {
    manufacturer: string,
    model: string
}

type TheBestCarTypeProps = {
    cars: CarType[]
}


const TheBestCar = (props: TheBestCarTypeProps) => {
    return (
        <table>
            {props.cars.map((objectFromCarType, index: number) => {
                return (

                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{objectFromCarType.manufacturer}</td>
                        <td>model: {objectFromCarType.model}</td>
                    </tr>
                )
            })}
        </table>
    )
}

export default TheBestCar
