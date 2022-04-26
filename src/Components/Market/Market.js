import MarketList from "./Buy/MarketList";
import Sell from "./Sell/Sell";
import {
    getAllMarket,
    createItem,
} from "../../Services/Market.service";
import React, { useState, useEffect } from 'react';
import Parse from "parse";

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
    const [model, setModel] = useState();
    const [size, setSize] = useState();
    const [gender, setGender] = useState();
    const [level, setLevel] = useState();
    let fileInput = React.createRef();
    
    // once form is complete and submitted, send data to database
    useEffect(() => {
        if(add && item && size && gender && level) {
            console.log(fileInput.current.files[0]);
            createItem(item, fileInput.current.files[0], model, size, gender, level).then((newItem) => {
                alert("Posted!");
                setAdd(false);
                setMarketItems([...marketItems, newItem]);
                window.location.href = "/market";
            })
        } else {
            setAdd(false);
        }
    }, [add, item, model, fileInput, size, gender, level, marketItems]);

    // handle form changes and submission
    const itemChangeHandler = (e) => {
        setItem(e.target.value);
    };

    const sizeChangeHandler = (e) => {
        setSize(e.target.value);
    };

    const modelChangeHandler = (e) => {
        setModel(e.target.value);
    }

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

    // conditionally render the sale section if a user is signed in
    return (
        <div>
            <h1>Marketplace</h1>
            {Parse.User.current() ? (
                <Sell 
                itemChange={itemChangeHandler}
                fileInput={fileInput}
                modelChange={modelChangeHandler}
                sizeChange={sizeChangeHandler}
                genderChange={genderChangeHandler}
                levelChange={levelChangeHandler} 
                onClick={onClickHandler}
            />
            ) : (
                <div>
                <br />
                <h3>You must sign up or log in to sell items</h3>
                <br />
                </div>
            )}
            {marketItems.length > 0 && (
                <MarketList marketItems={marketItems}/>
            )}
        </div>
    );
};

export default Market;