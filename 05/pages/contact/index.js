import PageHeader from '@/components/modules/PageHeader/PageHeader'
import ContactDetails from '@/components/templates/Contact/ContactDetails'
import React from 'react'

function Contact() {
  return (
    <>
    <PageHeader route="Contact" />
    <ContactDetails />
    </>
  )
}

export default Contact