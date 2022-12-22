import React from 'react';
import Customer from './Customer';
import Locations from './Locations';
import Main from './Main';
import Model from './Model';
import Services from './Services';
import Team from './Team';


function Home() {
    return (
        <>
            <Main />        
            <div className='container'>
                <Model />
                <Services />
                <Team />
                <Locations />
                <Customer />
            </div>
        </>
    )
}
export default Home;    