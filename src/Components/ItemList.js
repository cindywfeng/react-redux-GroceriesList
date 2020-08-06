import React from 'react'
import Item from './Item'

//props is items//
export default function ItemList({ items, toggleItem }) {
    return (
       items.map(item => {
        return <Item key={item.id} toggleItem={toggleItem} item={item}/>
    })
    )
}

