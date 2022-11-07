import { useContext, useState } from "react";
import { ThemeContext } from "../../../../utils/theme/ThemeContext"
import { DashboardHeader, Sidebar } from "../../../../components"
import NFTSideBar from "./nftsidebar";
import NFTHeadBar from "./nftheadbar";
import NFTHeader from "./NFTHeader";

const ListPages = ({ value, value1, handle, handle1, children }) => {
    const { isToggle, toggleTheme } = useContext(ThemeContext);
    const [menuToggling, setMenuToggling] = useState(false);

    return (
        <main>
            <NFTSideBar value={value} value1={value1} handle={handle} handle1={handle1} />
            <div className="fixed w-full bg-slate-100 z-20">
                <NFTHeadBar menuToggling={menuToggling} setMenuToggling={setMenuToggling} />
                {/* <DashboardHeader /> */}
            </div>
            {children}
        </main>
    )
}
export default ListPages;