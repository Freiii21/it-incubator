import React, {useEffect, useState} from 'react'

type PropsType = {
}

const get2DigitsString = (number: number) => number < 10 ? "0"+number : number;

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000);

        return () => {
            clearInterval(intervalId)
        }
    }, [])


    return (
        <div>
            <span>{get2DigitsString(date.getHours())}</span>
            :
            <span>{get2DigitsString(date.getMinutes())}</span>
            :
            <span>{get2DigitsString(date.getSeconds())}</span>
        </div>
    )
}