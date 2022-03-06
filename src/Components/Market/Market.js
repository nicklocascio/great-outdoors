import MarketList from "./Buy/MarketList";
import Sell from "./Sell/Sell";
import {
    getAllMarket,
    createItem,
} from "../../Services/Market.service"

import React, { useState, useEffect } from 'react';

import "./marketStyles.css";

const Market = () => {
    // variables in the state to hold data
    const [marketItems, setMarketItems] = useState([]);

    // asynchronously load data with useEffect
    useEffect(() => {
        getAllMarket().then((data) => {
            setMarketItems(data);
        })
    }, []);

    // state variables for form inputs and flag for form submission
    const [add, setAdd] = useState(false);
    const [item, setItem] = useState();
    const [size, setSize] = useState();
    const [gender, setGender] = useState();
    const [level, setLevel] = useState();
    let fileInput = React.createRef();
    
    // once form is complete and submitted, send data to database
    useEffect(() => {
        if(add && item && size && gender && level) {
            console.log(fileInput.current.files[0]);
            createItem(item, fileInput.current.files[0], size, gender, level).then((newItem) => {
                setAdd(false);
                setMarketItems([...marketItems, newItem]);
            })
        } else {
            setAdd(false);
        }
    }, [add, item, fileInput, size, gender, level, marketItems]);

    // handle form changes and submission
    const itemChangeHandler = (e) => {
        setItem(e.target.value);
    };

    const sizeChangeHandler = (e) => {
        setSize(e.target.value);
    };

    const genderChangeHandler = (e) => {
        setGender(e.target.value);
    }

    const levelChangeHandler = (e) => {
        setLevel(e.target.value);
    };

    const onClickHandler = (e) => {
        e.preventDefault();
        setAdd(true);
    };

    return (
        <div>
            <h1 className="page-title">Marketplace</h1>
            <hr />
            <Sell 
                itemChange={itemChangeHandler}
                fileInput={fileInput}
                sizeChange={sizeChangeHandler}
                genderChange={genderChangeHandler}
                levelChange={levelChangeHandler} 
                onClick={onClickHandler}
            />
            {marketItems.length > 0 && (
                <MarketList marketItems={marketItems}/>
            )}
        </div>
    );
};

export default Market;