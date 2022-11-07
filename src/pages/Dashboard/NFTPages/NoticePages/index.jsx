import { useContext } from "react";
import { Footer } from "../../../../components";
import { ThemeContext } from "../../../../utils/theme/ThemeContext"
import NFTHeader from "../ListPage/NFTHeader";
import images from "../../../../constants/images";
const NFTNoticePages = () => {
    const { isToggle, toggleTheme } = useContext(ThemeContext);
    return (
        <ThemeContext.Consumer>
            {({ isToggle, toggleTheme }) => (
                <main className="px-16 dark:bg-[#200A4C] overflow-hidden relative" >
                    <NFTHeader />
                    <div className={`hidden lg:block absolute top-[-80px] left-[250px] w-40 -z-0`}>
                        <img src={!isToggle ? images.topLeft_1 : images.topLeft_1_w} alt="" className='w-full' />
                    </div>
                    <div className={`hidden lg:block absolute top-20 left-[-100px] w-[340px] -z-0`}>
                        <img src={!isToggle ? images.topLeft_2 : images.topLeft_2_w} alt="" className='w-full' />
                    </div>
                    {/* 🟡 Circle 3 🟡*/}
                    <div className={`hidden lg:block absolute bottom-0 top-96 left-[-250px] w-96 -z-0`}>
                        <img src={!isToggle ? images.bottomLeft_3 : images.bottomLeft_3_w} alt="" className='w-full' />
                    </div>
                    {/* 🟡 Circle 4 🟡*/}
                    <div className={`hidden lg:block absolute top-[-10px] right-36 w-48 -z-0`}>
                        <img src={!isToggle ? images.topRight_4 : images.topRight_4_w} alt="" className='w-full' />
                    </div>

                    {/* 🟡 Circle 5 🟡*/}
                    <div className={`hidden lg:block absolute bottom-0 top-96 right-[-120px] w-72 -z-0 `}>
                        <img src={!isToggle ? images.bottomRight_5 : images.bottomRight_5_w} alt="" className='w-full' />
                    </div>

                    <div className="pt-8 z-[50] px-24">
                        <h3 className="text-xl font-bold pb-6 dark:text-white">Legal Notice</h3>
                        <p className="text-sm text-gray-500 pb-10 text-justify z-[1000]">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore verita tis et quasi arr
                            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma gni dolores eos qui ratione voluptatem sequi nesciunt. Nequi
                            m ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia noni Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                            e ab illo inventore verita tis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequ
                            tione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia noni Sed ut perspiciatis unde omnis isten
                            antium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore verita tis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam volupt
                            ur aut odit aut fugit, sed quia consequuntur ma gni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, conser
                            ni Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore verita ae consequ
                            ugiat quo voluptas nulla pariatur
                        </p>
                        <ul className="pb-10">
                            <li style={{ listStyleType: "disc", listStylePosition: "inside" }} className="text-gray-500 font-medium">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque</li>
                            <li style={{ listStyleType: "disc", listStylePosition: "inside" }} className="text-gray-500 font-medium">Sed ut perspiciatis unde omnis iste natus error sit voluptatem</li>
                            <li style={{ listStyleType: "disc", listStylePosition: "inside" }} className="text-gray-500 font-medium">Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque</li>
                        </ul>
                        <p className="text-sm text-gray-500 text-justify z-20">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore verita tis et quasi arr
                            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma gni dolores eos qui ratione voluptatem sequi nesciunt. Nequi
                            m ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia noni Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                            e ab illo inventore verita tis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequ
                            tione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia noni Sed ut perspiciatis unde omnis isten
                            antium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore verita tis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam volupt
                            ur aut odit aut fugit, sed quia consequuntur ma gni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, conser
                            ni Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore verita ae consequ
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore verita tis et quasi arr
                            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma gni dolores eos qui ratione voluptatem sequi nesciunt. Nequi
                            m ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia noni Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                            e ab illo inventore verita tis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequ
                            tione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia noni Sed ut perspiciatis unde omnis isten
                            antium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore verita tis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam volupt
                            ur aut odit aut fugit, sed quia consequuntur ma gni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, conser
                            ni Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore verita ae consewii
                            ugiat quo voluptas nulla pariatur
                        </p>
                    </div>
                    <Footer />
                </main>
            )}
        </ThemeContext.Consumer>
    )
}
export default NFTNoticePages;