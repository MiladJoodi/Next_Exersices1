import React from 'react'

function ServiceItem({title, desc, img, icon}) {
  return (
    <div class="col-lg-6 mb-5">
    <div class="row align-items-center">
        <div class="col-sm-5">
            <img class="img-fluid mb-3 mb-sm-0" src={img} alt="" />
        </div>
        <div class="col-sm-7">
            <h4><i class="fa fa-table service-icon"></i>{title}</h4>
            <p class="m-0">{desc}</p>
        </div>
    </div>
</div>
  )
}

export default ServiceItem