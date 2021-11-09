import React from 'react';
import s from './Select.module.css'

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
        <>
            <select>
                <option value="1">Australia</option>
                <option value="2">Canada</option>
                <option value="3">Usa</option>
                <option value="4">Japan</option>
            </select>
            <div className={s.select}>
                <h3>{selectedValue && selectedValue.title}</h3>
                <div className={s.items}>
                    {props.items.map(i => <div key={i.value}>{i.title}</div>)}
                </div>
            </div>
        </>
    )
}
