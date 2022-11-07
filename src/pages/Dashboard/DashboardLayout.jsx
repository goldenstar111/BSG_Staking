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
        {/* <div className=" sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100">
          <button type="button" className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Open sidebar</span>
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div> */}
        {children}
      </div>
    </main>
  )
}

export default DashboardLayout;