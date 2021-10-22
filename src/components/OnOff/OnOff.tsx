import React from 'react';
import s from './OnOff.module.css'

type OnOffPropsType = {
    mode: boolean
}

export function OnOff(props: OnOffPropsType) {
    return (
        <div>
            {props.mode && <On />}
            {!props.mode && <Off/>}
        </div>
    )
}

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
