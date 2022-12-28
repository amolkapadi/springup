import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Challenge() {
    useEffect(() => {
        AOS.init();
      }, [])
    return (

        <>
        <h1 className='text-center'>Challenges</h1>
            <div class="row row-cols-1 row-cols-md-5 g-3 py-5">
                <div class="col">
                    <div class="card cardBox" data-aos="zoom-in-down" >
                        <div class="card-body">
                            <h5 class="card-title fw-bold"> <i class="bi bi-search"> </i>  Avialability</h5><hr />
                            <p class="card-text">Finding the right talent to innovate quickly, at a cost that’s optimal is
                                key. There is shortage of highly talented software developers in Europe
                                and US.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card cardBox" data-aos="zoom-in-down" >
                        <div class="card-body">
                            <h5 class="card-title fw-bold"><i class="bi bi-arrow-clockwise"></i>  Scalability</h5><hr />
                            <p class="card-text">Managing the scalability of team in-line with business growth. Quick
                                Ramp-up.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card cardBox" data-aos="zoom-in-down" >
                        <div class="card-body">
                            <h5 class="card-title fw-bold"> <i class="bi bi-globe"></i> Innovation</h5><hr />
                            <p class="card-text">Ability to innovate, lack of talent with global tech ecosystem and
                                market experience.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card cardBox" data-aos="zoom-in-down" >
                        <div class="card-body">
                            <h5 class="card-title fw-bold"><i class="bi bi-person-circle"></i> Culture</h5><hr />
                            <p class="card-text">Outsourcing partner in different country, different corporate culture,
                                not aligned with our values</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card cardBox" data-aos="zoom-in-down" >
                        <div class="card-body">
                            <h5 class="card-title fw-bold"><i class="bi bi-bezier"></i> Control Transparency</h5><hr />
                            <p class="card-text">Control and Transparency about the resources, quality and work
                                schedule is lost when work is outsourced</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Challenge;