import PageHeader from '@/components/modules/PageHeader/PageHeader'
import ReservationDetails from '@/components/templates/Reservation/ReservationDetails'
import React from 'react'

function Reservation() {
  return (
    <>
    <PageHeader route="Reservation" />
    <ReservationDetails />
    
    </>
  )
}

export default Reservation