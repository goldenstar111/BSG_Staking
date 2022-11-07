import { useEffect, useState } from "react";
import images from "../constants/images";
import { Link } from "react-router-dom";

const NFTItem = ({ info }) => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        setItem(info);
    }, []);

    return (
        <div className="p-3 flex flex-col bg-white rounded-2xl my-12">
            <img src={item.img} className="w-full" alt="" />
            <div className="grid grid-cols-5 py-2">
                <div className="col-span-3 flex items-center text-sm"><h3 >{item.title}</h3></div>
                <div className="col-span-2 flex items-center gap-3"><img src={item.coinImg} alt="" /><h3 className="text-xs">{item.coinType}</h3></div>
                <div className="col-span-5 border-b my-3"></div>
                <div className="col-span-3 flex items-center gap-3">
                    <div className=""><img src={images.nftPenceil} /></div> <div className="flex flex-col"><p className="text-xs">Articst</p><p className="text-xs">Muhammed Alaa</p></div>
                </div>
                <div className="col-span-2 flex items-center gap-3">
                    <div className="justify-self-center"><img src={images.nftAution} alt="" /></div> <div className="flex flex-col"><p className="text-xs">Highest Bid</p><p className="text-xs">DAVID SAMS</p></div>
                </div>
                <div className="col-span-5 flex">
                    <Link to="/nft/detail" className="w-full"><button className="bg-btn_pink text-xs text-white w-full p-3 rounded-lg mt-3">View Listing</button></Link>
                </div>
            </div>
        </div>
    )
}
export default NFTItem;