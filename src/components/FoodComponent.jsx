import React from 'react'

const FoodComponent = (props) => {
    const { name, image_url} = props

    return (
        <div className='card'>
            <div className='card-body'>
                <div className='card-image'> 
                    <img src={image_url} alt={name} />
                </div>
            </div>
            <div className='card-title'>{name}</div>
            
        </div>
    )
}

export default FoodComponent