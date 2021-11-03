import React, {useState} from 'react';
import {Accordion, AccordionPropsType} from './Accordion';
import {action} from '@storybook/addon-actions';
import { Story } from '@storybook/react';

export default {
    title: 'components/Accordion',
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

export const ModeChanging: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(true)

    return <Accordion {...args} collapsed={value} onClick={() => setValue(!value)}/>
}

ModeChanging.args = {
    title: "Users"
}

