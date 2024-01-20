import React, { useState } from 'react'

function ContactDetails() {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [body, setBody] = useState("")

  const addMessage = async (event)=>{
    event.preventDefault();

    const message = {
      username,
      email,
      subject,
      body
    }

    const res = await fetch("http://localhost:4000/messages",{
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(message)
    })
    
    if(res.status === 201){
      alert("message successfully")
    }

  }

  return (
    <div class="container-fluid pt-5">
      <div class="container">
        <div class="section-title">
          <h4 class="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Contact Us</h4>
          <h1 class="display-4">Feel Free To Contact</h1>
        </div>
        <div class="row px-3 pb-2">
          <div class="col-sm-4 text-center mb-3">
            <i class="fa fa-2x fa-map-marker-alt mb-3 text-primary"></i>
            <h4 class="font-weight-bold">Address</h4>
            <p>123 Street, New York, USA</p>
          </div>
          <div class="col-sm-4 text-center mb-3">
            <i class="fa fa-2x fa-phone-alt mb-3 text-primary"></i>
            <h4 class="font-weight-bold">Phone</h4>
            <p>+012 345 6789</p>
          </div>
          <div class="col-sm-4 text-center mb-3">
            <i class="far fa-2x fa-envelope mb-3 text-primary"></i>
            <h4 class="font-weight-bold">Email</h4>
            <p>info@example.com</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 pb-5">
            <iframe style={{ width: '100%', height: "443px" }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </div>
          <div class="col-md-6 pb-5">
            <div class="contact-form">
              <div id="success"></div>
              <form name="sentMessage" id="contactForm" novalidate="novalidate">
                <div class="control-group">
                  <input value={username} onChange={e => setUsername(e.target.value)} type="text" class="form-control bg-transparent p-4" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                  <p class="help-block text-danger"></p>
                </div>
                <div class="control-group">
                  <input value={email} onChange={e => setEmail(e.target.value)} type="email" class="form-control bg-transparent p-4" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                  <p class="help-block text-danger"></p>
                </div>
                <div class="control-group">
                  <input value={subject} onChange={e => setSubject(e.target.value)} type="text" class="form-control bg-transparent p-4" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                  <p class="help-block text-danger"></p>
                </div>
                <div class="control-group">
                  <textarea value={body} onChange={e => setBody(e.target.value)} class="form-control bg-transparent py-3 px-4" rows="5" id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message"></textarea>
                  <p class="help-block text-danger"></p>
                </div>
                <div>
                  <button onClick={addMessage}
                    class="btn btn-primary font-weight-bold py-3 px-5"
                    type="submit"
                    id="sendMessageButton">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactDetails