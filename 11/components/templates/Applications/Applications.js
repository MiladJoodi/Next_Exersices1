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
                      <th scope="col">نام</th>
                      <th scope="col">تاریخ</th>
                      <th scope="col">محل توسعه</th>
                      <th scope="col">پیشنهاد</th>
                      <th scope="col">وضعیت</th>
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
                  نمایش 10 از 250
                </span>
              </div>
            </div>
  )
}

export default Applications