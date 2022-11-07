import { useEffect, useState } from "react";
import images from "../constants/images";
import { Link } from "react-router-dom";

const NFTItemExplore = ({ info, keys }) => {
    // console.log("infromation", info);
    const [item, setItem] = useState([]);

    useEffect(() => {
        setItem(info);
    }, [])

    return (
        <div className="p-3 pt-0 flex flex-col bg-[#fcfcfc] rounded-2xl h-fit relative max-w-[300px] px-auto">
            <div className="absolute rounded-full dark:bg-[#1c203b] bg-white top-0 translate-y-[-50%] translate-x-[-50%] left-[50%] ">
                <img src={(keys % 2) == 1 ? images.NFTTopIcon : images.NFTTopIcon1} width={32} height={28} className="relative" alt="" />
            </div>
            <div className={`w-full py-[6.5px] ${(keys % 2) == 1 ? "nfttop1_gradient" : "nfttop2_gradient"}`}></div>
            <img src={item.img} className="w-full h-[180px] 2xl:h-[260px]" alt="" />
            <div className="grid grid-cols-5 py-2">
                <div className="col-span-3 flex items-center text-sm"><h3 >{item.title}</h3></div>
                <div className="col-span-2 flex items-center gap-3"><img src={item.coinImg} width={20} alt="" /><h3 className="text-xs">{item.coinType}</h3></div>
                <div className="col-span-5 border-b my-1"></div>
                <div className="col-span-3 flex items-center gap-3">
                    <div className=""><img src={images.nftPenceil} width={16} /></div> <div className="flex flex-col"><p className="text-xs">Articst</p><p className="text-xs">Muhammed Alaa</p></div>
                </div>
                <div className="col-span-2 flex items-center gap-3">
                    <div className="justify-self-center"><img src={images.nftAution} width={16} alt="" /></div> <div className="flex flex-col"><p className="text-xs">Highest Bid</p><p className="text-xs">DAVID SAMS</p></div>
                </div>
                <div className="col-span-5 flex">
                    <Link to="/nft/detail" className="w-full"><button className="bg-btn_pink text-xs text-white w-full p-3 rounded-lg mt-3">View Listing</button></Link>
                </div>
            </div>
        </div>
    )
}
export default NFTItemExplore;