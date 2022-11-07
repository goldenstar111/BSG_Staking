import { useContext, useState } from 'react';
import { ThemeContext } from '../../../../utils/theme/ThemeContext';
import images from '../../../../constants/images';
import CheckBox from '../../../../components/checkbox';
import DropDown from '../../../../components/dropDown';
import Slider from 'react-custom-slider';
import { Link } from "react-router-dom";

const NFTSideBar = ({ value, value1, handle, handle1, openclassName }) => {
    // const [value, setValue] = useState(0)
    //////  jsx ///////

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <ThemeContext.Consumer>
            {({ isToggle, toggleTheme }) => (
                <aside className='fixed md:hidden sm:hidden xs:hidden lg:block xl:block inset-y-0 flex z-40 dark:bg-bg-sidebar-dark overflow-y-auto ' aria-label="Sidebar">
                    <div className="w-64 bg-white rounded dark:bg-bg-sidebar-dark">
                        <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
                            <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto dark:bg-bg-sidebar-dark dark: text-white">
                                <Link to={"/home"} className="flex items-center flex-shrink-0 px-4 space-x-2 dark:bg-bg-sidebar-dark">
                                    <img className="h-8 w-auto" src={images.Logo} alt="logo" />
                                    <div>
                                        <h1 className='text-xl md:text-lg font-bold text-black dark:text-white'>SLIDEGER</h1>
                                        <p className='text-[0.6rem] md:text-[0.6rem] text-black dark:text-gray-400'>Decentralized Payment Network</p>
                                    </div>
                                </Link>
                            </div>

                            <DropDown title="Categories" className="px-6">
                                <div className='flex justify-between items-center pt-2'>
                                    <CheckBox title={"Cartonns"} />
                                    <span className='text-xs text-[#D273FF]'>100</span>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <CheckBox title={"DC Comics"} />
                                    <span className='text-xs text-[#D273FF]'>315</span>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <CheckBox title={"Mangas/Anime"} />
                                    <span className='text-xs text-[#D273FF]'>273</span>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <CheckBox title={"Disney"} />
                                    <span className='text-xs text-[#D273FF]'>100</span>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <CheckBox title={"Marvel"} />
                                    <span className='text-xs text-[#D273FF]'>315</span>
                                </div>
                            </DropDown>

                            {/* progress Bar */}
                            <DropDown title={"Price"}>
                                <div className='pt-8 dark:bg-bg-sidebar-dark'>
                                    <Slider className="dark:bg-sidebar-dark "
                                        value={value}
                                        markersSize={30}
                                        markers={3}
                                        onChange={(value) => handle(value)}
                                        valueRenderer={(value) => `${value}$`}
                                        valueLabelColor="gray"
                                        valueLabelStyle={{ height: "25px", padding: "3px", border: "none", borderRadius: "3px", color: "white" }}
                                        valueLabelPadding={-54}
                                        min={0}
                                        max={50000}
                                        handlerSize={20}
                                        handlerShape="rounded"
                                        style={{ background: !isToggle ? "#2E395F" : "white" }}
                                        trackColor={!isToggle ? "#aaa" : "#eee"}
                                        fillColor="#D273FF"
                                        trackLength={180}
                                        fontColor={!isToggle ? "white" : "black"}
                                        valueLabelActiveColor="transparent"
                                        grabCursor={true}
                                    />
                                </div>
                                <div className='grid grid-cols-2 gap-2  dark:bg-bg-sidebar-dark'>
                                    <div className='flex flex-col gap-2'>
                                        <h3 className='text-sm text-gray-400'>Price From</h3>
                                        <input type="text"
                                            className='p-2 border rounded-md text-sm font-bold dark:bg-transparent
                                             dark:border-gray-400 dark:text-white'
                                            // defaultValue={numberWithCommas(value1)}
                                            onChange={(ev) => handle1(parseInt(ev.target.value) || 0)}
                                            value={value1}
                                        />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <h3 className='text-sm text-gray-400'>Price To</h3>
                                        <input type="text"
                                            className='p-2 border rounded-md text-sm font-bold dark:bg-transparent
                                             dark:border-gray-400 dark:text-white'
                                            onChange={(ev) => handle(parseInt(ev.target.value) || 0)}
                                            value={value}
                                        />
                                    </div>
                                </div>
                            </DropDown>

                            <DropDown title="Size">
                                <div className='grid grid-cols-3 gap-1 py-4'>
                                    <button className='hover:bg-[#6876a5]/50 active:bg-[#6876a5]/20 pressed:bg-[#6876a5]/30 text-xs p-2
                                     px-2 border rounded-md dark:text-white'>Small</button>
                                    <button className='hover:bg-[#6876a5]/50 active:bg-[#6876a5]/20 pressed:bg-[#6876a5]/30 text-xs p-2
                                     px-2 border rounded-md dark:text-white'>Medium</button>
                                    <button className='hover:bg-[#6876a5]/50 active:bg-[#6876a5]/20 pressed:bg-[#6876a5]/30 text-xs p-2
                                     px-2 border rounded-md dark:text-white'>Large</button>
                                </div>
                            </DropDown>

                            <DropDown title="Rating">
                                <div className='flex justify-between items-center py-1'>
                                    <CheckBox title={"Top Rated"} />
                                    <span className='text-xs text-[#D273FF]'>100</span>
                                </div>
                                <div className='flex justify-between items-center py-1'>
                                    <CheckBox title={"Best today"} />
                                    <span className='text-xs text-[#D273FF]'>315</span>
                                </div>
                                <div className='flex justify-between items-center py-1'>
                                    <CheckBox title={"Good"} />
                                    <span className='text-xs text-[#D273FF]'>273</span>
                                </div>
                                <div className='flex justify-between items-center py-1'>
                                    <CheckBox title={"Not Good"} />
                                    <span className='text-xs text-[#D273FF]'>100</span>
                                </div>
                            </DropDown>
                        </div>
                    </div>
                </aside>
            )}
        </ThemeContext.Consumer>
    )
}

export default NFTSideBar;