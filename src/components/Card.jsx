import React from 'react'

const Card = ({array,title,description ,id}) => {
    function deleteCard(id) {
array.filter((item) => {
        return item.id !== id
    }
    )
    }
  return (
    <div className='card'>
        <button className='delete' type='button' onClick={() => deleteCard(id)}></button>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  )
}

export default Card