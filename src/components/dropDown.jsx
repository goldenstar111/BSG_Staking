import { useState } from "react"

const DropDown = ({ children, title, cls }) => {
    const [dropDownOpen, setdropdownOpen] = useState(true);
    return (
        <div className="dark:bg-bg-sidebar-dark">
            <div onClick={() => setdropdownOpen(!dropDownOpen)} className={`flex hover:cursor-pointer text-sm mt-3 dark:text-white justify-between items-center px-6`}> {title}<i className={`fas transition  text-xs ${dropDownOpen ? "fa-angle-down" : "fa-angle-right "}`}></i></div>
            <div className={`${dropDownOpen ? `top-full opacity-100 visible` : 'hidden opacity-0'} gap-3 px-6  left-0 z-40  w-full pb-6  bg-white py-2 shadow-card  flex   ease-in flex-col dark:bg-bg-sidebar-dark`}>
                {children}
            </div>
            <div className={`border-b mr-6 ${dropDownOpen ? `top-full opacity-100 visible` : 'hidden opacity-0'}`}></div>
        </div>
    )
}
export default DropDown;