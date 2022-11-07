import BasicModal from "./basicModal"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useState } from "react";
import Assets from "../Assets";
import { MyAssets, AllAssets } from "../../constants/data";
import { ThemeContext } from "../../utils/theme/ThemeContext";
import images from "../../constants/images";

const AssetsModal = ({ show, handle }) => {
    const [title, setTitle] = useState("Select Assets");
    const [content, setContent] = useState("Select Asset to start trading");
    const [massets, setmAssets] = useState(MyAssets);
    const [aassets, setaAssets] = useState(AllAssets);
    const [numMyAssets, setnumMyAssets] = useState(0);
    const [numAllAssets, setnumAllAssets] = useState(0);

    const handleCancel = () => {
        handle(false);
    }
    const handleSelectAssets = () => {
        setTitle("Select Assets");
        setContent("Select Asset to start trading");
    }
    const handleAllAssets = () => {
        setTitle("All Assets");
        setContent("Sending assets directly to any Stellar wallet");
    }

    return (
        <ThemeContext.Consumer>
            {({ isToggle, toggleTheme }) => (
                <BasicModal show={show} handle={handle}>
                    <div className="modal-header">
                        <div className="flex flex-col p-3">
                            <h3 className="text-md font-bold">{title}</h3>
                            <h3 className="text-xs text-gray-500">{content}</h3>
                        </div>
                    </div>
                    <div className="modal-body felx flex-col p-3  rounded-lg justify-center">
                        <Tabs>
                            <TabList>
                                <div className="grid grid-cols-2 gap-0 ">
                                    <Tab className={`p-2 text-sm px-3  border-b-gray-200 border-b-2 text-gray-500 modalTab text-center tabLeft`} onClick={handleSelectAssets} >My Assets</Tab>
                                    <Tab className={`p-2 text-sm px-3  border-b-gray-200 border-b-2 text-gray-500  modalTab text-center tabRight `} onClick={handleAllAssets}>All Assets</Tab>
                                </div>
                                <div className="flex mr-5 w-full mt-1 pt-2">
                                    <div htmlFor="" className=" flex text-sm p-2  border-y border-l border-r-0 rounded-l-md items-stretch">
                                        <img src={!isToggle ? images.searchDark : images.searchLight} alt="" className="self-center" />
                                    </div>
                                    <input type="text" placeholder="Search Contacts" className="  p-2 w-full  text-sm rounded-r-md border-r border-y border-l-0 " />
                                </div>
                            </TabList>
                            <TabPanel >
                                <div className="flex flex-col">
                                    {
                                        numMyAssets >= 0 && massets.map((item, index) => {
                                            return (
                                                <div key={index}
                                                    className="py-4 px-2 my-1 bg-stone-100 rounded-md">
                                                    <Assets info={item} index={index} selectedIndex={numMyAssets} handle={setnumMyAssets} />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </TabPanel>
                            <TabPanel >
                                <div className="flex flex-col">
                                    {
                                        aassets.map((item, index) => {
                                            return (
                                                <div key={index} className="py-4 px-2 my-1 bg-stone-100 rounded-md">
                                                    <Assets info={item} index={index} selectedIndex={numAllAssets} handle={setnumAllAssets} />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </TabPanel>
                        </Tabs>
                    </div>
                </BasicModal>
            )}
        </ThemeContext.Consumer>
    )
}

export default AssetsModal;