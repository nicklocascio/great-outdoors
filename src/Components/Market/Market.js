import MarketList from "./MarketList";
import {getById} from "../../Services/getData";
import React, {useState} from 'react';
import {useEffect} from 'react';;


//Instead of doing the data read in App, we did it in Market
//to simulate what we will do in our project
const Market = () => {

    const [item, setItem] = useState();

    useEffect(() => {
        console.log("in use effect...");
        getById("BpdB6KAK8a").then((item) => {
            setItem(item);
            console.log(item.attributes);
        });
    }, []);

    var primStore = null;

    if(item){
        primStore = {
            name: item.get("item"),
            level: item.get("level"),
            size: item.get("size"),
            gender: item.get("gender")
        }
    }

    return (
        <div>
            <MarketList passObj={primStore}/>
        </div>
    );
};

export default Market;