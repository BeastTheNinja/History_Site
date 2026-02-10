import { useContext } from "react";
import { DarkModeContext } from "./context/darkmodeContext";

export const DarkmodeToggle = () => {
     const darkModeContext = useContext(DarkModeContext);

     if (!darkModeContext) {
        return <div>Error: DarkModeContext not found</div>;
    }


     const { isDarkMode, toggleDarkMode } = darkModeContext;



    return (
        <>
        <button
            onClick={toggleDarkMode}
            className="text-[18px] font-normal font-inter uppercase text-[#695E48] hover:text-[#D29E62] dark:text-[#F5F5F5] dark:hover:text-[#D29E62] dark:hover:bg-[#1F1F1F] rounded transition-colors">
            {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>

        
        </>
    )
}