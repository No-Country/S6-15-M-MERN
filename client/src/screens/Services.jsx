import React from 'react'
import ServicesCards from '../components/ServicesCards';
import { useSelector } from 'react-redux';







export const Services = () => {

    const user = useSelector(state => state.user);

    console.log(user)


    return (
        <div className='mb-20'>
            <ServicesCards />
        </div>
    )
}
