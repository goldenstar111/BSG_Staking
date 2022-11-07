import AssetsCheckBox from "./assetsCheckbox";

const Assets = ({ info, index, selectedIndex, handle }) => {
    // console.log("Assets INfo", info);
    return (
        <div className="flex justify-between items-stretch">
            <div className="flex gap-2 items-center">
                <img src={info.img} className="w-10" alt="" />
                <div className="flex flex-col">
                    <h3 className="text-xs text-gray-500">{info.tTitle}</h3>
                    <h3 className="font-bold">{info.bTitle}</h3>
                </div>
            </div>
            <div className="self-center">
                <AssetsCheckBox index={index} selectedIndex={selectedIndex} handle={handle} />
            </div>
        </div>
    )
}
export default Assets;