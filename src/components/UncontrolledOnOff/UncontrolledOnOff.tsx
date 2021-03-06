import React, {useState} from 'react';
import s from './OnOff.module.css'

type OnOffPropsType = {
    onChange: (onOffState: boolean) => void
    defaultOn?: boolean
}

export function UncontrolledOnOff(props: OnOffPropsType) {

    let [on, setOn] = useState(props.defaultOn ? props.defaultOn : false)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white',
    };
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: !on ? 'red' : 'white',
    };
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red',
    };

    const onClicked = () => {
        setOn(true)
        props.onChange(true)};
    const offClicked = () => {
        setOn(false)
        props.onChange(false)};

    return (
        <div>
            <div style={onStyle} onClick={onClicked}>on
            </div>
            <div style={offStyle} onClick={offClicked}>off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

/*
function On() {
    return (
        <div className={s.buttons}>
            <div className={`${s.on} ${s.on1}`}>on</div>
            <div className={`${s.off} ${s.off1}`}>off</div>
            <div className={`${s.light} ${s.light1}`}></div>
        </div>
    )
}

function Off() {
    return (
        <div className={s.buttons}>
            <div className={`${s.on} ${s.on2}`}>on</div>
            <div className={`${s.off} ${s.off2}`}>off</div>
            <div className={`${s.light} ${s.light2}`}></div>
        </div>
    )
}
*/
