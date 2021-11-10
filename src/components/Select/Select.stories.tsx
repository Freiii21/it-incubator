import {Select, SelectPropsType} from './Select'
import { Story } from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {useState} from 'react';

export default {
    title: 'components/Select',
    component: Select,
};

const Template: Story<SelectPropsType> = (args) => <Select {...args}/>

export const WithValue = Template.bind({})
WithValue.args = {
    value: "2",
    onChange: action("Value changed"), //we use "action" instead of the real function from the component's props.
    items: [
        {title:"Australia",value:"1"},
        {title:"Canada",value:"2"},
        {title:"USA",value:"3"},
        {title:"Japan",value:"4"}
    ]
}

export const WithoutValue = Template.bind({})
WithoutValue.args = {
    onChange: action("Value changed"), //we use "action" instead of the real function from the component's props.
    items: [
        {title:"Australia",value:1},
        {title:"Canada",value:2},
        {title:"USA",value:3},
        {title:"Japan",value:4}
    ]
}

const Template2: Story<SelectPropsType> = (args) => {
    const [value, setValue] = useState("2")

    return <Select {...args} value={value} onChange={setValue}/>
}

export const WithValueAndUseState = Template2.bind({})
WithValueAndUseState.args = {
    items: [
        {title:"Australia",value:"1"},
        {title:"Canada",value:"2"},
        {title:"USA",value:"3"},
        {title:"Japan",value:"4"}
    ]
}

const Template3: Story<SelectPropsType> = (args) => {
    const [value, setValue] = useState(null)

    return <Select {...args} value={value} onChange={setValue}/>
}

export const WithoutValueAndUseState = Template3.bind({})
WithoutValueAndUseState.args = {
    items: [
        {title:"Australia",value:"1"},
        {title:"Canada",value:"2"},
        {title:"USA",value:"3"},
        {title:"Japan",value:"4"}
    ]
}