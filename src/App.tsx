import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from './components/OnOff/OnOff';
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';

//function hello() {
//    alert("Hello world");
//}
//hello();

function App() {
    return (
        <div>
            {/*<Accordion title={"Value1"} collapsed={true}/>*/}
            {/*<Accordion title={"value2"} collapsed={false}/>*/}
            <UncontrolledAccordion title={"value1"}/>
            <UncontrolledAccordion title={"value2"}/>
            <UncontrolledRating />
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            <OnOff on={true}/>
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
