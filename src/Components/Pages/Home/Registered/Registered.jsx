import React from 'react';
import Container from '../../../Shared/Container/Container';

const Registered = () => {
    return (
        <Container>
        <div className='flex flex-col gap-3'>
             <div className='flex  flex-col gap-20 '>
                 <div className=' flex lg:flex-row lg:gap-0 gap-10  w-full flex-col items-center'>
                    <h2 className='font-bold flex-1 md:text-4xl sm:text-3xl text-2xl flex gap-2 md:justify-start justify-center md:items-start items-center'>Authorised by <span className='lg:block hidden'>:</span></h2>
                    <div className='flex flex-1 justify-center items-center w-full'>
                    <img className='lg:w-[300px] md:w-[200px] mx-auto' src="/Images/hm.png" alt="" />
                    </div>              
                 </div>
                 <div className=' flex lg:flex-row lg:gap-0 gap-10  w-full flex-col items-center'>
                    <h2 className='font-bold flex-1 md:text-4xl sm:text-3xl text-2xl flex gap-2 md:justify-start justify-center md:items-start items-center'>Global Partners <span className='lg:block hidden'>:</span></h2>
                    <div className='flex flex-1 justify-center md:flex-row flex-col items-center w-full gap-10'>
                    <img className='lg:w-[300px] md:w-[200px] mx-auto' src="/Images/ria.png" alt="" />
                    <img className='lg:w-[300px] md:w-[200px] mx-auto' src="/Images/westernUnion.png" alt="" />
                    </div>                    
                 </div>
             </div>
        </div>
        </Container>

    );
};

export default Registered;