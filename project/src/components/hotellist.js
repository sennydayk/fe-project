import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './hotellist.css'
import {fetchData} from './action'

const Hotellist = () => {
    const data1 = useSelector(state => state.data);

    const data = data1.filter(item=> item.firstimage !== '')

    return (
        <>
        {data.map((item)=>
        <>
        <div className ='hotelitem'>
            <img className='hotelimage' src ={ item.firstimage} />
            <div className='hotelinfo'>
                <div>{ item.title} </div>
                <div>{ item.addr1} </div>
                <div>{ item.addr2} </div>
                <div>{item.mlevel} </div>
            </div>
        </div>
        </>
        )}
        </>
    );
};

export default Hotellist;