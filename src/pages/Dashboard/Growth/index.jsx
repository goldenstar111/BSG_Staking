import React, { useContext, useState } from "react";
import images from "../../../constants/images";
import { ThemeContext } from "../../../utils/theme/ThemeContext";

const BuyLicensePage = () => {
    const { isToggle, toggleTheme } = useContext(ThemeContext);

    return <div className="mt-12 p-2 text-gray-600 dark:text-gray-300">Buy License Page is coming soon.</div>
}

export default BuyLicensePage;