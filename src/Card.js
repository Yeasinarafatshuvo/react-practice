import React from 'react'

 function Card(props) {
    const {titleText,description} = props
  return (
    <div>
        <div className="card">
            <h1>{titleText}</h1>
            <p>{description}</p>
            <p>27.07.2022</p>
        </div>
    </div>
  )
}
export default Card