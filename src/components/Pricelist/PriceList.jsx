import React, { useEffect, useState } from 'react';
import PriceCard from '../Pricecard/PriceCard';

const PriceList = () => {
    const[prices,setPrices]= useState([]);

    useEffect(()=>{
        fetch("price.json")
        .then(res => res.json())
        .then(data=> setPrices(data))

    },[])
    return (
        <div>
            <h2 className='text-3xl bg-sky-500 font-semibold p-6 text-white'>Awesome Affordable Prices</h2>
           <div className='grid gap-4 md:grid-cols-3'>
           {
                prices.map(price => <PriceCard key={price.id} price={price}/>)
            }
           </div>
        </div>
    );
};

export default PriceList;