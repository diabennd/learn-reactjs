import React from 'react'


//component adalah sekumpulan element yang dapat dirender ke halaman html secara dinamis
const FunctionComponent = (props) => {
  return (
    <div>
        <p>Hello {props.name} this is a <b>Function Component</b></p>
    </div>
  )
}

export default FunctionComponent;