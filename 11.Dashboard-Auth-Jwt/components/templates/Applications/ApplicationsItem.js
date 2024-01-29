import React from 'react'

function ApplicationsItem({name, date, company, offer, meeting, status, profileImg, companyImg}) {
    return (
        <tr>
            <td>
                <img
                    alt="..."
                    src={`/images/profile/${profileImg}`}
                    class="avatar avatar-sm rounded-circle ms-2"
                />
                <a class="text-heading font-semibold " href="#">
                    {name}
                </a>
            </td>
            <td>{date}</td>
            <td>
                <img
                    alt="..."
                    src={`/images/profile/${companyImg}`}
                    class="avatar avatar-xs rounded-circle ms-2"
                />
                <a class="text-heading font-semibold" href="#">
                    {company}
                </a>
            </td>
            <td className='persianNumber'>{`${offer}`} تومان</td>
            <td>
                <span class="badge badge-lg badge-dot">
                    <i class={status}></i>
                    <span className='me-2'>{meeting}</span>
                </span>
            </td>
            <td class="text-end d-flex gap-2">
                <a href="#" class="btn btn-sm btn-neutral">
                    جزئیات
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