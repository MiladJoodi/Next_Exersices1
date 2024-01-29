import React from 'react'

function Header() {
  return (
    <header class="bg-surface-primary border-bottom pt-6">
          <div class="container-fluid">
            <div class="mb-npx">
              <div class="row align-items-center">
                <div class="col-sm-6 col-12 mb-4 mb-sm-0">
                  {/* <!-- Title --> */}
                  <h1 class="h2 mb-0 ls-tight">داشبورد</h1>
                </div>
                {/* <!-- Actions --> */}
                <div class="col-sm-6 col-12 text-sm-end">
                  <div class="mx-n1 d-flex justify-content-end">
                    <a
                      href="#"
                      class="btn d-inline-flex btn-sm btn-neutral border-base mx-1"
                    >
                      <span>ویرایش</span>
                      <span class="pe-2">
                        <i class="bi bi-pencil"></i>
                      </span>
                    </a>
                    <a
                      href="#"
                      class="btn d-inline-flex btn-sm btn-primary mx-1"
                    >
                      <span>افزودن</span>
                      <span class=" pe-2">
                        <i class="bi bi-plus"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- Nav --> */}
              <ul class="nav nav-tabs mt-4 overflow-x border-0">
                <li class="nav-item ">
                  <a href="#" class="nav-link active">
                    گزارش
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link font-regular">
                    اشتراک
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link font-regular">
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