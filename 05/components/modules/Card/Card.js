import React from 'react'

function Card({title, desc, price, img}) {
  console.log(img)
  return (
    <div className="row align-items-center mb-5">
      <div className="col-4 col-sm-3">
        <img className="w-100 rounded-circle mb-3 mb-sm-0" src={img} alt="" />
        <h5 className="menu-price">${price}</h5>
      </div>
      <div className="col-8 col-sm-9">
        <h4>{title}</h4>
        <p className="m-0">{desc}</p>
      </div>
    </div>
  )
}

export default Card