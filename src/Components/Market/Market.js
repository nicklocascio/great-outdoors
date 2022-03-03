import MarketList from "./MarketList";
import React, {useState} from 'react';
import {useEffect} from 'react';;

import { getAllMarket } from "../../Services/getAllMarket";
import { getItemById } from "../../Services/getItem";
import { getReviewById } from "../../Services/getReview";
import { getAllReviews } from "../../Services/getAllReviews";

//Instead of doing the data read in App, we did it in Market
//to simulate what we will do in our project
const Market = () => {

    const [items, setItems] = useState();

    useEffect(() => {
        console.log("in use effect...");
        getAllMarket().then((data) => {
            setItems(data);
        });
    }, []);

    return(
        <div></div>
    );
};

export default Market;