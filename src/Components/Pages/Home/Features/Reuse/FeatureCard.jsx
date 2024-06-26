
import { MdDone } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const FeatureCard = ({data}) => {


  const {icon,feature } = data

  
  
  
  return (
    <div className='max-w-[350px] flex flex-col bg-white shadow-lg'>
    <div className='px-24 py-10 '>
               <img className='w-[150px]  ' src={icon} alt="" />
            </div>
            <div className="px-4 py-3">
            <div className="flex flex-col gap-5">
              {
                feature?.map(item =>  <h2 className="flex gap-2 text-[13px] font-medium  items-center"> <MdDone className="text-2xl text-Primary"></MdDone> <span> {item}</span></h2>)
              }
             
    
            </div>
            <div className="flex justify-center mt-3">
              <Link to={data.link}  className="btn text-white rounded hover:bg-[#1d2f51] bg-Primary w-full">{data?.vision} <IoIosArrowForward></IoIosArrowForward></Link>
            </div>
            </div>
           
          </div>
        
    );
};

export default FeatureCard;