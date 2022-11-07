import { useState } from "react";
import NFTItem from "../../../../components/NFTItem";
import NFTItemExplore from "../../../../components/nftItemExplore";
import { NFTListItems } from "./data";

const NFTList = ({ value1, value }) => {
    const [nfts, setNFTs] = useState(NFTListItems);

    return (
        <div className="dark:bg-[#1A1D36] lg:pl-[300px] xs:p-4 sm:px-10 sm:pt-[8.5em] 
        lg:pt-[9em] pb-0 lg:pb-12 gap-y-10 z-10 justify-items-center grid gap-12
        3xl:grid-cols-7 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
            {
                nfts.map((item, index) => {
                    return (
                        item.price <= value && item.price >= value1 ?
                            <NFTItemExplore info={item} key={index} keys={index} /> :
                            <></>
                    )
                })
            }
        </div>
    )
}
export default NFTList;