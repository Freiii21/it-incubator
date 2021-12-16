import React, {useMemo, useState} from 'react';

export default {
    title: 'UseState demo'
}

function generateData(){
    return 123456789;
}

export const Example1 = () => {
    //const initValue = useMemo(generateData, []);
    const [counter,setCounter] = useState(generateData);
    const changer = (state:number) => (state + 1);
    return (
        <div>
            <button onClick={() => setCounter(changer)}>+</button>
            {counter}
        </div>
    )
}