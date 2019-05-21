import React, { useState, useEffect } from 'react'

function Detail({ match }){

    useEffect(()=>{
        fetchItem();
    },);

    
    const [item,setItem] = useState({});

    const fetchItem = async() => {
        const ddd = "111";
        console.log(`${ddd}`)
        const fetchItem = await fetch(`https://fortnite-public-api.theapinetwork.com/prod09/item/get?ids=${match.params.id}`)
        const item = await fetchItem.json();
        setItem(item);
        console.log(item.images.background);
    }

    return (
        <div>
            <h1>{item.name}</h1>
            {/* <img src={item.images.background}/> */}
        </div>
    )
}

export default Detail;
