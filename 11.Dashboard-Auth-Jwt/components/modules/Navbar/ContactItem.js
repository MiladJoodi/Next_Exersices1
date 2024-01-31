import React from 'react'

function ContactItem({name, job, img, status}) {
  return (
    <li>
              <a href="#" className="nav-link d-flex align-items-center space justify-content-between">
                <div className="d-flex gap-1">
                <div className="me-4">
                  <div className="position-relative d-inline-block text-white">
                    <img
                      alt="Image Placeholder"
                      src={`/images/contacts/${img}`}
                      className="avatar rounded-circle"
                    />
                    <span className={`position-absolute bottom-2 end-2 transform translate-x-1/2 translate-y-1/2 border-2 border-solid border-current w-3 h-3 rounded-circle ${status}`}></span>
                  </div>
                </div>
                <div>
                  <span className="d-block text-sm font-semibold">
                    {name}
                  </span>
                  <span className="d-block text-xs text-muted font-regular">
                    {job}
                  </span>
                </div>
                </div>
                <div className="">
                  <i className="bi bi-chat"></i>
                </div>
              </a>
            </li>
  )
}

export default ContactItem