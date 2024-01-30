import React from 'react'

function StateBox({title, value, icon, iconColor, arrow,stateNumber,stateColor,since}) {
  return (
    <div className="col-xl-3 col-sm-6 col-12">
                <div className="card shadow border-0">
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <span className="h6 font-semibold text-muted text-sm d-block mb-2" style={{fontFamily: "IranSansBold"}}>
                          {title}
                        </span>
                        <span className="h3 font-bold mb-0 persianNumber">{value}</span>
                      </div>
                      <div className="col-auto">
                        <div className={`icon icon-shape text-white text-lg rounded-circle ${iconColor}`}>
                          <i className={`${icon}`}></i>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 mb-0 text-sm">
                      <span className={`badge badge-pill text-success persianNumber ${stateColor}`}>
                        <i className={arrow}></i>{stateNumber}
                      </span>
                      <span className="text-nowrap text-xs text-muted me-2 ">
                        {since}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
  )
}

export default StateBox