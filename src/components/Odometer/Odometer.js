import React from 'react';
import './Odometer.css';
import aguja from './../../images/aguja.png'


function Odometer( props ){
    const {valueOdometer} = props;

    return (
        <div className='odometer'>
            <div className='odometer-sub'>
                <div className='odometer-inf'>
                    <p className='p1'>Good</p>
                    <p className='p2'>Average</p>
                    <p className='p3'>Bad</p>
                    <p className='p0'>0</p>
                    <p className='p10'>10</p>
                    <p className='p20'>20</p>
                    <p className='p30'>30</p>
                    <p className='p40'>40</p>
                    <p className='p50'>50</p>
                    <p className='p60'>60</p>
                    <p className='p70'>70</p>
                    <p className='p80'>80</p>
                    <p className='p90'>90</p>
                    <p className='p100'>100</p>
                </div>
            </div>
            <img src={aguja} className='odometer-aguja' style={{transform: `rotate(${valueOdometer*1.8+35}deg)`}} alt='odometer-aguja'/>
            <h4 className={(valueOdometer>=0 && valueOdometer<=20) ? 'h4-green' : (valueOdometer>=80 && valueOdometer<=100) ? 'h4-red' : ''}>{valueOdometer}%</h4>
        </div>
    )
};

export default Odometer;