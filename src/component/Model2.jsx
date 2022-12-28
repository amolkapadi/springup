import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
function Model2() {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <>
           
            <div className="container py-5">
            <h1 className="text-center">Offshore Office: This is not outsourcing or offshoring</h1>
            <div class="row row-cols-1 row-cols-md-3  " >
            
            <div class="col">
                <div class="card ModelCard" data-aos="zoom-in-down" >
                    <div className="Modelicon">
                        <i class="bi bi-person-circle"></i>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title text-center fw-bold">Fully Dedicated Employees</h5>
                        <p class="card-text">Dedicated employees who think about your products and services, long-term perspective. </p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card ModelCard" data-aos="zoom-in-down" >
                    <div className="Modelicon">
                        <i class="bi bi-currency-dollar"></i>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title text-center fw-bold">Lower Cost of Ownership</h5>
                        <p class="card-text">Super attractive Cost-Plus model, to reduce the total cost of operation of these offshore offices </p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card ModelCard" data-aos="zoom-in-down" >
                    <div className="Modelicon">
                    <i class="bi bi-people-fill"></i>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title text-center fw-bold">Extension of your Team</h5>
                        <p class="card-text"> It’s a cross-continent extension of your existing team. Work with them as you do with your developers at home. </p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card ModelCard" data-aos="zoom-in-down" >
                    <div className="Modelicon">
                    <i class="bi bi-sliders"></i>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title text-center fw-bold">Same Dev Tools</h5>
                        <p class="card-text"> Offshore Office Team will use same Dev tools, Collaboration & communication platforms of your team </p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card ModelCard" data-aos="zoom-in-down" >
                    <div className="Modelicon">
                    <i class="bi bi-person-lines-fill"></i>
                    </div>
                    <div class="card-body" data-aos="zoom-in-down" >
                        <h5 class="card-title text-center fw-bold">Scale Quickly</h5>
                        <p class="card-text"> A fiscally attractive solution to get the talent you need to scale quickly, not found locally </p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card ModelCard" data-aos="zoom-in-down" >
                    <div className="Modelicon" >
                    <i class="bi bi-person-fill-up"></i>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title text-center fw-bold">Quality of Hiring</h5>
                        <p class="card-text"> Developers are hand-picked in line with your specific requirements with the final hiring decision made by you</p>
                    </div>
                </div>
            </div>
        </div>
            </div>
        </>
    )
}
export default Model2;