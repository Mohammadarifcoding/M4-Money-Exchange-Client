import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import UseAxious from '../../../../../Hook/UseAxious';
import UseCurrency from '../../../../../Hook/UseCurrency';
import UseUpsell from '../../../../../Hook/UseUpsell';
import { AuthContext } from '../../../../../Provider/AuthProvider';

const CurrencyItemTable = ({ item }) => {
    const { UpdateCurrencyData, SetUpdateCurrencyData } = useContext(AuthContext);
    const [FetchData, setFetchData] = useState(false);
    const [upsellValue, refetchUpsell] = UseUpsell();
    const Axious = UseAxious();
    const [currency, refetch] = UseCurrency();

    // useEffect(() => {
    //     if (item.value != undefined) {
    //         setFetchData(true);
    //     }
    // }, [item]);

    const {
        data: curenc,
        isLoading: NotGettingCurrency,
        isFetched
    } = useQuery({
        queryKey: [`currrencyUpdate${item?.value}`, UpdateCurrencyData],
        enabled: UpdateCurrencyData,
        queryFn: async () => {
            const fetchData = await axios.get(`https://api.apilayer.com/exchangerates_data/convert?to=${item.value}&from=GBP&amount=1`, {
                headers: {
                    apikey: 'e54hYFC2Xu16iaXTElyJiCm96bCQpmT0'
                }
            });
            const updateData = await Axious.put(`/UpdateCurrencyPrice/${item?.value}`, { Rate: fetchData.data?.info?.rate });
            return updateData.data;
        }
    });

    useEffect(() => {
        if (isFetched) {
            refetch();
            console.log('Refetch the data');
        }
    }, [isFetched]);
    // useEffect(()=>{
    //    if(!NotGettingCurrency){
    //       Axious.put(`/UpdateCurrencyPrice/${item?.value}`,{Rate : curenc?.info?.rate})
    //       .then(res =>{
    //         console.log(res.data)
    //       })
    //    }
    // },[NotGettingCurrency,item.value,Axious,UpdateCurrencyData])

    // const { data: currency } = useQuery({
    //     queryKey: [`currrency${item?.value}`],
    //     enabled: FetchData,
    //     queryFn: async () => {
    //         const fetchData = await axios.get(`https://api.apilayer.com/exchangerates_data/convert?to=${item?.value}&from=GBP&amount=1`, {
    //             headers: {
    //                 apikey: 'e54hYFC2Xu16iaXTElyJiCm96bCQpmT0'
    //             }
    //         });
    //         return fetchData.data;
    //     }
    // });

    const SellValue = item?.Sell / 100 + 1;
    const BuyValue = item?.Buy / 100 + 1;


    const DeleteCurrency = (value)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                Axious.delete(`/currencyDelete/${value}`)
                .then(item => {
                    refetch()
                    Swal.fire({
                        title: `Deleted ${value}! `,
                        text: "Your Currency has been deleted.",
                        icon: "success"
                      });
                })
              
            }
          });
    }

    return (
        <tr className="text-start" key={item?.value}>
            <td className="py-2 pl-4 md:text-base sm:text-sm text-[12px]">{item?.value} -></td>
            <td className="py-2 pl-4 md:text-base sm:text-sm text-[12px] text-start">{item?.label} -></td>

            {NotGettingCurrency ? (
                <td className="col-span-3 flex justify-center ">
                    <div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-4 border-r-transparent border-l-transparent border-sky-400"></div>
                </td>
            ) : (
                <>
                    <td className="py-2 pl-4 md:text-base sm:text-sm text-[12px]">
                        {/* Calculate the increased sell price */}
                        {item?.Rate?.toFixed(4)} GBP -> {/* Use the admin-defined percentage */}
                    </td>
                    <td className="py-2 pl-4 md:text-base sm:text-sm text-[12px]">
                        {/* Calculate the increased sell price */}
                        {(item?.Rate * BuyValue)?.toFixed(4)} GBP -> {/* Use the admin-defined percentage */}
                    </td>

                    <td className="py-2 pl-4 md:text-base sm:text-sm text-[12px]">{(item?.Rate * SellValue)?.toFixed(4)} GBP</td>
                </>
            )}

            <td className="py-2 pl-4 md:text-base sm:text-sm text-[12px]">
                <Link to={`/dashboard/update/${item?.value}`}>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 border border-blue-500 rounded shadow">Update</button>
                </Link>
            </td>
            <td  className="py-2 pl-4 md:text-base sm:text-sm text-[12px]">
                <button onClick={()=>{DeleteCurrency(item?.value)}} className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 border border-red-500 rounded shadow">Delete</button>
            </td>
        </tr>
    );
};

export default CurrencyItemTable;
