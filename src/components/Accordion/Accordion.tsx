import React from "react";

export type AccordionPropsType = {
    title: string
    collapsed: boolean
    /**
     * Callback is called when title was clicked
     * @param collapsed value of the title
     */
    onClick: (collapsed: boolean) => void
    /**
     * Color of header text
     */
    color?: string
}

export function Accordion (props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.title} onClick={() => {props.onClick(!props.collapsed)}} color={props.color}/>
            { !props.collapsed  && <AccordionBody/> }
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