
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
    vision:'Buy Currency',
    link:'/purchase/EUR/Order',
    
  },{
    icon : '/Images/deal.png',
    feature : [
      'Order online and we’ll deliver  to your door',
      'FREE delivery on all orders £800 or more',
      '0% commission'
    ],
    vision:'Sell Currency',
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
               <div className="text-[147px] font-mono">
                 {homeDelivery.icon}
               </div>
            </div>
            <div className="px-4 py-3">
            <div className="flex flex-col gap-5">
              {
                homeDelivery.feature?.map(item =>  <h2 className="flex gap-2 text-[11px] items-center"> <MdDone className="text-2xl text-Primary"></MdDone> <span> {item}</span></h2>)
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
                <div onClick={(e_) => e_.stopPropagation()} className={`absolute max-w-[600px] p-6 text-center bg-white drop-shadow-2xl rounded-lg ${openModal ? 'translate-y-0 opacity-1 duration-300' : 'translate-y-20 opacity-0 duration-150'}`}>
                    {/* <div className="space-y-3 flex flex-col justify-center items-center">
                        <svg className={`${openModal ? 'scale-100 rotate-0 duration-200' : 'scale-0 rotate-90'} delay-100`} width={75} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g><path fill="#16BAC5" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"></path></g></svg>
                        <h6 className="font-medium text-center text-slate-700">Elevate your React projects with beautifully crafted components designed for TailwindCSS.</h6>
                        <button onClick={() => setOpenModal(false)} className="text-white bg-[#16BAC5] px-6 py-2 rounded-full">Explore now</button>
                        <button onClick={() => setOpenModal(false)} className="text-[#c51636] hover:text-white hover:bg-[#c51636] px-6 py-2 border border-[#c51636] rounded-full">Not Now</button>
                    </div> */}
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
