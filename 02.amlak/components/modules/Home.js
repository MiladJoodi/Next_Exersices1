import React from 'react'

function Home() {
  return (
    <div class="card">
        <img src="img/gal-1.jpeg" alt="House 6" class="card__img" />
        <h5 class="card__title">s</h5>
        <span class="card__like">
          <i class="fa fa-heart"></i>
        </span>
        <div class="card__details">
          <span class="">
            <i class="fa fa-map-marker card__icon"></i>
          </span>
          <p class="card__text">مالدیو</p>
          <span class="">
            <i class="fa fa-user card__icon"></i>
          </span>
          <p class="card__text">4 اتاق</p>
          <span class="">
            <i class="fa fa-expand card__icon"></i>
          </span>
          <p class="card__text">400 متر مربع</p>
          <span class="">
            <i class="fa fa-key card__icon"></i>
          </span>
          <p class="card__text">560 میلیون تومان</p>
        </div>

        <a href="#" class="btn btn-brown btn-card">
          مشاهده ملک
        </a>
      </div>
  )
}

export default Home