import React from 'react'
import NavBar from '../components/NavBar';
import data from "../components/MostRequested/data.json";
import Card from '../components/MostRequested/Card';
import Footer from '../components/Footer';
import ServicesCards from '../components/ServicesCards';
import Footer from "../components/Footer"




export const Services = () => {
    return (
        <>
            <NavBar />
            <div className="flex flex-col justify-center">
                <h2 className='text-[#28315C] align-middle font-extrabold text-5xl mt-28 text-center'>
                    Contrata profesionales de confianza
                </h2>
                <p className='mt-6 text-center text-2xl max-w-3xl mx-auto'>
                    Solicita un presupuesto sin cargo, con total confianza.
                    No compartiremos tus datos
                </p>
            </div>
            <div className="flex justify-center flex-wrap gap-5 max-w-[1500px] mt-5 mx-auto pt-10">
            {data.resources.map((requested, index) => {
            return (
              <div key={index}>
                <Card imagen={requested.imageUrl} title={requested.title} description={requested.descripcion} price={requested.price} /> 
              </div>

            )
          })}
            </div>
            <Footer/>
            <ServicesCards />
            <Footer />
        </>
    )
}
