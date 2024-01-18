import React, { useState } from 'react'

function Offer() {

  const [email, setEmail] = useState("");

  const addEmail = async (event) => {
    event.preventDefault()

    const response = await fetch('http://localhost:4000/newsLetters',{
      method: 'POST',
      headers: {
        "Content-Type" : "application/json" 
      },
      body: JSON.stringify({email})
    })
    console.log(response)

    if(response.status === 201){
      setEmail("")
      alert('Join Successfully')
    }

  }

  return (
    <div class="offer container-fluid my-5 py-5 text-center position-relative overlay-top overlay-bottom">
      <div class="container py-5">
        <h1 class="display-3 text-primary mt-3">50% OFF</h1>
        <h1 class="text-white mb-3">Sunday Special Offer</h1>
        <h4 class="text-white font-weight-normal mb-4 pb-3">Only for Sunday from 1st Jan to 30th Jan 2045</h4>
        <form class="form-inline justify-content-center mb-4">
          <div class="input-group">
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="text"
              class="form-control p-4"
              placeholder="Your Email"
              style={{ height: "60px" }}
            />
            <div class="input-group-append">
              <button
                onClick={addEmail}
                class="btn btn-primary font-weight-bold px-4"
                type="submit">Join</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Offer