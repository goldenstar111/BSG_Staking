import { useContext, useState } from "react";
import { DashboardHeader, Sidebar } from "../../components"
import NewPaymentModal from "../../components/modal/NewPaymentModal";
import ReceiveTokenModal from "../../components/modal/ReceiveTokenModal";
import RequestMoneyModal from "../../components/modal/RequestModal";
import { ThemeContext } from "../../utils/theme/ThemeContext"

const DashboardLayout = ({ children }) => {
  const { isToggle, toggleTheme } = useContext(ThemeContext);
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <main>
      <Sidebar MenuToggling={menuToggle} setMenuToggling={setMenuToggle} />
      <div className="fixed w-full bg-slate-100 z-20">
        <DashboardHeader menuToggling={menuToggle} setMenuToggling={setMenuToggle} />
      </div>
      <div className="lg:ml-[290px] flex flex-col flex-1 z-10 pt-20 sm:pt-10 xs:pt-10">
        {children}
      </div>
    </main>
  )
}

export default DashboardLayout;