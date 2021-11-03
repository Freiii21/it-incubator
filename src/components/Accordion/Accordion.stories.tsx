import React, {useState} from 'react';
import {Accordion, AccordionPropsType} from './Accordion';
import {action} from '@storybook/addon-actions';
import { Story } from '@storybook/react';

export default {
    title: 'Accordion',
    component: Accordion,
};

const callback = action("accordion mode change event fired");

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>
const callbackProps = {
    onClick: callback
}

export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
    ...callbackProps,
    title: "Menu",
    collapsed: true,
}

export const UserUncollapsedMode = Template.bind({})
UserUncollapsedMode.args = {
    ...callbackProps,
    title: "Users",
    collapsed: false,
}

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion title={"Users"} collapsed={value} onClick={() => setValue(!value)}/>
}
