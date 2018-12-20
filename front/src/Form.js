import React from 'react'

const Form = ({handleSubmit, handleText, handleImage}) => {
  return (
    <div>
      <input onChange={handleText} type="text" name="text"/>
      <input onChange={handleImage} type="file" name="photoURL"/>
      <button onClick={handleSubmit}>Post 😏</button>
    </div>
  )
}

export default Form
