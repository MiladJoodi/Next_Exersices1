import React from 'react'
import Slider from '@/components/templates/Index/Slider'
import About from '@/components/templates/Index/About'
import Services from '@/components/templates/Index/Services'
import Offer from '@/components/templates/Index/Offer'
import Menu from '@/components/templates/Index/Menu'
import Reservation from '@/components/templates/Index/Reservation'



function Index({data}) {
  return (
    <>
      <Slider />
      <About />
      <Services services={data.services} />
      <Offer />
      <Menu data={data.menu} />
      <Reservation />
    </>
  )
}

export async function getStaticProps() {

  const servicesResponse = await fetch("http://localhost:4000/services")
  const servicesData = await servicesResponse.json()

  const menuResponse = await fetch("http://localhost:4000/menu")
  const menuData = await menuResponse.json()

  
  return {
    props: {
      data: {
        services: servicesData,
        menu: menuData,
      },
    },
    revalidate: 60 * 60 * 12
  }
}

export default Index;