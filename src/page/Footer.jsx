import React from 'react';

function Footer() {
    return (

        <>

            <div className='container-fluid bg-footer'>
                <div className='container'>
                    <div className='row py-2 align-middle'>
                        <div className='col-md-8'>
                            <p>Get Connected With Social Network</p>
                        </div>
                        <div className='col-md-4 d-flex justify-content-end'>
                            <i class="bi bi-linkedin me-3"></i>
                            <i class="bi bi-envelope-fill me-3"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid py-4 footerBody'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4 '>
                            <h6 className='fw-bold'>About Us</h6>
                            <p>We are an innovative software product development company focusing on modern digital capabilities and data-driven methodologies to enhance efficiency and value.
                                We help our customer to realize their investments, while working with customer focus, integrity, and insight; there by becoming the trusted technology partner in our customers’ digital transformation journey.
                            </p>
                        </div>
                        <div className='col-md-2 '>
                            <h6 className='fw-bold'>Helpfull link</h6>
                            <ul>
                                <li>Model</li>
                                <li>Services </li>
                                <li>Team</li>
                                <li>locations</li>
                                <li>Customer</li>
                            </ul>

                        </div>

                        <div className='col-md-6'>
                            <h6 className='fw-bold'>Location</h6>
                            <p> <i class="bi bi-buildings-fill"> </i> <b>India :</b> Lane   3, near VIJAY SALES, Pallod Farms, Baner, Pune, Maharashtra 411045</p>
                            <p> <i class="bi bi-buildings-fill"> </i> <b>US Sales Office :</b> 1334 Brittmoore Rd Suite B Houston, TX 77043</p>
                            <p> <i class="bi bi-buildings-fill"> </i> <b>Norway Sales Office :</b> RØSLYNGVEIEN 2B, 0788 OSLO, NORWAY</p>
                            <p> <i class="bi bi-buildings-fill"> </i> <b>UK Sales Office :</b> Unit 26, Tesla Court, Innovation Way, Lynchwood, Peterborough, PE2 6FL.</p>


                        </div>
                    </div>

                </div>

            </div>
            <div className='container-fluid bg-secondary p-2' >
                <p className='text-center fw-bold fs-6 text-white '>@2023 Copyright Springuplab</p>
            </div>
        </>
    )
}
export default Footer;


