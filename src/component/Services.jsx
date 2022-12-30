import React from 'react';
import Challenge from './Challenge';

 import Services1 from '../assets/img/newproduct1.png'
 import Services2 from '../assets/img/services2.png'
 import Services3 from '../assets/img/cloud3.png'

function Services() {
    return (
        <section id='services' className=' py-5'>
                 <div className='container py-5' >
            <h1 className="text-center">Our Services</h1>  
            <div className='underLine'></div>
            <div className='row py-5'>
                <div className='col-md-6'>
                    <h3>New Product Development</h3>
                    <p>In a dynamic business scenario, the most critical factor that holds the key to retain market
                        leadership is your ability to launch and develop new products and services quickly and in a
                        cost-efficient manner, while facing challenges like responding to scale,
                        increased complexity, dynamics of globalization, reduced costs, and reduced cycle times.</p>
                    <p><b>SpringUp Labs Solution: </b> Our Experienced team are ready to partner closely with clients to define, build,
                        and evolve compelling,
                        high-performing product solutions to improve ROI and help you to faster go-to-market quickly and successfully. </p>
                    <p><b>Our team specializes in: </b> Application Modernization: Define Product Roadmap and
                        Strategy to help modernize legacy applications with Zero down time. </p>
                    <p><b>SaaS products :</b> Developing the B2B and B2C custom solutions building core offerings and market differentiators</p>
                    <p><b>Internal products :</b> Building the systems needed to support mission-critical operations and delivery of customer services</p>
                    <p><b>Technology products :</b> Tackling complex engineering challenges and large-scale development needs of our technology clients’ key offerings</p>
                </div>
                <div className='col-md-6'>
                    <img src={Services1} className='img-fluid' alt='main-img' />
                </div>
            </div>


            <div className='row py-3'>
                <div className='col-md-6'>
                    <img src={Services2} className='img-fluid' alt='main-img' />
                </div>
                <div className='col-md-6'>
                    <h3>Product Support Services</h3>
                    <p>Our Product Support Services will help clients extend the life of core products, improve the performance of core and
                        amplify market relevance, revenue potential, and profitability. We develop product roadmaps that leverage modern technologies
                        and development methodologies, allowing customers to focus on
                        investments in their new product portfolios which are paid for by the improved financial performance of their mature products.</p>
                    <p><b>SpringUp Lab’s Solution:</b></p>
                    <div className='supportBx'>
                        <p><i className="bi bi-arrow-right-short"></i> Professional Services</p>
                        <p><i className="bi bi-arrow-right-short"></i> L1-L4 Technical Support</p>
                        <p><i className="bi bi-arrow-right-short"></i> 24x7 Technical Support</p>
                        <p><i className="bi bi-arrow-right-short"></i> Bug Fixing & Feature Development</p>
                        <p><i className="bi bi-arrow-right-short"></i> Customer Onboarding Cycle</p>
                    </div>
                </div>

            </div>

            <div className='row py-3'>
                <div className='col-md-6'>
                    <h3>Cloud Solutions</h3>
                    <p>With the movement towards a multi or hybrid cloud environment using public cloud platforms such as AWS,
                        Azure or an Enterprise Level private cloud platform; there is a huge surge for cloud migration services.
                        Our calibrated approach helps our customers to migrate from Legacy Ecosystem to Modern Cloud environment. </p>
                    <p><b>Cloud Analysis and Migration</b></p>
                    <div className='supportBx'>
                    <p><i className="bi bi-arrow-right-short"></i> Establishing the right cloud architecture</p>
                    <p><i className="bi bi-arrow-right-short"></i> Determining areas of your existing architecture that should be migrated or phased out</p>
                    <p><i className="bi bi-arrow-right-short"></i> Building transition roadmaps that ensure adoption</p>
                    <p><i className="bi bi-arrow-right-short"></i> Providing clear ROI and TCO </p>
                    <p><i className="bi bi-arrow-right-short"></i> Azure, AWS, Google Cloud Support & Migration</p>
                    <p><i className="bi bi-arrow-right-short"></i> O365 Migration & Support</p>
                </div>
                </div>
                <div className='col-md-6'>
                    <img src={Services3} className='img-fluid' alt='main-img' />
                </div>
            </div>
            
            <Challenge />
        </div>
        </section>
       
    )
}
export default Services;