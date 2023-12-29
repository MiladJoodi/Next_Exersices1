import Link from 'next/link'
import React from 'react'

function Home({ id, title, img, roomCount, meterage, price}) {

  return (
    <div className="card">
        <img src={img} alt="House 6" className="card__img" />
        <h5 className="card__title">{title}</h5>
        <span className="card__like">
          <i className="fa fa-heart"></i>
        </span>
        <div className="card__details">
          <span className="">
            <i className="fa fa-map-marker card__icon"></i>
          </span>
          <p className="card__text">مالدیو</p>
          <span className="">
            <i className="fa fa-user card__icon"></i>
          </span>
          <p className="card__text">{roomCount} اتاق</p>
          <span className="">
            <i className="fa fa-expand card__icon"></i>
          </span>
          <p className="card__text">{meterage} متر مربع</p>
          <span className="">
            <i className="fa fa-key card__icon"></i>
          </span>
          <p className="card__text">{price.toLocaleString()} میلیون تومان</p>
        </div>

        <Link href={`/homes/${id}`} className="btn btn-brown btn-card">
          مشاهده ملک
        </Link>
      </div>
  )
}

export default Home