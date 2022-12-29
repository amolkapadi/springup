import React from 'react';
import Model2 from './Model2';

function Model() {
    return (
     <>
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
            


            <div className='row py-5'>
            <h1 className='text-center'>Offshore Office: This is not outsourcing or offshoring. </h1>
            <p className='text-center'>Its your own Offshore Office</p>
            <div className='col-md-6 py-5'>
                <img src="assets/img/officework.png" alt="office" className='img-fluid' />
            </div>
            <div className='col-md-6 py-5'>
                <p><b>Fully Dedicated Employees: </b>Dedicated employees who think about your products and services,  long-term perspective. </p>
                <p><b>Extension of your Team: </b>It’s a cross-continent extension of your existing team. Work with them as you do with your developers at home. </p>
                <p><b>Scale Quickly:</b> A fiscally attractive solution to get the talent you need to scale quickly, not found locally </p>
                <p><b>Lower Cost of Ownership: </b>Super attractive Cost-Plus model, to reduce the total cost of operation of these offshore offices</p>
                <p><b>Same Dev Tools:</b> Offshore Office Team will use same Dev tools, Collaboration & communication platforms of your team</p>
                <p><b>Quality of Hiring: </b>Developers are hand-picked in line with your specific requirements with the final hiring decision made by you</p>
            </div>
            </div>

            <div className='row py-3'>
            <h1 className='text-center'>Offshore Office: Cultural Alignment </h1>
                <div className='col-md-6 py-5'>
                <img src="assets/img/officework2.png" alt="office" className='img-fluid' />
                </div>
                <div className='col-md-6 py-5'>
                    <h4>Offshore Office: Access Control & Data Security</h4>
                    <div className='OffshoreBox'>
                    <p><b>Access Controls</b></p>
                    <p>• Fully enclosed offshore office with physical separation with other teams</p>
                    <p>• Access through access card and biometric</p>
                    <p>• Each Engineer to sign Customer and SpringUp Labs NDA</p>
                    <p>• Access to Customer servers only through offshore office VLAN</p>
                    <p><b>Connectivity Controls</b></p>
                    <p>• Connectivity to Customer network through secured VPN</p>
                    <p>• Two Factor Authentication</p>
                    <p>• Secured VLAN and IP-Configuration</p>
                    <p><b>Network Controls</b></p>
                    <p>• Dedicated VLAN network with dedicated Static IP</p>
                    <p>• Flexibility to implement customer IT Policies</p>
                    <p>• Dedicated Server room with restricted access.</p>
                    </div>
                </div>
            </div>
            <div className='row'>
                <h3>Differentiators </h3>
                <p>From 2 to 25+ engineers, we build world-class development teams in Pune. Beat the tech talent shortage at home and accelerate your innovation and go-to-market plan. </p>
                <p><b>Elite development talent</b> sourced from the top 5% academic institutes in Pune</p>
                <p><b>Fully managed operations</b> — we do your heavy lifting</p>
                <p><b>A focus on cultural alignment</b> and buy in to your vision and mission</p>
                <p><b>Your developers </b>are 100% dedicated to you</p>
                <p><b>On-demand scaling</b> as and when you want to increase capacity</p>
                <p><b>European/US organization combined</b> with Indian engineering talent</p>
                <p><b>Founded by a team, </b> who has decades of offshoring experience. </p>
                <p><b></b> Customer Policies, Procedures, and Culture</p>
            </div>
            <Model2 />
        </div>
     </>
    )
}
export default Model;