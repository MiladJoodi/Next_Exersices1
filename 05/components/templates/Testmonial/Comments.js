import Testimonial from '@/components/modules/Testimonial/Testimonial'
import React from 'react'

function Comments({data}) {
  return (
    <div class="container-fluid py-5">
      <div class="container">
        <div class="section-title">
          <h4 class="text-primary text-uppercase" style={{letterSpacing: '5px'}}>Testimonial</h4>
          <h1 class="display-4">Our Clients Say</h1>
        </div>
        <div class="owl-carousel testimonial-carousel">
    
        {
                data.slice(0,4).map(comment=> (
                  <Testimonial {...comment} />
                ))
              }

        </div>
      </div>
    </div>
  )
}

export default Comments