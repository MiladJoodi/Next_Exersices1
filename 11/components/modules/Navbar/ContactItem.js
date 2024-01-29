import React from 'react'

function ContactItem() {
  return (
    <li>
              <a href="#" class="nav-link d-flex align-items-center space justify-content-between">
                <div className="d-flex gap-1">
                <div class="me-4">
                  <div class="position-relative d-inline-block text-white">
                    <img
                      alt="Image Placeholder"
                      src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                      class="avatar rounded-circle"
                    />
                    <span class="position-absolute bottom-2 end-2 transform translate-x-1/2 translate-y-1/2 border-2 border-solid border-current w-3 h-3 bg-success rounded-circle"></span>
                  </div>
                </div>
                <div>
                  <span class="d-block text-sm font-semibold">
                    فاطمه
                  </span>
                  <span class="d-block text-xs text-muted font-regular">
                    گرافیست
                  </span>
                </div>
                </div>
                <div class="">
                  <i class="bi bi-chat"></i>
                </div>
              </a>
            </li>
  )
}

export default ContactItem