import React, {useReducer} from 'react';
import {reducer, TOGGLE_CONSTANT} from './reducer';

type UncontrolledAccordionPropsType = {
    title: string
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    let [state, dispatch] = useReducer(reducer, {collapsed: false});

    return (
        <div>
            <AccordionTitle title={props.title} onClick={() => {
                dispatch({type: TOGGLE_CONSTANT})
            }}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div>
            <h3 onClick={() => {
                props.onClick()
            }}>{props.title}</h3>
        </div>
    );
}

function AccordionBody() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    );
}