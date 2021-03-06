import React, {useState} from 'react';

type OnOffPropsType = {
    state: boolean
    switch: (state: boolean) => void
}

export function OnOff(props: OnOffPropsType) {
    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.state ? 'green' : 'white',
    };
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: !props.state ? 'red' : 'white',
    };
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.state ? 'green' : 'red',
    };

    return (
        <div>
            <div style={onStyle} onClick={() => {
                props.switch(true)
            }}>on
            </div>
            <div style={offStyle} onClick={() => {
                props.switch(false)
            }}>off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )
}
