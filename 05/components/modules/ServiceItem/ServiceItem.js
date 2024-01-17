import React from 'react'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import {
    faTruck
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
config.autoAddCss = false;


function ServiceItem({ title, desc, img, icon }) {
    return (
        <div class="col-lg-6 mb-5">
            <div class="row align-items-center">
                <div class="col-sm-5">
                    <img class="img-fluid mb-3 mb-sm-0" src={img} alt="" />
                </div>
                <div class="col-sm-7">
                    <h4>
                        {/* <i class="fa fa-table service-icon"></i> */}
                        <div style={{
                            background: "#da9f5b",
                            borderRadius: '100%',
                            height: '35px',
                            width: '40px',
                            textAlign: 'center'
                        }}>
                        <FontAwesomeIcon icon= {faTruck} />
                        </div>
                        
                        <p className='ml-3'>{title}</p>
                    </h4>
                    <p class="m-0">{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceItem