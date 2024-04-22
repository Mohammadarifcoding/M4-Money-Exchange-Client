
import { Link } from 'react-router-dom';
import UseAxious from '../../../../Hook/UseAxious';

import Swal from 'sweetalert2';
import moment from 'moment';
import { MdDeleteForever } from 'react-icons/md';
import { FaInfoCircle } from 'react-icons/fa';
import UseAllOrders from '../../../../Hook/UseAllOrders';
import { useState } from 'react';

const AllOrders = () => {
    const [AllOrder, RefetchAllOrder] = UseAllOrders()
    const [search , setSearch] = useState('')
    const Axious = UseAxious();

    const [AllOrdersCopy,setAllOrdersCopy] = useState([...AllOrder])

    const handleRemoveOrder = (orderId) => {
        // Logic to accept the order with orderId
        // This function can update the order status or perform other actions
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Axious.delete(`/deleteOrder/${orderId}`).then((res) => {
                    RefetchAllOrder();
                    Swal.fire({
                        title: 'Deleted!',
                        text: 'Your file has been deleted.',
                        icon: 'success'
                    });
                });
            }
        });
    };

    const handleSearch = ()=>{
        console.log(search)
        
       const allItem = [...AllOrder] 
       const findTheItem = allItem.filter(item => item.Order_Id == parseInt(search))
       setAllOrdersCopy([...findTheItem])
       console.log(findTheItem)
    }
    return (
        <div className="bg-[#021431] text-white min-h-screen flex flex-col">
        <header className="bg-gray-800 py-4">
            <h1 className="text-3xl text-center font-bold">All Orders</h1>
        </header>

        <main className="flex-1 p-6 mt-10">
        <div className='flex justify-start gap-1 '>
              <input onChange={(e)=>{setSearch(e.target.value)}} type="text" className='rounded-md text-black px-3 py-2 focus:outline-none' /> 
              <button onClick={handleSearch} className='px-3 py-2 bg-[#1F2937] hover:scale-105 transition-all duration-200 rounded-lg'>Search </button>
        </div>
            <div className="overflow-x-auto mt-4">
                <div className="min-w-max sm:min-w-max">
                    {/* Option for admin to set percentage increase */}

                    {/* Currency Table */}
                    <table className="bg-gray-800 p-4 w-full rounded-lg">
                        <thead>
                            <tr className="text-start">
                                <th className="py-3 pl-4 text-start">Order Id</th>
                                <th className="py-3 pl-4 text-start">Name</th>
                                <th className="py-3 pl-4 text-start">Phone Number</th>
                                <th className="py-3 pl-4 text-start">Way</th>
                                {/* <th className="py-3 pl-4 text-start">Amount</th>
                                <th className="py-3 pl-4 text-start">FX Amount</th> */}
                                <th className="py-3 pl-4 text-start">Time</th>
                                <th className="py-3 pl-4 text-start">Status</th>
                                <th className="py-3 pl-4 text-start">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {AllOrdersCopy?.map((order) => (
                                <tr key={order?._id} className="text-start">
                                    <td className="py-2 pl-4">{order?.Order_Id}</td>
                                    <td className="py-2 pl-4">{order?.Name}</td>
                                    <td className="py-2 pl-4">{order?.Phone_Number}</td>
                                    <td className="py-2 pl-4">{order?.title}</td>
                                    {/* <td className="py-2 pl-4">{order?.TotalMoney}</td>
                                    <td className="py-2 pl-4">{order?.FxAmount}</td> */}
                                    <td className="py-2 pl-4">{moment(order?.time).format('MMMM Do YYYY')}</td>
                                    <td className="py-2 pl-4">{order?.Status}</td>
                                    <div className='flex gap-3 mx-2'>
                                    <td>
                                        <Link to={`/dashboard/orderDetails/${order?._id}`}>
                                            <button className="bg-blue-500 text-white py-2 px-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
                                                <FaInfoCircle></FaInfoCircle>
                                            </button>
                                        </Link>
                                    </td>
                                    
                                    <td className="">
                                        <button
                                            onClick={() => {
                                                handleRemoveOrder(order?._id);
                                            }}
                                            className="bg-red-500 text-white py-2 px-3 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300"
                                        >
                                            <MdDeleteForever />
                                        </button>
                                    </td>
                                    </div>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
        <footer className="bg-gray-800 py-4 text-center">
            <p>© 2024 Orders Dashboard. All rights reserved.</p>
        </footer>
    </div>
    );
};

export default AllOrders;