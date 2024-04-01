

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


const Home = () => {
    const [currency,refetchCurrency] = UseCurrency()
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