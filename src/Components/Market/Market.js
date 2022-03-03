
import MarketList from "./Buy/MarketList";
import {getById} from "../../Services/getData";
import Sell from "./Sell/Sell";
import React, {useState} from 'react';
import {useEffect} from 'react';
import "./marketStyles.css";


//Instead of doing the data read in App, we did it in Market
//to simulate what we will do in our project
const Market = () => {

    


    return (
        <div>
            <h1 className="page-title">Marketplace</h1>
            <hr />
            <Sell />
            <MarketList passObj={primStore}/>
        </div>
    );
};

export default Market;