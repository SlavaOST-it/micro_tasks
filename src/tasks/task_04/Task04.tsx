import React, {useState} from 'react';
import NewComponent from "./NewComponent";


export type FilterMoneyType = 'All' | 'Dollars' | 'RUBLS'

// type MoneyType = {
//     banknots: string,
//     value: number,
//     number: string
// }

// type OnClickNameType = {
//     nameButton: string
// }

const Task04 = () => {
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState<FilterMoneyType>('All');

    let currentMoney = money;
    if (filter === 'RUBLS') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'RUBLS')
    }
    if (filter === 'Dollars') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Dollars')
    }


    const onClickFilterHandler = (nameButton: FilterMoneyType) => {
        setFilter(nameButton)
    }
    return (
        <NewComponent
            currentMoney={currentMoney}
            onClickFilterHandler = {onClickFilterHandler}
    />
)
}

export default Task04