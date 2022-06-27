import React, {useState} from 'react';




const Task03 = () => {
    let [a, setA] = useState(0)

    const onClickHandler = () => {
        setA(++a)
    }

    const onClickZero = () => {
        setA(a = 0)
    }


return (
    <div>
        <h1>{a}</h1>
        <button onClick={(onClickHandler)}>+</button>
        <button onClick={(onClickZero)}>0</button>
    </div>
)

}

export default Task03