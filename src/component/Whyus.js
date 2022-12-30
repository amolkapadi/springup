import React from 'react';
import Whyusimg from '../assets/img/mission.gif'

function Whyus() {
    return (
        <>
            <div className='container'>
                <h2 className='text-center'>Why SpringUp Labs</h2>
                <div className='row py-5'>
                    <div className='col-md-5'>
                        <img src={Whyusimg} className='img-fluid' alt='main-img' />
                    </div>
                    <div className='col-md-7'>
                        <p>
                            From 2 to 25+ engineers, we build worldclass development teams in Pune. Beat the
                            tech talent shortage at home and
                            accelerate your innovation and go-tomarket plan.
                        </p>
                        <p><b><i className="bi bi-star-fill"></i>   Elite development talent</b> sourced from the top 5% in Pune</p>
                        <p><b><i className="bi bi-star-fill"></i> Fully managed operations</b> — we do your heavy lifting</p>
                        <p><b><i className="bi bi-star-fill"></i> A focus on cultural alignment </b>and buy in to your vision and mission</p>
                        <p><b><i className="bi bi-star-fill"></i> Your developers are</b> 100% dedicated to you</p>
                        <p><b><i className="bi bi-star-fill"></i> On-demand scaling </b>as and when you want to increase capacity</p>
                        <p><b><i className="bi bi-star-fill"></i> European/US organization combined</b> with Indian engineering talent</p>
                        <p><b><i className="bi bi-star-fill"></i> Founded by a team,</b> who has decades of offshoring experience. </p>
                        <p><b><i className="bi bi-star-fill"></i> Alignment to</b> Customer Policies, Procedures, and Culture. </p>
                    </div>
                </div>
                
                <div className='row py-3'>
                    <div className="accordion accordion-flush w-100 mx-auto" id="accordionFlushExample">
                        <div className="accordion-item shadow-lg">
                            <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    <h3>Case Study-1</h3>
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <div className='caseBox'>
                                                <p className='fw-bold'>Client and Engagement Highlights</p>
                                                <p> <i className="bi bi-caret-right-fill"></i> Client is a German EdTech Company</p>
                                                <p> <i className="bi bi-caret-right-fill"></i> Develops Tech Products and Smart Class Room</p>
                                                <p> <i className="bi bi-caret-right-fill"></i> Operates Across 3 countries, 80 Associates</p>
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className='caseBox'>
                                                <p className='fw-bold'>Platform and Technology Details</p>
                                                <p> <i className="bi bi-caret-right-fill"></i>Full Stack </p>
                                                <p> <i className="bi bi-caret-right-fill"></i> Web Application</p>
                                                <p> <i className="bi bi-caret-right-fill"></i> Cloud</p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="row row-cols-1 row-cols-md-3  py-3">
                                        <div className="col">
                                            <div className="card caseCard">
                                                <div className="card-footer bg-warning">
                                                    <h5 className="fw-bold text-white">Business Challenges</h5>
                                                </div>
                                                <div className="card-body">
                                                    <p className="card-text"> <i className="bi bi-arrow-right-short"></i> Ability to scale quickly to help their end customers</p>
                                                    <p className="card-text"> <i className="bi bi-arrow-right-short"></i> Availability of tech talent in ERP and BI Platforms</p>
                                                    <p className="card-text"> <i className="bi bi-arrow-right-short"></i> Margin pressure due to reduced rate of billing</p>
                                                    <p className="card-text"> <i className="bi bi-arrow-right-short"></i> Quick scale up</p>
                                                    <p className="card-text"> <i className="bi bi-arrow-right-short"></i> Improve Profit margin</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="card caseCard">
                                                <div className="card-footer bg-success">
                                                    <h5 className="fw-bold text-white">Our Solution</h5>
                                                </div>
                                                <div className="card-body">
                                                    <p className="card-text"> <i className="bi bi-arrow-right-short"></i>Build initial team of 10
                                                        engineers, Architect, Senior
                                                        Developers, Testing and UI-UX
                                                        experts</p>
                                                    <p className="card-text"> <i className="bi bi-arrow-right-short"></i>Product Ownership and Tech
                                                        Redesign. Develop and Release
                                                        the product version</p>
                                                    <p className="card-text"> <i className="bi bi-arrow-right-short"></i> A joint team across two
                                                        continents and worked in joint
                                                        model. </p>
                                                    <p className="card-text"> <i className="bi bi-arrow-right-short"></i> Communication & Governance  </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="card caseCard">
                                                <div className="card-footer bg-primary">
                                                    <h5 className="fw-bold text-white">Benefit</h5>
                                                </div>
                                                <div className="card-body">
                                                    <p className="card-text"> <i className="bi bi-arrow-right-short"></i>Reduce the cost by 43% </p>
                                                    <p className="card-text"> <i className="bi bi-arrow-right-short"></i> Improved customer
                                                        support. 33% Reduced
                                                        case
                                                    </p>
                                                    <p className="card-text"> <i className="bi bi-arrow-right-short"></i>Products released on time </p>
                                                    <p className="card-text"> <i className="bi bi-arrow-right-short"></i>No Backlog. Full team
                                                        across Onsite and Offshore </p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item shadow-lg mt-4">
                            <h2 className="accordion-header" id="flush-headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    <h3>Case Study-2</h3>
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <div className='caseBox'>
                                                <p className='fw-bold'>Client and Engagement Highlights</p>
                                                <p> <i className="bi bi-caret-right-fill"></i> Client is a
                                                    Norwegian IT
                                                    Services Company</p>
                                                <p> <i className="bi bi-caret-right-fill"></i> IT Services across domains</p>
                                                <p> <i className="bi bi-caret-right-fill"></i> Operates Across 6
                                                    countries, 500
                                                    Associates</p>
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className='caseBox'>
                                                <p className='fw-bold'>Platform and Technology Details</p>
                                                <p> <i className="bi bi-caret-right-fill"></i>Unit4 ERP </p>
                                                <p> <i className="bi bi-caret-right-fill"></i> Web Application</p>
                                                <p> <i className="bi bi-caret-right-fill"></i> BI Tools</p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="row row-cols-1 row-cols-md-3  py-3">
                                        <div className="col">
                                            <div className="card caseCard">
                                                <div className="card-footer bg-warning">
                                                    <h5 className="fw-bold text-white">Business Challenges</h5>
                                                </div>
                                                <div className="card-body">
                                                    <p className="card-text"> <i className="bi bi-arrow-right-short"></i> Ability to scale quickly to
                                                        help their end customers</p>
                                                    <p className="card-text"> <i className="bi bi-arrow-right-short"></i> Availability of tech talent
                                                        in ERP and BI Platforms</p>
                                                    <p className="card-text"> <i className="bi bi-arrow-right-short"></i> Margin pressure due to
                                                        reduced rate of billing </p>
                                                    <p className="card-text"> <i className="bi bi-arrow-right-short"></i> Quick scale up</p>
                                                    <p className="card-text"> <i className="bi bi-arrow-right-short"></i> Improve Profit margin</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="card caseCard">
                                                <div className="card-footer bg-success">
                                                    <h5 className="fw-bold text-white">Our Solution</h5>
                                                </div>
                                                <div className="card-body">
                                                    <p className="card-text"> <i className="bi bi-arrow-right-short"></i>Build initial team of 6
                                                        engineers, across ERP, Power BI
                                                        and Full Stack. </p>
                                                    <p className="card-text"> <i className="bi bi-arrow-right-short"></i>Worked in Hybrid Model. The
                                                        Project Manager, Service
                                                        Delivery and majority of team
                                                        in Europe and a team in India</p>
                                                    <p className="card-text"> <i className="bi bi-arrow-right-short"></i> A joint team across continents
                                                        and worked in joint delivery
                                                        model.</p>
                                                    <p className="card-text"> <i className="bi bi-arrow-right-short"></i> Communication & Governance  </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="card caseCard">
                                                <div className="card-footer bg-primary">
                                                    <h5 className="fw-bold text-white">Benefit</h5>
                                                </div>
                                                <div className="card-body">
                                                    <p className="card-text"> <i className="bi bi-arrow-right-short"></i>We could start the
                                                        customer project intime</p>
                                                    <p className="card-text"> <i className="bi bi-arrow-right-short"></i> Improved customer
                                                        support across 24X7. And
                                                        non-business hour support
                                                    </p>
                                                    <p className="card-text"> <i className="bi bi-arrow-right-short"></i>No Backlog, eliminated the
                                                        billing loss. Full team
                                                        across Onsite and Offshore </p>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>

    )
}
export default Whyus;