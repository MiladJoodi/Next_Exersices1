import React from 'react'

function StateBox({title, value, icon, iconColor, arrow,stateNumber,stateColor,since}) {
  return (
    <div class="col-xl-3 col-sm-6 col-12">
                <div class="card shadow border-0">
                  <div class="card-body">
                    <div class="row">
                      <div class="col">
                        <span class="h6 font-semibold text-muted text-sm d-block mb-2">
                          {title}
                        </span>
                        <span class="h3 font-bold mb-0">{value}</span>
                      </div>
                      <div class="col-auto">
                        <div class={`icon icon-shape text-white text-lg rounded-circle ${iconColor}`}>
                          <i class={`${icon}`}></i>
                        </div>
                      </div>
                    </div>
                    <div class="mt-2 mb-0 text-sm">
                      <span class={`badge badge-pill text-success me-2 ${stateColor}`}>
                        <i class={arrow}></i>13%
                      </span>
                      <span class="text-nowrap text-xs text-muted">
                        Since last month
                      </span>
                    </div>
                  </div>
                </div>
              </div>
  )
}

export default StateBox