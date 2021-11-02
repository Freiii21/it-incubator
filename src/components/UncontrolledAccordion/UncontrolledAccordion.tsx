import React, {useState} from 'react';

type UncontrolledAccordionPropsType = {
    title: string
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    let [collapsed, setCollapsed] = useState<boolean>(true);

    return (
        <div>
            <AccordionTitle title={props.title} onClick={() => {setCollapsed(!collapsed)}}/>
            {!collapsed && <AccordionBody/>}
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
            <h3 onClick={ () => {props.onClick()}}>{props.title}</h3>
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