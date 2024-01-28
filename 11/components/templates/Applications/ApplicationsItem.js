import React from 'react'

function ApplicationsItem({name, date, company, offer, meeting, status, profileImg, companyImg}) {
    return (
        <tr>
            <td>
                <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1610878722345-79c5eaf6a48c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                    class="avatar avatar-sm rounded-circle me-2"
                />
                <a class="text-heading font-semibold" href="#">
                    {name}
                </a>
            </td>
            <td>{date}</td>
            <td>
                <img
                    alt="..."
                    src="https://preview.webpixels.io/web/img/other/logos/logo-3.png"
                    class="avatar avatar-xs rounded-circle me-2"
                />
                <a class="text-heading font-semibold" href="#">
                    {company}
                </a>
            </td>
            <td>${offer}</td>
            <td>
                <span class="badge badge-lg badge-dot">
                    <i class="bg-success"></i>{meeting}
                </span>
            </td>
            <td class="text-end">
                <a href="#" class="btn btn-sm btn-neutral">
                    View
                </a>
                <button
                    type="button"
                    class="btn btn-sm btn-square btn-neutral text-danger-hover"
                >
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        </tr>
    )
}

export default ApplicationsItem