import React from 'react';
import Button from './Button'

const Task02 = () => {
    const Button1Foo = (subscriber:string, age:number) => {
        console.log(subscriber, age)
    }

    const Button2Foo = (subscriber:string) => {
        console.log(subscriber)
    }

    const Button3Foo=()=>{
        console.log("Im stupid button")
    }

    return (
        <div className="App">
            <Button name={"YouTubeChanel-1"} callBack={()=>Button1Foo("Im Vasya", 21)}/>
            <Button name={"YouTubeChanel-2"} callBack={()=>Button2Foo("Im Ivan")}/>
            <Button name={"Im stupid button"} callBack={Button3Foo}/>
        </div>
    );
}

export default Task02;