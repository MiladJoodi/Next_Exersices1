import Link from 'next/link'
import React from 'react'

function PageHeader({ route }) {
  return (
    <div class="container-fluid page-header mb-5 position-relative overlay-bottom">
      <div class="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{ minHeight: '400px' }}>
        <h1 class="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase">{route}</h1>
        <div class="d-inline-flex mb-lg-5">
          <p class="m-0 text-white">
            <Link href='/' className='text-white'>
              Home
            </Link>
          </p>
          <p class="m-0 text-white px-2">/</p>
          <p class="m-0 text-white">
            <Link href={`/${route}`}>
            {route}
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default PageHeader