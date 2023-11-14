import React from "react";

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
const url1=`https://api.giphy.com./v1/gifs/random?api_key=${API_KEY}`;
const url2=`https://api.giphy.com./v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
const useGif=(tag)=>{
    const [gif,setgif]=useState('');
    const [laoding,setLoading]=useState(false)
    async function fetch_data(tag){
        setLoading(true);
        const {data}= await axios.get(tag?(url2):(url1));
        const image_source=data.data.images.downsized_large.url;
        setgif(image_source);
        setLoading(false);
    }
    useEffect(()=>{
        fetch_data();
    },[])
    return {gif,laoding,fetch_data};
}

export default useGif