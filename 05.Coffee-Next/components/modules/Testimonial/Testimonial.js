import React from 'react'

function Testimonial({profile, username, body}) {
  return (
    <div class="testimonial-item">
                    <div class="d-flex align-items-center mb-3">
                        <img class="img-fluid" src={profile} alt="" />
                        <div class="ml-3">
                            <h4>{username}</h4>
                            <i>User</i>
                        </div>
                    </div>
                    <p class="m-0">{body}</p>
                </div>
  )
}

export default Testimonial