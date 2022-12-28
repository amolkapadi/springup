import React from 'react';
import Model2 from './Model2';

function Model() {
    return (
        <div className='container py-5'>
            <h1 className='text-center'>Offshore Office Model </h1>
            <p className='text-center'>Create an offshore extension of your team with zero up-front investment and 100% control & transparency</p>
            <div className='row py-5'>
                <div className='col-md-4 mt-5'>
                    <div class="card modelCard mt-5">
                        <div class="card-body">
                            <h5 class="card-title fw-bold">Lower Operating Cost</h5>
                            <p class="card-text">It's far less expensive to build teams
                                in emerging tech nations like India
                                than in metropolitan hotspots across
                                US & Europe</p>
                        </div>
                    </div>
                    <div class="card modelCard">
                        <div class="card-body">
                            <h5 class="card-title fw-bold">Complete Transparency and control</h5>
                            <p class="card-text">Team Members to be selected
                                through interview process, work
                                closely with the existing engineering
                                team. </p>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <img src='assets/img/Arrow.png' className='img-fluid model-img' alt='main-img' />
                </div>
                <div className='col-md-4 mt-5'>
                    <div class="card modelCard mt-5">
                        <div class="card-body">
                            <h5 class="card-title fw-bold">Access to Talent with International</h5>
                            <p class="card-text">business experience to support
                                innovation. India produces over a
                                million new developers every single
                                year, with fluent English and elite,
                                world renowned technical skills .</p>
                        </div>
                    </div>
                    <div class="card modelCard">
                        <div class="card-body">
                            <h5 class="card-title fw-bold">Opportunity to Scale. </h5>
                            <p class="card-text">With a reliable offshoring partner,
                                scaling is simple. You can expand
                                premises and recruit any role
                                without the usual financial risk or
                                operational disruption.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Model2 />
        </div>
    )
}
export default Model;