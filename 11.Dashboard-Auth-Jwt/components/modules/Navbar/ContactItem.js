import React from 'react'

function ContactItem({name, job, img, status}) {
  return (
    <li>
              <a href="#" class="nav-link d-flex align-items-center space justify-content-between">
                <div className="d-flex gap-1">
                <div class="me-4">
                  <div class="position-relative d-inline-block text-white">
                    <img
                      alt="Image Placeholder"
                      src={`/images/contacts/${img}`}
                      class="avatar rounded-circle"
                    />
                    <span class={`position-absolute bottom-2 end-2 transform translate-x-1/2 translate-y-1/2 border-2 border-solid border-current w-3 h-3 rounded-circle ${status}`}></span>
                  </div>
                </div>
                <div>
                  <span class="d-block text-sm font-semibold">
                    {name}
                  </span>
                  <span class="d-block text-xs text-muted font-regular">
                    {job}
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