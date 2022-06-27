import React from 'react';
import {FilterMoneyType} from "./Task04";



type CurrentType = {
    currentMoney: Array<MoneyType>,
    onClickFilterHandler: (name: FilterMoneyType) => void
}

type MoneyType = {
    banknots: string,
    value: number,
    number: string
}

const NewComponent = (props: CurrentType) => {
    return (
        <div>
            <ul>
                {props.currentMoney.map((objFromMoney, number) => {
                    return (
                        <li key={number}>
                            <span>{objFromMoney.banknots}</span>
                            <span>{objFromMoney.value}</span>
                            <span>{objFromMoney.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={() => props.onClickFilterHandler('All')}>All</button>
                <button onClick={() => props.onClickFilterHandler('RUBLS')}>RUBLS</button>
                <button onClick={() => props.onClickFilterHandler('Dollars')}>Dollars</button>
            </div>
        </div>
    )
}

export default NewComponent