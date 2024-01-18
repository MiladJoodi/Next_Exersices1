import Card from '@/components/modules/Card/Card'
import React from 'react'

function Menu({data}) {

  // console.log(data)

  return (
    <div class="container-fluid pt-5">
        <div class="container">
            <div class="section-title">
                <h4 class="text-primary text-uppercase" style={{letterSpacing: '5px'}}>Menu &amp; Pricing</h4>
                <h1 class="display-4">Competitive Pricing</h1>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <h1 class="mb-5">Hot Coffee</h1>

                    {data.filter(item=> item.type === 'hot').slice(0,3).map((item)=> (
                      <Card {...item} />
                    ))}

                </div>
                <div class="col-lg-6">
                    <h1 class="mb-5">Cold Coffee</h1>
                      
                    {data.filter(item=> item.type === 'cold').slice(0,3).map((item)=> (
                      <Card {...item} />
                    ))}

                </div>
            </div>
        </div>
    </div>
  )
}

export default Menu