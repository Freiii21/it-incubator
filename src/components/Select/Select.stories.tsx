import {Select, SelectPropsType} from './Select'
import { Story } from '@storybook/react';
import {action} from '@storybook/addon-actions';

export default {
    title: 'components/Select',
    component: Select,
};

const Template: Story<SelectPropsType> = (args) => <Select {...args}/>

const callback = action("function instead of the real function")

export const SelectValue = Template.bind({})
SelectValue.args = {
    value: "some value",
    onChange: callback,
    items: [{title:"Australia",value:1}, {title:"Canada",value:2}, {title:"USA",value:3},{title:"Japan",value:4}]
}