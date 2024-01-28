import React from 'react'
import {applicationsDB} from "@/data/applications"
import ApplicationsItem from './ApplicationsItem'

function Applications() {
  return (
    <div class="card shadow border-0 mb-7">
              <div class="card-header">
                <h5 class="mb-0">Applications</h5>
              </div>
              <div class="table-responsive">
                <table class="table table-hover table-nowrap">
                  <thead class="thead-light">
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Date</th>
                      <th scope="col">Company</th>
                      <th scope="col">Offer</th>
                      <th scope="col">Meeting</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                        applicationsDB.map((item)=>(
                            <ApplicationsItem {...item} />
                        ))
                        
                    }
                  </tbody>
                </table>
              </div>
              <div class="card-footer border-0 py-5">
                <span class="text-muted text-sm">
                  Showing 10 items out of 250 results found
                </span>
              </div>
            </div>
  )
}

export default Applications