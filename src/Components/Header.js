import React from 'react'

const Header = (props) => {
  return (
    <div>
      <h1 className="text-4xl py-5 text-center  text-white font-cursive">{props.title}</h1>
      {console.log(props.title)}
    </div>
  )
}

export default Header
