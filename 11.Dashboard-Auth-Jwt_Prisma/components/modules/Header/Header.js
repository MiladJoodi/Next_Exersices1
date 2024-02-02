import React from 'react'

function Header() {
  return (
    <header className="bg-surface-primary border-bottom pt-6">
          <div className="container-fluid">
            <div className="mb-npx">
              <div className="row align-items-center">
                <div className="col-sm-6 col-12 mb-4 mb-sm-0">
                  {/* <!-- Title --> */}
                  <h1 className="h2 mb-0 ls-tight">داشبورد</h1>
                </div>
                {/* <!-- Actions --> */}
                <div className="col-sm-6 col-12 text-sm-end">
                  <div className="mx-n1 d-flex justify-content-end">
                    <a
                      href="#"
                      className="btn d-inline-flex btn-sm btn-neutral border-base mx-1"
                    >
                      <span>ویرایش</span>
                      <span className="pe-2">
                        <i className="bi bi-pencil"></i>
                      </span>
                    </a>
                    <a
                      href="#"
                      className="btn d-inline-flex btn-sm btn-primary mx-1"
                    >
                      <span>افزودن</span>
                      <span className=" pe-2">
                        <i className="bi bi-plus"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- Nav --> */}
              <ul className="nav nav-tabs mt-4 overflow-x border-0">
                <li className="nav-item ">
                  <a href="#" className="nav-link active">
                    گزارش
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link font-regular">
                    اشتراک
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link font-regular">
                    درخواست
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </header>
  )
}

export default Header