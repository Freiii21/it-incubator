import React, { useState } from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from './components/Rating/Rating';
import {UncontrolledOnOff} from './components/UncontrolledOnOff/UncontrolledOnOff';
import {OnOff} from './components/OnOff/OnOff';
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';

//function hello() {
//    alert("Hello world");
//}
//hello();

function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(2);
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);
    const [onOffState, setonOffState] = useState<boolean>(true);

    return (
        <div className={"App"}>
            <Accordion title={"Menu1"} collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>
            <UncontrolledAccordion title={"Menu2"}/>

            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledRating />

            <UncontrolledOnOff onChange={setonOffState}/>{onOffState.toString()}
            {/*<OnOff state={onOffState} switch={setonOffState}/>*/}
            {/*//new one*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>;
}

export default App;
