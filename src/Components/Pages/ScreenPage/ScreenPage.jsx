import React from 'react';
import UseCurrency from './../../../Hook/UseCurrency';
import CurrencyChart from './../../Shared/CurrencyChart/CurrencyChart';

const ScreenPage = () => {
    const [currency,setCurrency] = UseCurrency()
    return (
        <div>
             <CurrencyChart currency={currency}></CurrencyChart>
        </div>
    );
};

export default ScreenPage;