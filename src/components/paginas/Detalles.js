import React from 'react'

function Item(props) {
    return (
        <div className='box_flex_jc_flow-c'>
            <div className='box_title'>
                <h3>{props.title}</h3>
            </div>
            <div className='box_body'>
                <p>{props.description}</p>
            </div>
            <div className='box_footer'>
                <p>{props.bottom}</p>
            </div>
        </div>
    )
}

export default Item;