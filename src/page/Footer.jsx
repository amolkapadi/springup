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
                        <i class="bi bi-instagram me-3"></i>
                        <i class="bi bi-linkedin me-3"></i>
                        <i class="bi bi-envelope-fill me-3"></i>
                        <i class="bi bi-google me-3"></i>
                    </div>
                </div>
            </div>
        </div>
        <div className='container-fluid py-4 footerBody'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3 '>
                        <h6 className='fw-bold'>About Us</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde perferendis doloremque fugit id maiores consequatur sunt repellendus error, incidunt dicta?</p>
                    </div>
                    <div className='col-md-2 '>
                        <h6 className='fw-bold'>Products</h6>
                        <ul>
                            <li>Home 1</li>
                            <li>Home 2</li>
                            <li>Home 3</li>
                            <li>Home 4</li>
                            <li>Home 5</li>
                        </ul>

                    </div>
                    <div className='col-md-2 '>
                        <h6 className='fw-bold'>Usefull Link</h6>
                        <ul>
                            <li>Home 1</li>
                            <li>Home 2</li>
                            <li>Home 3</li>
                            <li>Home 4</li>
                            <li>Home 5</li>
                        </ul>
                    </div>
                    <div className='col-md-5 '>
                        <h6 className='fw-bold'>Contact Us</h6>
                       <p> <i class="bi bi-house-door-fill"> </i> HQ4W+WXG, Lane 3, near VIJAY SALES, Pallod Farms, Baner, Pune, Maharashtra 411045</p>
                       <p><i class="bi bi-envelope-fill"> </i> enquiry@SpringUpLab.com</p>
                       <p><i class="bi bi-telephone-fill"></i> 88888888888</p>

                    </div>
                </div>
               
            </div>
           
        </div>
        <div className='container-fluid'>
        <p className='text-center text-muted fw-bold fs-6'>@2023 Copyright Springuplab.com</p>
        </div>
        </>
    )
}
export default Footer;



{/* <i class="bi bi-instagram ms-5 "></i>
                <i class="bi bi-linkedin "></i>
                <i class="bi bi-envelope-fill"></i>
                <i class="bi bi-google"></i> */}