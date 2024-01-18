import React from 'react'

function Testimonial({data}) {
  return (
    <div class="container-fluid py-5">
        <div class="container">
            <div class="section-title">
                <h4 class="text-primary text-uppercase" style={{letterSpacing: "5px"}}>Testimonial</h4>
                <h1 class="display-4">Our Clients Say</h1>
            </div>
            <div class="owl-carousel testimonial-carousel">

              {
                data.slice(0,4).map(comment=> (
                  <div class="testimonial-item">
                    <div class="d-flex align-items-center mb-3">
                        <img class="img-fluid" src={comment.profile} alt="" />
                        <div class="ml-3">
                            <h4>{comment.username}</h4>
                            <i>User</i>
                        </div>
                    </div>
                    <p class="m-0">{comment.body}</p>
                </div>
                ))
              }



            </div>
        </div>
    </div>
  )
}

export default Testimonial