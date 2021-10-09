import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

//function hello() {
//    alert("Hello world");
//}
//hello();

function App() {
    return (
        <div>
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"My Friends"}/>
            Article 1
            <Rating value={3}/>
            <Accordion title={"Value1"}/>
            <Accordion title={"value2"}/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <Rating value={6}/>
        </div>
    );
}

function PageTitle(props: any) {
    return <h1>{props.title}</h1>;
}

export default App;
