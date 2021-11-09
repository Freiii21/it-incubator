import React, {useState} from 'react';
import {Accordion, AccordionPropsType, ItemType} from './Accordion';
import {action} from '@storybook/addon-actions';
import { Story } from '@storybook/react';

export default {
    title: 'components/Accordion',
    component: Accordion,
};

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>

const callback = action("accordion mode change event fired");
const onClickCallback = action("some item was clicked");

const callbackProps = {
    onChange: callback,
    onClick: onClickCallback
}

export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
    ...callbackProps,
    titleValue: "Menu",
    collapsed: true,
    items: [],
    onClick: onClickCallback,
}

export const UserUncollapsedMode = Template.bind({})
UserUncollapsedMode.args = {
    ...callbackProps,
    titleValue: "Users",
    collapsed: false,
    items: [{title:"Dimych",value:1}, {title:"Valera",value:2}, {title:"Artem",value:3},{title:"Viktor",value:4}],
    onClick: onClickCallback,
}

export const ModeChanging: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(true)

    return <Accordion {...args} collapsed={value} onChange={() => setValue(!value)}/>
}

ModeChanging.args = {
    titleValue: "Users",
    items: [
        {title:"Dimych",value:1},
        {title:"Valera",value:2},
        {title:"Artem",value:3},
        {title:"Viktor",value:4}
    ],
    onClick: (value) => {alert(`user with ID ${value} should be happy`)},
}

