

import UseAllOrders from "../../../Hook/UseAllOrders";
import UseCurrency from "../../../Hook/UseCurrency";
import CurrencyChart from "../../Shared/CurrencyChart/CurrencyChart";
import Accordin from "./Accordin/Accordin";
import Banner from "./Banner/Banner";
import Commitment from "./Commitment/Commitment";
import CompareCurrencies from "./CompareCurrencies/CompareCurrencies";
import Download from "./Download/Download";
import Features from "./Features/Features";
import Registered from "./Registered/Registered";
import StoreFind from "./StoreFind/StoreFind";
import PendingOrder from './../../../Hook/PendingOrder';
import UseCompletedOrder from './../../../Hook/UseCompletedOrder';
import UseAcceptedOrder from './../../../Hook/UseAcceptedOrder';
import UseUser from './../../../Hook/UseUser';


const Home = () => {
    const [currency,refetchCurrency] = UseCurrency()
    const [AllOrders,RefetchAllOrder] = UseAllOrders()
    const [PendingOrders,RefetchPendingOrder] = PendingOrder()
    const [CompletedOrders,RefetchCompletedOrder] = UseCompletedOrder()
    const [AcceptedOrders,RefetchAcceptedOrder] = UseAcceptedOrder()
    const [Users,RefetchUsers] = UseUser()
    return (
        <div>
            <Banner></Banner>
            <Commitment></Commitment>
            <Features></Features>
            <CurrencyChart currency={currency}></CurrencyChart>
            <StoreFind></StoreFind>
            <CompareCurrencies></CompareCurrencies> 
            <Accordin></Accordin>          
            {/* <Download></Download> */}
        <Registered></Registered>
            
        </div>
    );
};

export default Home;