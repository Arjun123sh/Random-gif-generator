import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
function Tag(){
    const [gif,laoding,fetch_data]=useGif(tag);
    const [tag,setTag]=useState("car");
    function changeHandler(e){
        setTag(e.target.value);
    }
    return(
        <div className="w-1/2  bg-blue-600 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
            <h1 className="mt-[15px] mb-[20px] text-2xl uppercase underline font-bold">A Random Gif</h1>
            {laoding?(<Spinner/>):(<img src={gif} width="150px"/>)}
            <input className="w-10/12 opacity-30 text-lg py-2 rounded-lg bg-yellow-500" onChange={changeHandler} value={tag}/>
            <button onClick={()=>fetch_data(tag)} className="w-10/12 bg-yellow-500 opacity-30 text-lg py-2 rounded-lg">Generate</button>
        </div>
    );
}

export default Tag