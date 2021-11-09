import React from 'react';

type ItemType = {
    title: string
    value: any
}

export type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select: React.FC<SelectPropsType> = (props) => {
    const selectedValue = props.items.find(i => i.value === props.value)

    return (
        <div>
            <select>
                <option value="1">Australia</option>
                <option value="2">Canada</option>
                <option value="3">Usa</option>
                <option value="4">Japan</option>
            </select>
            <h3>{selectedValue && selectedValue.title}</h3>
            {props.items.map(i => <div key={i.value}>{i.title}</div>)}
        </div>
    )
}
