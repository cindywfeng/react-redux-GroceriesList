import React from 'react'

export default function Item({ item, toggleItem }) {
    function handleItemClick() {
        toggleItem(item.id)
    }

    return (
        <div>
            <label>
                <label>
                    <input type="checkbox" checked={item.complete} onChange={handleItemClick}></input>
                    {item.name}    
                </label>
                
            </label>

        </div>
    )
}
