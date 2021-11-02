import React, {useState} from 'react';
import {Accordion} from './Accordion';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Accordion',
    component: Accordion,
};

const callback = action("accordion mode change event fired");

export const MenuCollapsedMode = () => <Accordion title={"Menu"} collapsed={true} onClick={callback}/>;
export const UserUncollapsedMode = () => <Accordion title={"Users"} collapsed={false} onClick={callback}/>;

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion title={"Users"} collapsed={value} onClick={() => setValue(!value)}/>
}
