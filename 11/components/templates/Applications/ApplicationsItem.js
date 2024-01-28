import React from 'react'

function ApplicationsItem({name, date, company, offer, meeting, status, profileImg, companyImg}) {
    return (
        <tr>
            <td>
                <img
                    alt="..."
                    src={`/images/profile/${profileImg}`}
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
                    src={`/images/profile/${companyImg}`}
                    class="avatar avatar-xs rounded-circle me-2"
                />
                <a class="text-heading font-semibold" href="#">
                    {company}
                </a>
            </td>
            <td>${offer}</td>
            <td>
                <span class="badge badge-lg badge-dot">
                    <i class={status}></i>{meeting}
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