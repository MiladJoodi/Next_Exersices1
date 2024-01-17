import ServiceItem from '@/components/modules/ServiceItem/ServiceItem'
import React from 'react'

function Services() {
    return (
        <div class="container-fluid pt-5">
            <div class="container">
                <div class="section-title">
                    <h4 class="text-primary text-uppercase" style={{ letterSpacing: '5px' }}>Our Services</h4>
                    <h1 class="display-4">Fresh &amp; Organic Beans</h1>
                </div>images/
                <div class="row">

                    <ServiceItem
                        title="Fastest Door Delivery"
                        desc="Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit
                invidunt, dolore tempor diam ipsum takima erat tempor"
                        img="images/service-1.jpg"
                    
                    />

                    <ServiceItem
                        title="Fresh Coffee Beans"
                        desc="Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit
                invidunt, dolore tempor diam ipsum takima erat tempor"
                        img="images/service-2.jpg"
                    />

                    <ServiceItem
                        title="Best Quality Coffee"
                        desc="Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit
                invidunt, dolore tempor diam ipsum takima erat tempor"
                        img="images/service-3.jpg"
                    />

                    <ServiceItem
                        title="Online Table Booking"
                        desc="Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit
                invidunt, dolore tempor diam ipsum takima erat tempor"
                        img="images/service-4.jpg"
                    />


                </div>
            </div>
        </div>
    )
}

export default Services