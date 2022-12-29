import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Challenges } from "../utils/Constants";


function Challenge() {
    useEffect(() => {
        AOS.init();
      }, [])
    return (

        <>
        <h1 className='text-center'>Challenges</h1>
            <div class="row row-cols-1 row-cols-md-5 g-3 py-5">
            {Challenges.map((result) => (
                 <div class="col">
                 <div class="card cardBox" data-aos="zoom-in-down" >
                     <div class="card-body">
                         <h5 class="card-title fw-bold"> <i class={result.icon}> </i> {result.title}</h5><hr />
                         <p class="card-text">{result.des}</p>
                     </div>
                 </div>
             </div>
      ))}
            </div>
        </>
    )
}
export default Challenge;