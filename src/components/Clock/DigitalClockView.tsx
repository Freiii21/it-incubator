import React from 'react';
import {ClockViewType} from './Clock';

export const get2DigitsString = (number: number) => number < 10 ? '0' + number : number;

export const DigitalClockView = (props: ClockViewType) => {
    return <>
        <span>{get2DigitsString(props.date.getHours())}</span>
        :
        <span>{get2DigitsString(props.date.getMinutes())}</span>
        :
        <span>{get2DigitsString(props.date.getSeconds())}</span>
    </>
}