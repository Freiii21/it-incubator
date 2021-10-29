import React, {useState} from 'react';

type UncontrolledRatingPropsType = {
    //value: number
    //value: 0 | 1 | 2 | 3 | 4 | 5
}

export function UncontrolledRating(props: UncontrolledRatingPropsType) {
    const [value, setValue] = useState(false);

    return (
        <div>
            <Star value={value} setValue={setValue}/>
            <Star value={value} setValue={setValue}/>
            <Star value={value} setValue={setValue}/>
            <Star value={value} setValue={setValue}/>
            <Star value={value} setValue={setValue}/>
            {/*<Star selected={value > 1}/><button onClick={() => {setValue(2)}}>2</button>*/}
            {/*<Star selected={value > 2}/><button onClick={() => {setValue(3)}}>3</button>*/}
            {/*<Star selected={value > 3}/><button onClick={() => {setValue(4)}}>4</button>*/}
            {/*<Star selected={value > 4}/><button onClick={() => {setValue(5)}}>5</button>*/}
        </div>
    );
}

type StarPropsType = {
    value: boolean
    setValue: (value: boolean) => void
}


function Star(props: StarPropsType) {
    return props.value ? <span onClick={() => {props.setValue(false)}}><b>star </b> </span> : <span onClick={() => {props.setValue(true)}}>star </span>;
    }