import React, {useState} from 'react';
// import {FullInput} from "./components/FullInput";
import {Input} from "./components/Input";
import {Button} from "./components/Button";

const Messages = () => {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    let [title, setTitle] = useState('')

    const callBackButtonHandler =()=>{
        addMessage(title)
        setTitle('')
    }

    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage( [newMessage, ...message])
    }
    return (
        <div className={'Messages'}>
            <Input title={title}
                   setTitle={setTitle}
            />
            <Button name={'+'}
                    callBack={callBackButtonHandler}
            />

            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    )

}

export default Messages