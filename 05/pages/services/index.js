import PageHeader from '@/components/modules/PageHeader/PageHeader'
import ServicesDetails from '@/components/templates/Services/ServicesDetails'
import React from 'react'

function Services({services}) {

  return (
    <>
      <PageHeader route='Services' />
      <ServicesDetails data={services} />
    </>
  )
}

export async function getStaticProps(context){

  const res = await fetch('http://localhost:4000/services')
  const data = await res.json()

  return{
    props:{
      services: data,
    }
  }
}

export default Services