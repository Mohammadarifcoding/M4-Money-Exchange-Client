
import { MdDone } from "react-icons/md";
import Container from "../../../Shared/Container/Container";
import FeatureCard from "./Reuse/FeatureCard";
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useState } from "react";


const Features = () => {
  const [openModal, setOpenModal] = useState(false);
  const data = [{
    icon : '/Images/city.png',
    feature : [
      'Reserve online, pay and collect in store',
      'Enhanced web rates',
      '0% commission'
    ],
    vision:'Click and buy',
    link:'/purchase/EUR/Order',
    
  },{
    icon : '/Images/deal.png',
    feature : [
      'Sell you unused currency online to better rates',
      'Enhanced web rates',
      '0% commission'
    ],
    vision:'Click and sell',
    link:'/purchase/EUR/Sell'
  }]

  const homeDelivery = {
    icon : <TbTruckDelivery />,
    feature : ['Order Online and get into your home','Safe and secure delivery system','No extra and hidden charge'],
    vision:'Get Home Delivery',
    link:'/'
  }
  return (
<div>
    {/* {
        data?.map(item => <FeatureSection key={item.title} data={item} direction={true}></FeatureSection>)
    } */}


<div className={`bg-gray-100 mb-10  py-20`}>
        <Container>
          
          <h2 className="sm:text-2xl text-xl mb-10 text-[#1E4A9A] sm:text-start text-center font-medium">More ways to get travel Money</h2>
            <div className="flex justify-center gap-20 items-center flex-wrap">
              {
                data.map(item => <FeatureCard key={item.icon} data={item}></FeatureCard>)
              }
                  <div className='max-w-[350px] flex flex-col bg-white shadow-lg'>
    <div className='px-24 py-10 '>
               <div className="text-[165px] font-mono">
                 {homeDelivery.icon}
               </div>
            </div>
            <div className="px-4 py-3">
            <div className="flex flex-col gap-5">
              {
                homeDelivery.feature?.map(item =>  <h2 className="flex gap-2 text-[13px] font-medium  items-center"> <MdDone className="text-2xl text-Primary"></MdDone> <span> {item}</span></h2>)
              }
            </div>
            <div className="flex justify-center mt-3">
              <button onClick={() => setOpenModal(true)} className="btn text-white rounded hover:bg-[#1d2f51] bg-Primary w-full">{homeDelivery?.vision} <IoIosArrowForward></IoIosArrowForward></button>  
            </div>
            </div>
          </div>
            </div>


            {/* Modal  */}
            <div className="max-w-[600px] mx-auto flex items-center justify-center">
            <div onClick={() => setOpenModal(false)} className={`fixed flex justify-center items-center z-[100] ${openModal ? 'visible opacity-1' : 'invisible opacity-0'} inset-0 backdrop-blur-sm bg-black/60 duration-100`}>
                <div  className={`absolute  max-w-[600px] p-6 text-center bg-white drop-shadow-2xl rounded-lg ${openModal ? 'translate-y-0 opacity-1 duration-300' : 'translate-y-20 opacity-0 duration-150'}`}>
<div className="relative">
  <img src="./Images/homeDelivery.jpg" alt="Home Delivery" className="w-full h-auto" />
  <div className="absolute inset-0 bg-black opacity-50" />
  <div className="absolute inset-0 flex items-center justify-center">
    {/* Your overlay content goes here */}
    <h1 className="text-white text-4xl font-bold">Home Delivery is not Available now</h1>
  </div>
</div>


                </div>
            </div>
        </div>
        </Container>
      </div>
    
</div>
  );
};

export default Features;
