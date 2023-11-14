import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
function Random(){

    const [gif,setgif]=useState('');
    const [laoding,setLoading]=useState(false)
    async function fetch_data(){
        setLoading(true);
        const url=`https://api.giphy.com./v1/gifs/random?api_key=${API_KEY}`;
        const {data}= await axios.get(url);
        const image_source=data.data.images.downsized_large.url;
        setgif(image_source);
        setLoading(false);
    }

    useEffect(()=>{
        fetch_data();
    },[])
    function clickhandler() {
        fetch_data();
    }
    return(
        <div className="w-1/2  bg-green-600 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
            <h1 className="mt-[15px] mb-[20px] text-2xl uppercase underline font-bold">A Random Gif</h1>
            {laoding?(<Spinner/>):(<img src={gif} width="150px"/>)}
            <button onClick={clickhandler} className="w-10/12 bg-yellow-500 opacity-30 text-lg py-2 rounded-lg">Generate</button>
        </div>
    );
}

export default Random