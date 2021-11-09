import React from "react";

export type ItemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: (collapsed: boolean) => void
    items: ItemType[]
    color?: string
    onClick: (value: any) => void
}

export function Accordion (props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => {props.onChange(!props.collapsed)}} color={props.color}/>
            { !props.collapsed  && <AccordionBody items={props.items} onClick={props.onClick}/> }
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
    color?: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div>
            <h3 style={{color: props.color ? props.color : 'black'}}
                onClick={(e) => props.onClick()}>{props.title}</h3>
        </div>
    );
}

export type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props:AccordionBodyPropsType) {
    return (
        <div>
            <ul>
                {props.items.map( (i, index) => <li onClick={() => {props.onClick(i.value)}} key={index}>{i.title}</li>)}
            </ul>
        </div>
    );
}