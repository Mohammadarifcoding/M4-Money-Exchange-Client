import { Outlet } from 'react-router-dom';
import Footer from '../Components/Shared/Footer/Footer';
import Navbar from '../Components/Shared/Navbar/Navbar';

const Layout = () => {
    // const { data: curenc, isLoading:NotGettingCurrency } = useQuery({
    //     queryKey: [`currrency${item?.value}`],
    //     queryFn: async () => {
    //         const fetchData = await axios.get(`https://api.apilayer.com/exchangerates_data/convert?to=${item.value}&from=GBP&amount=1`, {
    //             headers: {
    //                 apikey: 'vKYNotQBrR4Sf1aiN7bPEPN9gEr5OnyU'
    //             }
    //         });
    //         return fetchData.data;
    //     }
    // });

    // useEffect(()=>{
    //    if(!NotGettingCurrency){
    //       Axious.put(`/UpdateCurrencyPrice/${item?.value}`,{Rate : curenc?.info?.rate})
    //       .then(res =>{
    //         console.log(res.data)
    //       })
    //    }
    // },[NotGettingCurrency,item.value,Axious])
    return (
        <div className="overflow-hidden ">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;
