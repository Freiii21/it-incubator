import React, {useEffect, useMemo, useState} from 'react';

export default {
    title: 'UseEffect demo'
}

export const SimpleExample = () => {
    const [counter,setCounter] = useState(1);

    useEffect(() => {
        document.title = counter.toString();
        //api.getUsers().then('')
        //setInterval
        //indexedDB
        //document.getElementId
        //document.title = "User ";
    }, [counter])

    return (
        <div>
            Hello, {counter}
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </div>
    )
}