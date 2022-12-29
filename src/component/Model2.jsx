import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { menuModel2 } from "../utils/Constants";
function Model2() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <div className="container py-5">
                <h1 className="text-center">Offshore Office: This is not outsourcing or offshoring</h1>
                <div class="row row-cols-1 row-cols-md-3  " >
                    {menuModel2.map((result) => (
                        <div class="col">
                            <div class="card ModelCard" data-aos="zoom-in-down" >
                                <div className="Modelicon">
                                    <i class={result.icon}></i>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title text-center fw-bold">{result.title}</h5>
                                    <p class="card-text">{result.des} </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Model2;